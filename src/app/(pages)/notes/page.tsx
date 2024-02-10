import Controls from "@/components/notes/controls/Controls";
import GridNotes from "@/components/notes/grid/GridNotes";

const page = () => {
  return (
    <div className="pt-20 w-full min-h-screen container flex flex-col">
      <Controls />
      <GridNotes />
    </div>
  );
};

export default page;
