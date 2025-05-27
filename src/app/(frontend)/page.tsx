import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Title from "@/components/Title";
import BlogListHome from "@/components/BlogListHome";
import NotesListHome from "@/components/NotesListHome";
import figmaIcon from "../../../public/stacks/figma.avif";
import reactIcon from "../../../public/stacks/react.svg";
import notionIcon from "../../../public/stacks/notion.avif";
import nextIcon from "../../../public/stacks/nextjs.svg";
import wordpressIcon from "../../../public/stacks/wordpress.svg";
import teamsIcon from "../../../public/stacks/teams.svg";
import ProjectCard from "@/components/ProjectCard";

export const metadata = {
  description: "Developer, a personal website",
};

export default async function Page() {
  return (
    <section className="px-8">
      <div className="container mx-auto max-w-1248">
        <div className="flex flex-col gap-3 py-8 md:py-9 lg:py-12">
          <Title>Hey there! I&apos;m Leon 🌳</Title>
          <div className="mb-4 flex items-center gap-2">
            <FaMapMarkerAlt className="text-primary" />
            <div className="text-muted-foreground">Hong Kong</div>
          </div>
          <div className="text-muted-foreground">
            <p>
              I&apos;m a self-taught developer passionate on learning new
              things, currently working on Next.js.
            </p>
            <p>
              I enjoy weight-lifting, reading books and playing video games.
            </p>
          </div>
        </div>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="mb-6 inline-flex px-4 md:mb-12 md:px-6 lg:px-8"
        >
          <Link className="hover:text-primary" href="/me">
            More about me
          </Link>
        </Button>
        <div className="flex flex-col gap-3 py-6 md:py-9 lg:py-12">
          <div className="flex items-baseline gap-4">
            <h2 className="text-pretty text-xl font-semibold md:text-2xl lg:text-4xl">
              Blog
            </h2>
            <Link className="text-primary" href="/blog">
              See all
            </Link>
          </div>
          <div className="mb-6 text-muted-foreground md:mb-12">
            Articles about personal life, hobbies, photography, and everything
            else.
          </div>
          <Suspense>
            <BlogListHome category="" currentPage={1} postsPerPage={4} />
          </Suspense>
        </div>
        <div className="flex flex-col gap-3 py-6 md:py-9 lg:py-12">
          <div className="flex items-baseline gap-4">
            <h2 className="text-pretty text-xl font-semibold md:text-2xl lg:text-4xl">
              Notes
            </h2>
            <Link className="text-primary" href="/notes">
              See all
            </Link>
          </div>
          <div className="mb-6 text-muted-foreground md:mb-12">
            Notes, references, and tutorials on programming, web development.
          </div>
          <Suspense>
            <NotesListHome topic="" currentPage={1} notesPerPage={5} />
          </Suspense>
        </div>
        <div className="flex flex-col gap-3 py-6 md:py-9 lg:py-12">
          <div className="flex items-baseline gap-4">
            <h2 className="text-pretty text-xl font-semibold md:text-2xl lg:text-4xl">
              Projects
            </h2>
            <Link className="text-primary" href="/projects">
              See all
            </Link>
          </div>
          <div className="mb-6 text-muted-foreground md:mb-12">
            Some of the projects I&apos; made over the years.
          </div>
          <Suspense>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                label="Personal website"
                description="Portfolio"
                infoLink="/notes/revamp-my-personal-website"
                demoLink="https://personal-website-hazel-gamma.vercel.app"
                sourceLink="https://github.com/leonlee603/personal_website"
              />
              <ProjectCard
                label="Money book"
                description="Finances tracking app"
                infoLink="/notes/project-money-book"
                demoLink="https://money-book-delta.vercel.app"
                sourceLink="https://github.com/leonlee603/money_book"
              />
              <ProjectCard
                label="Next auth demo"
                description="Authentication demo with Next.js and Auth.js"
                infoLink="/notes/project-next-auth-demo"
                demoLink="https://next-auth-demo-six-nu.vercel.app"
                sourceLink="https://github.com/leonlee603/next-auth-demo"
              />
            </div>
          </Suspense>
        </div>
        <div className="flex flex-col gap-3 py-6 md:py-9 lg:py-12">
          <div className="flex items-baseline gap-4">
            <h2 className="text-pretty text-xl font-semibold md:text-2xl lg:text-4xl">
              Stacks
            </h2>
            <Link className="text-primary" href="/stacks">
              See all
            </Link>
          </div>
          <div className="mb-6 text-muted-foreground md:mb-12">
            Tools and languages I use on a regular basis.
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="flex shadow-none dark:bg-muted">
              <div className="flex min-w-[80px] items-center pl-6">
                <div className="h-[56px] w-[56px] rounded-sm bg-secondary p-2 dark:bg-muted-foreground">
                  <Image
                    className="w-full max-w-[40px]"
                    src={reactIcon}
                    alt="figma icon"
                  />
                </div>
              </div>
              <CardHeader>
                <CardTitle>React</CardTitle>
                <CardDescription>Javascript Library</CardDescription>
              </CardHeader>
            </Card>
            <Card className="flex shadow-none dark:bg-muted">
              <div className="flex min-w-[80px] items-center pl-6">
                <div className="h-[56px] w-[56px] rounded-sm bg-secondary p-2 dark:bg-muted-foreground">
                  <Image
                    className="w-full max-w-[40px]"
                    src={nextIcon}
                    alt="figma icon"
                  />
                </div>
              </div>
              <CardHeader>
                <CardTitle>Next.js</CardTitle>
                <CardDescription>React Framework</CardDescription>
              </CardHeader>
            </Card>
            <Card className="flex shadow-none dark:bg-muted">
              <div className="flex min-w-[80px] items-center pl-6">
                <div className="h-[56px] w-[56px] rounded-sm bg-secondary p-3 dark:bg-muted-foreground">
                  <Image
                    className="w-full max-w-[32px]"
                    src={wordpressIcon}
                    alt="figma icon"
                  />
                </div>
              </div>
              <CardHeader>
                <CardTitle>Wordpress</CardTitle>
                <CardDescription>Dynamic Development</CardDescription>
              </CardHeader>
            </Card>
            <Card className="flex shadow-none dark:bg-muted">
              <div className="flex min-w-[80px] items-center pl-6">
                <div className="h-[56px] w-[56px] rounded-sm bg-secondary p-3 dark:bg-muted-foreground">
                  <Image
                    className="w-[32px]"
                    src={figmaIcon}
                    alt="figma icon"
                  />
                </div>
              </div>
              <CardHeader>
                <CardTitle>Figma</CardTitle>
                <CardDescription>Web Design</CardDescription>
              </CardHeader>
            </Card>
            <Card className="flex shadow-none dark:bg-muted">
              <div className="flex min-w-[80px] items-center pl-6">
                <div className="h-[56px] w-[56px] rounded-sm bg-secondary p-3 dark:bg-muted-foreground">
                  <Image
                    className="w-full max-w-[32px]"
                    src={notionIcon}
                    alt="figma icon"
                  />
                </div>
              </div>
              <CardHeader>
                <CardTitle>Notion</CardTitle>
                <CardDescription>Note Taking App</CardDescription>
              </CardHeader>
            </Card>
            <Card className="flex shadow-none dark:bg-muted">
              <div className="flex min-w-[80px] items-center pl-6">
                <div className="h-[56px] w-[56px] rounded-sm bg-secondary p-3 dark:bg-muted-foreground">
                  <Image
                    className="w-full max-w-[32px]"
                    src={teamsIcon}
                    alt="figma icon"
                  />
                </div>
              </div>
              <CardHeader>
                <CardTitle>Teams</CardTitle>
                <CardDescription>Message App</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
