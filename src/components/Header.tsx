"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggleBtn } from "./ModeToggleBtn";
import { Button } from "./ui/button";

const links = [
  { href: "/me", title: "Me" },
  { href: "/blog", title: "Blog" },
  { href: "/notes", title: "Notes" },
  { href: "/projects", title: "Projects" },
  { href: "/studio", title: "Studio" },
];

export function Header() {
  const pathName = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-background px-8 py-3">
      <div className="container mx-auto flex max-w-1248 items-center justify-between">
        <Link className="font-bold tracking-tight" href="/">
          Leon
        </Link>
        <div className="flex flex-row gap-6">
          <ul className="flex items-center gap-1 font-semibold">
            {links.map((link) => (
              <li key={link.href}>
                <Button variant="ghost" asChild>
                  <Link className={`${link.href === pathName ? 'text-primary' : ''} hover:text-primary`} href={link.href}>
                    {link.title}
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
          <ThemeToggleBtn />
        </div>
      </div>
    </header>
  );
}
