"use client"
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import NavbarLink from "./NavbarLink";
import Link from "next/link";

const NavbarMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger onClick={() => setIsOpen(!isOpen)}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
          />
        </svg>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col items-start py-16 px-5 text-2xl">
        <Link
          onClick={() => setIsOpen(false)}
          href="/"
          className="text-foreground font-normal focus:text-primary"
        >
          Home
        </Link>
        <Link
          onClick={() => setIsOpen(false)}
          href="/notes"
          className="text-foreground font-normal focus:text-primary"
        >
          Solution
        </Link>
      </SheetContent>
    </Sheet>
  );
};

export default NavbarMenu;
