import type { ReactElement } from "react";
import NavbarMenu from "./NavbarMenu";
import { BrainCircuitIcon } from "lucide-react";
import Link from "next/link";
import ThemeController from "@/app/components/ThemeController";

type NavbarProps = {
  children: ReactElement[];
};

const Navbar = ({ children }: NavbarProps) => {
  return (
    <nav className="flex flex-row container justify-between items-center fixed mt-[30px]">
      <Link href="/" className="inline-flex items-center gap-2">
        <BrainCircuitIcon className="text-primary h-[48px] w-[48px]" />
        <p className="text-2xl">
          Hoo<span className="text-3xl font-bold text-primary">Flow</span>
        </p>
      </Link>

      <div className="flex-row gap-[3.5rem] h-[2rem] items-center hidden md:flex">
        {children}
        <ThemeController />
      </div>

      <div className="flex items-center md:hidden gap-4">
        <NavbarMenu />
        <ThemeController />
      </div>
    </nav>
  );
};

export default Navbar;
