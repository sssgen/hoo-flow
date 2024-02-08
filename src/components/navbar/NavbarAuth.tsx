"use client";
import { UserProfile, useUser } from "@clerk/nextjs";
import Link from "next/link";

const NavbarAuth = () => {
  const { isSignedIn } = useUser();

  if (!isSignedIn) {
    return (
      <Link
        href="/sign-in"
        className="transition-all duration-200 py-2 px-4 rounded-full border-2 border-primary/60"
        style={{ backfaceVisibility: "hidden" }}
      >
        Sign in
      </Link>
    );
  }

  return (
    <div className="flex flex-row gap-2 items-center justify-center flex-nowrap">
      <UserProfile />
    </div>
  );
};

export default NavbarAuth;
