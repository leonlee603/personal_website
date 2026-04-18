import {
  RiGithubLine,
  RiInstagramLine,
  RiLinkedinBoxLine,
} from "react-icons/ri";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="bg-background px-8 py-6 md:py-3 border-t border-border">
      <div className="container mx-auto flex max-w-1248 flex-col items-center justify-between gap-3 md:flex-row">
        <div className="flex flex-col gap-3 md:gap-2 text-muted-foreground md:flex-row">
          <span className="text-center">&copy; {year}. All rights Reserved.</span>
          <span>
            Made by Leon with{" "}
            <a className="underline underline-offset-4 hover:text-primary" href="https://nextjs.org/" target="_blank">
              Next.js
            </a>{" "}
            and{" "}
            <a
              className="underline underline-offset-4 hover:text-primary"
              href="https://www.sanity.io/"
              target="_blank"
            >
              Sanity
            </a>
            .
          </span>
        </div>
        <div className="flex flex-row items-center gap-4 md:gap-2">
          <div className="hidden text-muted-foreground lg:block">Keep in touch</div>
          <a
            href="https://www.instagram.com/418_tea_pot"
            target="_blank"
            className="rounded-full bg-secondary p-2 hover:text-primary transition-colors"
          >
            <RiInstagramLine className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/leonlee603"
            target="_blank"
            className="rounded-full bg-secondary p-2 hover:text-primary transition-colors"
          >
            <RiLinkedinBoxLine className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/leonlee603"
            target="_blank"
            className="rounded-full bg-secondary p-2 hover:text-primary transition-colors"
          >
            <RiGithubLine className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
