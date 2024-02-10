import Note from "@/components/notes/grid/Note";
import { getNotesByUserId } from "@/server/Note";

const GridNotes = async () => {
  const notes = await getNotesByUserId();
  return (
    <div className="w-full mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {notes.length >= 1 ? (
        notes.map((note) => (
          <Note noteId={note.id} title={note.title} content={note.content} />
        ))
      ) : (
        <h2 className="col-span-full text-center text-muted-foreground">
          There are no notes..
        </h2>
      )}
    </div>
  );
};

export default GridNotes;
