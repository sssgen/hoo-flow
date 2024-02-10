"use client";
import { Button } from "@/components/ui/button";
import { BotIcon, PlusIcon } from "lucide-react";
import AddNote from "@/components/notes/controls/AddNote";
import { useState } from "react";

const ControlButtons = () => {
  const [isAddNoteOpened, setIsAddNoteOpened] = useState(false);
  return (
    <>
      <AddNote isOpened={isAddNoteOpened} setIsOpened={setIsAddNoteOpened} />

      <Button
        className="inline-flex gap-2 text-foreground bg-primary/70"
        variant="default"
      >
        <span>
          <BotIcon />
        </span>
        Ask Bot
      </Button>
      <Button
        className="inline-flex gap-2"
        variant="secondary"
        onClick={() => setIsAddNoteOpened(!isAddNoteOpened)}
      >
        <span>
          <PlusIcon />
        </span>
        Note
      </Button>
    </>
  );
};

export default ControlButtons;
