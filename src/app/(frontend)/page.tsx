import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import Title from "@/components/Title";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";
import NotesList from "@/components/NotesList";
import BlogListHome from "@/components/BlogListHome";

//TODO add description
export const metadata = {
  description: "Developer, a personal website",
};

export default async function Page() {
  return (
    <section className="px-8">
      <div className="container mx-auto max-w-1248">
        <div className="flex flex-col gap-3 py-12">
          <Title>Hey there! I&apos;m Leon 🌳</Title>
          <div className="mb-4 flex items-center gap-2">
            <FaMapMarkerAlt className="text-primary" />
            <div className="text-muted-foreground">Hong Kong</div>
          </div>
          <p>
            I&apos;m a self-taught developer passionate on learning new things,
            currently working on Next.js.
          </p>
          <p>I enjoy weight-lifting, reading books and playing video games.</p>
        </div>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="mb-12 inline-flex"
        >
          <Link className="hover:text-primary" href="/me">
            More about me
          </Link>
        </Button>
        {/* <hr /> */}
        <div className="flex flex-col gap-3 py-12">
          <div className="flex items-baseline gap-4">
            <h2 className="text-pretty text-xl font-semibold md:text-2xl lg:text-4xl">
              Blog
            </h2>
            <Link href="/blog">See all</Link>
          </div>
          <div className="mb-12">
            Articles about personal life, hobbies, photography, and everything
            else.
          </div>
          <Suspense>
            <BlogListHome category="" currentPage={1} postsPerPage={4} />
          </Suspense>
        </div>
        <div className="flex flex-col gap-3 py-12">
          <div className="flex items-baseline gap-4">
            <h2 className="text-pretty text-xl font-semibold md:text-2xl lg:text-4xl">
              Notes
            </h2>
            <Link href="/notes">See all</Link>
          </div>
          <div className="mb-12">
            Notes, references, and tutorials on programming, web development.
          </div>
          <Suspense>
            <NotesList
              topic=""
              currentPage={1}
              notesPerPage={5}
            />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
