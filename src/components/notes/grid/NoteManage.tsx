import { Dialog, DialogContent, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { updateNoteSchema, validateCreateNote, validateUpdateNote } from "@/lib/validation/noteSchema";
import { zodResolver } from '@hookform/resolvers/zod';

type NoteManageProps = {
    isOpened: boolean;
    setIsOpened: (value: boolean | ((prevVar: boolean) => boolean)) => void;
};

const NoteManage = ({ isOpened, setIsOpened }: NoteManageProps) => {
    const form = useForm<updateNoteSchema>({
        resolver: zodResolver(validateUpdateNote),
        defaultValues: {
            title: "",
            content: "",
        },
    });

    function onEdit(input: updateNoteSchema) {
        console.log(input)
    }

    return (
        <Dialog open={isOpened} onOpenChange={setIsOpened}>
            <DialogContent className="sm:max-w-[425px]">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onEdit)}>
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
                        <Button type="submit">Save changes</Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog >
    );
};

export default NoteManage;