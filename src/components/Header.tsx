import Link from "next/link";
import { ThemeToggleBtn } from "./ModeToggleBtn";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="px-8 py-3">
      <div className="container mx-auto flex max-w-1248 items-center justify-between">
        <Link className="font-bold tracking-tight" href="/">
          Leon
        </Link>
        <div className="flex flex-row gap-6">
          <ul className="flex items-center gap-1 font-semibold">
            <li>
              <Button variant="ghost" asChild>
                <Link className="" href="/blog">
                  Blog
                </Link>
              </Button>
            </li>
            <li>
              <Button variant="ghost" asChild>
                <Link className="" href="/studio">
                  Sanity Studio
                </Link>
              </Button>
            </li>
          </ul>
          <ThemeToggleBtn />
        </div>
      </div>
    </header>
  );
}
