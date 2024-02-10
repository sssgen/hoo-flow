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

type NoteProps = {
  title: string;
  content?: string;
  noteId: string;
};

const Note = ({ title, content, noteId }: NoteProps) => {
  const [isNoteOpened, setIsNoteOpened] = useState(false);
  return (
    <>
      <Card
        onClick={() => setIsNoteOpened(!isNoteOpened)}
        className="transition-all hover:scale-[1.01] hover:shadow-lg hover:shadow-muted-foreground"
      >
        <CardHeader>
          <CardTitle className="inline-flex justify-between">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="whitespace-pre-line">
            {content}
          </CardDescription>
        </CardContent>
      </Card>
      <NoteManage
        isOpened={isNoteOpened}
        setIsOpened={setIsNoteOpened}
        noteId={noteId}
      />
    </>
  );
};

export default Note;
