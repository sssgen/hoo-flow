import { cn } from "@/lib/utils";
import { BotIcon, SendIcon, XCircle } from "lucide-react";
import { useChat } from "ai/react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/components/ui/use-toast";
import { useEffect } from "react";

type AIChatBoxProps = {
  isOpened: boolean;
  setIsOpened: (value: boolean | ((prevVar: boolean) => boolean)) => void;
};

export default function AIChatBox({ isOpened, setIsOpened }: AIChatBoxProps) {
  const { input, handleInputChange, handleSubmit, error, messages } = useChat();

  const { toast } = useToast();

  useEffect(() => {
    if (error) {
      toast({ title: "An error occured", description: `${error}` });
    }
  }, [error]);

  return (
    <div
      className={cn(
        "bottom-2 right-0 z-10 w-full max-w-[500px] p-2 xl:right-36",
        isOpened ? "fixed" : "hidden"
      )}
    >
      <div className="flex h-[600px] flex-col bg-background border shadow-xl relative justify-between">
        <div className="w-full border-b items-center flex px-3 py-3 justify-between">
          <h2>Messages</h2>
          <button className="" onClick={() => setIsOpened(!isOpened)}>
            <span>
              <XCircle className="h-6 w-6" />
            </span>
          </button>
        </div>
        <div className="h-full px-4 overflow-auto">
          {messages.map((message, index) => (
            <ChatMessage key={index} message={message} />
          ))}
        </div>
        <div>
          <form onSubmit={handleSubmit} className="m-3 flex gap-3">
            <Input
              value={input}
              onChange={handleInputChange}
              placeholder="Write something.."
            />
            <Button
              type="submit"
              variant="ghost"
              className="rounded-full border border-foreground/10 h-[38px] w-[38px]"
            >
              <span>
                <SendIcon className="h-5 w-5 text-foreground" />
              </span>
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

function ChatMessage({
  message: { role, content },
}: {
  message: { role: string; content: string };
}) {
  const { user } = useUser();

  return (
    <div
      className={`${
        role === "user" ? "items-end" : ""
      } my-8 flex flex-col gap-2`}
    >
      <div className="flex items-center gap-2 w-fit text-lg text-primary font-bold">
        {role === "user" ? (
          <Avatar className="h-8 w-8">
            <AvatarImage src={user?.imageUrl} />
            <AvatarFallback>
              {user?.firstName ? user.firstName[0] : ""}
            </AvatarFallback>
          </Avatar>
        ) : (
          <BotIcon className="h-8 w-8 text-white" />
        )}
        {role === "user" ? "You" : "Bot"}
      </div>
      <div className={`${role === "user" ? "text-right" : "text-left"} w-fit`}>
        {content}
      </div>
    </div>
  );
}
