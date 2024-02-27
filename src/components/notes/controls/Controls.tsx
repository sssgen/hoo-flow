import { Input } from "@/components/ui/input";
import ControlButtons from "@/components/notes/controls/ControlButtons";

const Controls = () => {
  return (
    <div className="w-full h-full flex sm:flex-row flex-col gap-6 sm:gap-4 mt-10">
      <Input
        placeholder="Search note here.."
        className="border border-primary/50 focus-visible:ring-0 focus-visible:border-primary"
      />
      <ControlButtons />
    </div>
  );
};

export default Controls;
