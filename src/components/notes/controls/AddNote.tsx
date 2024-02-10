import { Dialog, DialogContent, DialogFooter, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { createNoteSchema, validateCreateNote } from "@/lib/validation/noteSchema";
import { zodResolver } from '@hookform/resolvers/zod';

type NoteAddProps = {
    isOpened: boolean;
    setIsOpened: (value: boolean | ((prevVar: boolean) => boolean)) => void;
};

const AddNote = ({ isOpened, setIsOpened }: NoteAddProps) => {
    const form = useForm<createNoteSchema>({
        resolver: zodResolver(validateCreateNote),
        defaultValues: {
            title: "",
            content: "",
        },
    });

    const { reset } = form;

    function onAdd(input: createNoteSchema) {
        console.log(input);
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
                                            <FormLabel>
                                                Title
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    id="name"
                                                    className="col-span-3"
                                                    {...field}
                                                />
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
                                            <FormLabel>
                                                Content
                                            </FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    id="username"
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
                            <Button type="submit" className="w-1/2 my-2">Save changes</Button>
                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog >
    );
};

export default AddNote;