import Link from 'next/link';
import { ThemeToggleBtn } from './ModeToggleBtn';
import { Button } from './ui/button';

export function Header() {
  return (
    <div className="from-pink-50 to-white  p-6">
      <header className="flex items-center justify-between p-6 rounded-lg container mx-auto shadow-pink-50">
        <Link className="font-bold tracking-tight" href="/">
          Leon
        </Link>
        <div className="flex flex-row gap-6">
          <ul className="flex items-center gap-1 font-semibold text-slate-700">
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
      </header>
    </div>
  );
}
