import Link from "next/link";

type NavbarLinkProps = {
  href: string;
  title: string;
};

const NavbarLink = ({ href, title }: NavbarLinkProps) => {
  return (
    <Link className="text-foreground text-base font-normal" href={href}>
      {title}
    </Link>
  );
};

export default NavbarLink;
