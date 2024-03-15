"use client";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  CardHeader,
} from "@/components/ui/card";
import NoteManage from "./NoteManage";
import type { Note } from "@prisma/client";

const Note = ({ note }: { note: Note }) => {
  const [isNoteOpened, setIsNoteOpened] = useState(false);
  return (
    <>
      <Card
        onClick={() => setIsNoteOpened(!isNoteOpened)}
        className="transition-all hover:scale-[1.01] hover:shadow-lg hover:shadow-muted-foreground"
      >
        <CardHeader>
          <CardTitle className="inline-flex justify-between">{note.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="whitespace-pre-line max-h-[150px] truncate">
            {note.content}
          </CardDescription>
        </CardContent>
      </Card>
      <NoteManage
        isOpened={isNoteOpened}
        setIsOpened={setIsNoteOpened}
        note={note}
      />
    </>
  );
};

export default Note;
