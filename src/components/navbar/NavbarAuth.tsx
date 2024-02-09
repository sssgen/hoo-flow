"use client";
import { useUser } from "@clerk/nextjs";
import { useClerk } from "@clerk/nextjs";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";

const NavbarAuth = () => {
  const { isSignedIn, user, isLoaded } = useUser();
  const { signOut } = useClerk();

  if (isLoaded) {
    if (isSignedIn === false) {
      return (
        <Link
          href="/sign-in"
          className="transition-all duration-200 py-2 px-4 rounded-full border-2 border-primary/60"
          style={{ backfaceVisibility: "hidden" }}
        >
          Sign in
        </Link>
      );
    } else {
      return (
        <div className="flex flex-row gap-2 items-center justify-center flex-nowrap">
          <Popover>
            <PopoverTrigger>
              <Avatar>
                <AvatarImage src={user.imageUrl} />
                <AvatarFallback delayMs={0}>
                  <Skeleton className="h-full w-full rounded-full" />
                </AvatarFallback>
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="w-52">
              <Button className="w-full font-bold" onClick={() => signOut()}>
                Log Out
              </Button>
            </PopoverContent>
          </Popover>
        </div>
      );
    }
  }
  return <Skeleton className="h-[32px] w-[32px] rounded-full" />;
};

export default NavbarAuth;
