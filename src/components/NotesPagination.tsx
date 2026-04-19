import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { sanityFetch } from "@/sanity/lib/live";
import { NOTES_COUNT, NOTES_IN_TOPIC_COUNT } from "@/sanity/lib/queries";
import { Button } from "./ui/button";
import PaginationHotkeys from "./PaginationHotkeys";

export default async function NotesPagination({
  topic,
  currentPage,
  notesPerPage,
}: {
  topic: string;
  currentPage: number;
  notesPerPage: number;
}) {
  const { data: totalNotes } = topic
    ? await sanityFetch({
        query: NOTES_IN_TOPIC_COUNT,
        params: { topic: topic },
      })
    : await sanityFetch({ query: NOTES_COUNT });
  const totalPages = Math.ceil(totalNotes / notesPerPage);
  if (totalPages <= 1) return null;

  const prevHref = topic
    ? currentPage > 2
      ? `/notes/topics/${topic}/page/${currentPage - 1}`
      : `/notes/topics/${topic}`
    : currentPage > 2
      ? `/notes/page/${currentPage - 1}`
      : `/notes`;

  const nextHref = topic
    ? `/notes/topics/${topic}/page/${currentPage + 1}`
    : `/notes/page/${currentPage + 1}`;

  const hasPrev = currentPage > 1;
  const hasNext = currentPage < totalPages;

  return (
    <>
      <PaginationHotkeys
        prevHref={prevHref}
        nextHref={nextHref}
        hasPrev={hasPrev}
        hasNext={hasNext}
      />

      <div className="flex flex-row items-center justify-center gap-4">
        <Link
          href={prevHref}
          className={hasPrev ? "" : "disabled text-muted-foreground"}
          aria-disabled={!hasPrev}
          tabIndex={!hasPrev ? -1 : undefined}
        >
          <Button variant="ghost" className="rounded-full">
            <ArrowLeftIcon />
            Previous
          </Button>
        </Link>
        {totalPages > 1 && `Page ${currentPage} of ${totalPages}`}
        <Link
          href={nextHref}
          className={hasNext ? "" : "disabled text-muted-foreground"}
          aria-disabled={!hasNext}
          tabIndex={!hasNext ? -1 : undefined}
        >
          <Button variant="ghost" className="rounded-full">
            Next
            <ArrowRightIcon />
          </Button>
        </Link>
      </div>
    </>
  );
}
