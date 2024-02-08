import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen w-screen flex justify-center">
      <div className="mt-[30vh] flex flex-col items-center">
        <h2 className="text-3xl font-bold">
          Page <span className="text-primary font-normal">is not found</span>
        </h2>
        <Link href="/">
          <Button variant="default" className="mt-6 text-xl">
            Return Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
