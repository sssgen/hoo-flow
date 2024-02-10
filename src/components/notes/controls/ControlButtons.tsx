import { Button } from "@/components/ui/button";
import { BotIcon, PlusIcon } from "lucide-react";

const ControlButtons = () => {
  return (
    <>
      <Button
        className="inline-flex gap-2 text-foreground bg-primary/70"
        variant="default"
      >
        <span>
          <BotIcon />
        </span>
        Ask Bot
      </Button>
      <Button className="inline-flex gap-2" variant="secondary">
        <span>
          <PlusIcon />
        </span>
        Note
      </Button>
    </>
  );
};

export default ControlButtons;
