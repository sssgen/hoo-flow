"use server";
import { Note, PrismaClient } from "@prisma/client";
import { auth } from "@clerk/nextjs";
import {
  createNoteSchema,
  updateNoteSchema,
  validateCreateNote,
  validateUpdateNote,
} from "@/lib/validation/noteSchema";
import { revalidatePath } from "next/cache";
import { getEmbedding } from "@/lib/openai";
import { notesIndex } from "@/lib/pinecone";

const prisma = new PrismaClient();

export async function getNotesByUserId(): Promise<Note[]> {
  const { userId } = auth();

  if (!userId) {
    throw new Error("Not authenticated!");
  }

  try {
    return await prisma.note.findMany({
      where: {
        user_id: userId,
      },
    });
  } catch (error) {
    throw new Error(`Failed to retrieve notes: ${error}`);
  }
}

export async function createNote(input: createNoteSchema) {
  const { userId } = auth();

  if (!userId) {
    throw Error("Not authenticated!");
  }

  const validated = validateCreateNote.safeParse(input);

  if (!validated.success) {
    throw new Error(`Failed schema validation: ${validated.error}`);
  }

  const embedding = await getEmbeddingForNote(input.title, input.content);

  await prisma.$transaction(async (tx) => {
    try {
      const note = await tx.note.create({
        data: {
          title: validated.data.title,
          content: validated.data.content || "",
          user_id: userId,
        },
      });

      await notesIndex.upsert([
        {
          id: note.id,
          values: embedding,
          metadata: { userId },
        },
      ]);

      return note;
    } catch (error) {
      throw new Error(`Failed to create note: ${error}`);
    }
  });

  revalidatePath("/notes");
}

export async function deleteNote(nodeId: string) {
  const { userId } = auth();

  if (!userId) {
    throw Error("Not authenticated!");
  }
  await prisma.$transaction(async (tx) => {
    try {
      await tx.note.delete({
        where: {
          id: nodeId,
        },
      });

      await notesIndex.deleteOne(nodeId);
    } catch (error) {
      throw new Error(`Failed to create note: ${error}`);
    }
  });

  revalidatePath("/notes");
}

export async function updateNote(input: updateNoteSchema, noteId: string) {
  const { userId } = auth();

  if (!userId) {
    throw Error("Not authenticated!");
  }

  const validated = validateUpdateNote.safeParse(input);

  if (!validated.success) {
    throw new Error(`Failed schema validation: ${validated.error}`);
  }

  const embedding = await getEmbeddingForNote(input.title, input.content);

  await prisma.$transaction(async (tx) => {
    try {
      const updatedNote = await tx.note.update({
        where: {
          id: noteId,
        },
        data: {
          title: validated.data.title,
          content: validated.data.content || "",
        },
      });

      await notesIndex.upsert([
        {
          id: updatedNote.id,
          values: embedding,
          metadata: { userId },
        },
      ]);

      return updatedNote;
    } catch (error) {
      throw new Error(`Failed to update note: ${error}`);
    }
  });

  revalidatePath("/notes");
}

async function getEmbeddingForNote(title: string, content: string | undefined) {
  return getEmbedding(title + "\n\n" + content ?? "");
}
