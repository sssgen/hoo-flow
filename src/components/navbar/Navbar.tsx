import type { ReactElement } from "react";
import NavbarMenu from "./NavbarMenu";
import { BrainCircuitIcon } from "lucide-react";
import Link from "next/link";
import ThemeController from "@/components/ThemeController";
import NavbarAuth from "./NavbarAuth";

type NavbarProps = {
  children: ReactElement[];
};

const Navbar = ({ children }: NavbarProps) => {
  return (
    <nav className="flex z-20 flex-row w-full px-3 sm:px-4 md:container justify-between items-center fixed bg-background py-[15px]">
      <Link href="/" className="inline-flex items-center gap-0.5 sm:gap-2">
        <BrainCircuitIcon className="text-primary h-[32px] w-[32px] sm:h-[48px] sm:w-[48px]" />
        <p className="text-lg sm:text-2xl">
          Hoo<span className="text-xl sm:text-3xl font-bold text-primary">Flow</span>
        </p>
      </Link>

      <div className="flex-row gap-[3.5rem] h-[2rem] items-center hidden md:flex">
        {children}
        <NavbarAuth />
        <ThemeController />
      </div>

      <div className="flex items-center md:hidden gap-4">
        <NavbarAuth />
        <NavbarMenu />
        <ThemeController />
      </div>
    </nav>
  );
};

export default Navbar;
