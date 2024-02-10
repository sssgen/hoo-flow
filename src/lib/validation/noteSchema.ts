import { z } from "zod";

export const validateCreateNote = z.object({
    title: z.string().min(1, { message: "Title is required" }),
    content: z.string().optional(),
});

export type createNoteSchema = z.infer<typeof validateCreateNote>;


export const validateUpdateNote = z.object({
    title: z.string().min(1, { message: "Title is required" }),
    content: z.string().optional(),
});

export type updateNoteSchema = z.infer<typeof validateUpdateNote>


export const validateDeleteNote = z.object({
    title: z.string().min(1, { message: "Title is required" }),
    content: z.string().optional(),
});

export type deleteNoteSchema = z.infer<typeof validateDeleteNote>