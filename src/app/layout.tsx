import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/app/components/theme-provider";
import "./globals.css";
import Navbar from "@/app/components/navbar/Navbar";
import NavbarLink from "@/app/components/navbar/NavbarLink";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "HooFlow",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} flex flex-col items-center`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar>
            <NavbarLink href="/" title="Home" />
            <NavbarLink href="/about" title="About Us" />
            <NavbarLink href="/" title="Features" />
            <NavbarLink href="/solution" title="Solution" />
          </Navbar>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
