import {
  RiGithubLine,
  RiInstagramLine,
  RiLinkedinBoxLine,
} from "react-icons/ri";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="bg-background px-8 py-3">
      <div className="container mx-auto flex max-w-1248 items-center justify-between">
        <div className="text-muted-foreground">
          &copy; {year}. All rights Reserved. Made by Leon with{" "}
          <a className="underline" href="https://nextjs.org/" target="_blank">
            Next.js
          </a>{" "}
          and{" "}
          <a
            className="underline"
            href="https://www.sanity.io/"
            target="_blank"
          >
            Sanity
          </a>
          .
        </div>
        <div className="flex flex-row items-center gap-2">
          <div className="text-muted-foreground">Keep in touch</div>
          <a
            href="https://www.instagram.com/418_tea_pot"
            target="_blank"
            className="rounded-full bg-secondary p-2"
          >
            <RiInstagramLine className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/leonlee603"
            target="_blank"
            className="rounded-full bg-secondary p-2"
          >
            <RiLinkedinBoxLine className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/leonlee603"
            target="_blank"
            className="rounded-full bg-secondary p-2"
          >
            <RiGithubLine className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
