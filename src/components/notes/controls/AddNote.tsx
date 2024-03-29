import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
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
import { createNote } from "@/server/Note";
import LoadingButton from "@/components/notes/controls/LoadingButton";
import { useState } from "react";

type NoteAddProps = {
  isOpened: boolean;
  setIsOpened: (value: boolean | ((prevVar: boolean) => boolean)) => void;
};

const AddNote = ({ isOpened, setIsOpened }: NoteAddProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<createNoteSchema>({
    resolver: zodResolver(validateCreateNote),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const { reset } = form;

  async function onAdd(input: createNoteSchema) {
    setIsLoading(true);
    await createNote(input);
    setIsLoading(false);
    setIsOpened(false);
    reset();
  }

  return (
    <Dialog open={isOpened} onOpenChange={setIsOpened}>
      <DialogContent>
        <DialogTitle className="text-center my-2">Add Note</DialogTitle>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onAdd)}>
            <div className="grid gap-4 py-4">
              <div className="flex flex-col gap-4">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input className="col-span-3" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex flex-col gap-4">
                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Content</FormLabel>
                      <FormControl>
                        <Textarea
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
                Save
              </LoadingButton>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddNote;
