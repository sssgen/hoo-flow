import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import {
  createNoteSchema,
  validateCreateNote,
} from "@/lib/validation/noteSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import LoadingButton from "./LoadingButton";
import { useState } from "react";

type AskAiProps = {
  isOpened: boolean;
  setIsOpened: (value: boolean | ((prevVar: boolean) => boolean)) => void;
};

const AskAi = ({ isOpened, setIsOpened }: AskAiProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<createNoteSchema>({
    resolver: zodResolver(validateCreateNote),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const { reset } = form;

  async function onAsk(input: createNoteSchema) {
    setIsLoading(true);
    alert(input.title);
    setIsLoading(false);
    setIsOpened(false);
    reset();
  }

  return (
    <Dialog open={isOpened} onOpenChange={setIsOpened}>
      <DialogContent>
        <DialogTitle className="text-center my-2">Ask Bot</DialogTitle>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onAsk)}>
            <div className="grid gap-4 py-4">
              <div className="flex flex-col gap-4">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your question</FormLabel>
                      <FormControl>
                        <Textarea
                          id="title"
                          className="col-span-3 max-h-[36vh]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <LoadingButton
                type="submit"
                className="w-1/2 my-2"
                isLoading={isLoading}
              >
                Ask
              </LoadingButton>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AskAi;
