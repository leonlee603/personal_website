"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggleBtn } from "./ModeToggleBtn";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";

const links = [
  { href: "/blog", title: "Blog" },
  { href: "/notes", title: "Notes" },
  { href: "/projects", title: "Projects" },
  { href: "/stacks", title: "Stacks" },
  { href: "/me", title: "About" },
];

export default function Header() {
  const pathName = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-background px-8 py-3">
      <div className="container mx-auto flex max-w-1248 items-center justify-between">
        <Link className="font-bold tracking-tight" href="/">
          Leon
        </Link>
        <div>
          <div className="flex gap-3 md:hidden">
          <ThemeToggleBtn />
            <Sheet>
              <SheetTrigger>
                <AlignJustify />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader className="flex h-full justify-center">
                  <SheetTitle></SheetTitle>
                  <SheetDescription className="m-0" asChild>
                    <ul className="flex flex-col items-center gap-3">
                      <li>
                        <SheetClose asChild>
                          <Button
                            variant="ghost"
                            asChild
                            className="text-base hover:bg-transparent"
                          >
                            <Link
                              className={`text-2xl ${pathName === "/" ? "text-primary" : ""}`}
                              href="/"
                            >
                              Home
                            </Link>
                          </Button>
                        </SheetClose>
                      </li>
                      {links.map((link) => (
                        <li key={link.href}>
                          <SheetClose asChild>
                            <Button
                              variant="ghost"
                              asChild
                              className="text-base hover:bg-transparent"
                            >
                              <Link
                                className={`text-2xl ${pathName.startsWith(link.href) ? "text-primary" : ""}`}
                                href={link.href}
                              >
                                {link.title}
                              </Link>
                            </Button>
                          </SheetClose>
                        </li>
                      ))}
                    </ul>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
          <div className="hidden flex-row gap-6 md:flex">
            <ul className="flex items-center gap-1 font-semibold">
              {links.map((link) => (
                <li key={link.href}>
                  <Button variant="ghost" asChild className="text-base">
                    <Link
                      className={`${pathName.startsWith(link.href) ? "text-primary" : ""} hover:text-primary`}
                      href={link.href}
                    >
                      {link.title}
                    </Link>
                  </Button>
                </li>
              ))}
            </ul>
            <ThemeToggleBtn />
          </div>
        </div>
      </div>
    </header>
  );
}
