import { NextResponse } from "next/server";
import { authMiddleware } from "@clerk/nextjs";

function getCookieValue(
  cookies: string | undefined,
  name: string
): string | undefined {
  if (!cookies) return undefined;
  const cookiePair = cookies
    .split("; ")
    .find((row) => row.startsWith(`${name}=`));
  return cookiePair ? decodeURIComponent(cookiePair.split("=")[1]) : undefined;
}

function setCookie(
  res: NextResponse,
  name: string,
  value: string,
  options: string = ""
) {
  const cookie = `${name}=${encodeURIComponent(
    value
  )}; Path=/; HttpOnly; ${options}`;
  res.headers.append("Set-Cookie", cookie);
}

export default authMiddleware({
  publicRoutes: ["/sign-in", "/sign-up", "/"],

  afterAuth(auth, req) {
    try {
      const url = req.nextUrl.clone();
      const isPublicRoute = auth.isPublicRoute;
      const isLoggedIn = !!auth.userId;

      if (!isLoggedIn && !isPublicRoute) {
        const signInUrl = `${req.nextUrl.origin}/sign-in`;
        const res = NextResponse.redirect(signInUrl);
        setCookie(res, "returnTo", url.pathname, "Secure; SameSite=Lax");
        return res;
      } else if (isLoggedIn) {
        const cookies = req.headers.get("cookie");
        let returnTo = getCookieValue(
          cookies ? cookies : undefined,
          "returnTo"
        );

        // Ensure that returnTo is not null before attempting to redirect
        returnTo = returnTo ?? undefined; // Convert null to undefined if necessary

        if (returnTo) {
          const origin = process.env.ORIGIN;
          const res = NextResponse.redirect(`${origin}${returnTo}`);
          setCookie(
            res,
            "returnTo",
            "",
            "Max-Age=0; HttpOnly; Secure; SameSite=Lax"
          );
          return res;
        }
      }

      return NextResponse.next();
    } catch (error: any) {
      console.error(error.digest);
    }
  },
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/(api|trpc)(.*)"],
};
