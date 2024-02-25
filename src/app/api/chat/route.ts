import { OpenAIStream, StreamingTextResponse } from 'ai';
import type { ChatCompletionMessage, ChatCompletionSystemMessageParam } from 'openai/resources/index.mjs';
import { getEmbedding } from '@/lib/openai';
import { auth } from '@clerk/nextjs';
import { notesIndex } from '@/lib/pinecone';
import prisma from "@/lib/prisma";
import openai from '@/lib/openai';

export async function POST(req: Request) {
    try {
        const { userId } = auth();

        if (!userId) {
            throw Error("User is not authenticated");
        }

        const body = await req.json();
        const messages: ChatCompletionMessage[] = body.messages

        const messagesTruncated = messages.slice(-6); // getting last 6 messages

        const embedding = await getEmbedding(
            messagesTruncated.map((message) => message.content).join("\n")
        )

        const vectorQueryResponse = await notesIndex.query({
            vector: embedding,
            topK: 4, // number of notes, that can be injected to ai
            filter: { userId },
        })

        const relevantNotes = await prisma.note.findMany({
            where: {
                id: {
                    in: vectorQueryResponse.matches.map((match) => match.id),
                },
            },
        })

        const systemMessage: ChatCompletionSystemMessageParam = {
            role: "system",
            content:
                "You are an intelligent note-taking app. You answer the user's question based on their existing notes. " +
                "The relevant notes for this query are:\n" +
                relevantNotes
                    .map((note) => `Title: ${note.title}\n\nContent:\n${note.content}`)
                    .join("\n\n"),
        }

        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            stream: true,
            messages: [systemMessage, ...messagesTruncated]
        });

        const stream = OpenAIStream(response);
        return new StreamingTextResponse(stream);
    } catch (e) {
        console.error(e);
        return Response.json({ error: "Internal server error" }, { status: 500 })
    }
}