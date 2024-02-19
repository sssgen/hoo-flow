"use client";
import { Button } from "@/components/ui/button";
import { BotIcon, PlusIcon } from "lucide-react";
import AddNote from "@/components/notes/controls/AddNote";
import { useState } from "react";
import AIChatBox from "@/components/notes/chat/AIChatBox";

const ControlButtons = () => {
  const [isAddNoteOpened, setIsAddNoteOpened] = useState(false);
  const [isAskAiOpened, setIsAskAiOpened] = useState(false);
  return (
    <>
      <AddNote isOpened={isAddNoteOpened} setIsOpened={setIsAddNoteOpened} />
      <AIChatBox isOpened={isAskAiOpened} setIsOpened={setIsAskAiOpened} />

      <Button
        className="inline-flex gap-2 text-foreground bg-primary/70"
        variant="default"
        onClick={() => setIsAskAiOpened(!isAskAiOpened)}
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
