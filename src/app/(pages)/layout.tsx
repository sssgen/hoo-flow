import Navbar from "@/components/navbar/Navbar";
import NavbarLink from "@/components/navbar/NavbarLink";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar>
        <NavbarLink href="/" title="Home" />
        <NavbarLink href="/solution" title="Solution" />
      </Navbar>
      {children}
    </>
  );
}
