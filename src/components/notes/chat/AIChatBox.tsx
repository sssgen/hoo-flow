import { cn } from "@/lib/utils";
import { SendIcon, XCircle } from "lucide-react";
import { useChat } from "ai/react"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type AIChatBoxProps = {
    isOpened: boolean;
    setIsOpened: (value: boolean | ((prevVar: boolean) => boolean)) => void;
};

export default function AIChatBox({ isOpened, setIsOpened }: AIChatBoxProps) {
    const {
        messages,
        input,
        handleInputChange,
        handleSubmit,
        setMessages,
        isLoading,
        error
    } = useChat();

    return (
        <div className={cn(
            "bottom-2 right-0 z-10 w-full max-w-[500px] p-2 xl:right-36",
            isOpened ? "fixed" : "hidden",
        )}
        >
            <div className="w-full flex items-center justify-end translate-y-9 -translate-x-4">
                <button className="" onClick={() => setIsOpened(!isOpened)}>
                    <span>
                        <XCircle className="h-6 w-6" />
                    </span>
                </button>
            </div>
            <div className="flex h-[600px] flex-col bg-background border shadow-xl relative justify-between">
                <div className="w-full h-12 border-b items-center flex pl-6">
                    <h2>Messages</h2>
                </div>
                <div>
                    <form onSubmit={handleSubmit} className="m-3 flex gap-1">
                        <Input
                            value={input}
                            onChange={handleInputChange}
                            placeholder="Write something.."
                        />
                        <Button type="submit" variant="ghost" className="rounded-full">
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