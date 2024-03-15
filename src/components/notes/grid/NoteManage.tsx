import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
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
  updateNoteSchema,
  validateUpdateNote,
} from "@/lib/validation/noteSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { deleteNote, updateNote } from "@/server/Note";
import LoadingButton from "../controls/LoadingButton";
import type { Note } from "@prisma/client";
import { toast } from "@/components/ui/use-toast";

type NoteManageProps = {
  isOpened: boolean;
  setIsOpened: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  note: Note;
};

const NoteManage = ({ isOpened, setIsOpened, note }: NoteManageProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<updateNoteSchema>({
    resolver: zodResolver(validateUpdateNote),
    defaultValues: {
      title: note ? note.title : "",
      content: note ? note.content : "",
    },
  });

  async function onEdit(input: updateNoteSchema) {
    try {
      setIsLoading(true);

      await updateNote(input, note.id);

      form.reset();
      setIsLoading(false);
      setIsOpened(false);
    } catch (e) {
      toast({
        title: "An error occured while updating note",
        description: `${e}`,
      })
    }
  }

  async function onDelete(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    try {
      setIsLoading(true);

      await deleteNote(note.id);

      setIsLoading(false);
      setIsOpened(false);
    } catch (e) {
      toast({
        title: "An error occured while deleting note",
        description: `${e}`,
      })
    }
  }

  return (
    <Dialog open={isOpened} onOpenChange={setIsOpened}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogTitle className="text-center my-2">Update Note</DialogTitle>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onEdit)}>
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
                          className="col-span-3 h-[32vh] max-h-[36vh]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="flex flex-row flex-nowrap items-center justify-center gap-4">
              <LoadingButton
                variant="destructive"
                className="w-1/2"
                onClick={(e: any) => onDelete(e)}
                isLoading={isLoading}
              >
                Delete Note
              </LoadingButton>
              <LoadingButton
                type="submit"
                className="w-1/2"
                isLoading={isLoading}
              >
                Save changes
              </LoadingButton>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default NoteManage;
