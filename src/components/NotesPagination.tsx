import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { sanityFetch } from "@/sanity/lib/live";
import { NOTES_COUNT, NOTES_IN_TOPIC_COUNT } from "@/sanity/lib/queries";
import { Button } from "./ui/button";

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
  
  return (
    <div className="flex flex-row items-center justify-center gap-4">
      <Link
        href={
          topic
            ? currentPage > 2 ? `/notes/topics/${topic}/page/${currentPage - 1}` : `/notes/topics/${topic}`
            : currentPage > 2 ? `/notes/page/${currentPage - 1}` : `/notes`
        }
        className={currentPage <= 1 ? "disabled text-muted-foreground" : ""}
        aria-disabled={currentPage <= 1}
        tabIndex={currentPage <= 1 ? -1 : undefined}
      >
        <Button variant="ghost" className="rounded-full">
          <ArrowLeftIcon />
          Previous
        </Button>
      </Link>
      {totalPages > 1 && `Page ${currentPage} of ${totalPages}`}
      <Link
        href={
          topic
          ? `/notes/topics/${topic}/page/${currentPage + 1}`
          : `/notes/page/${currentPage + 1}`
        }
        className={
          currentPage >= totalPages ? "disabled text-muted-foreground" : ""
        }
        aria-disabled={currentPage >= totalPages}
        tabIndex={currentPage >= totalPages ? -1 : undefined}
      >
        <Button variant="ghost" className="rounded-full">
          Next
          <ArrowRightIcon />
        </Button>
      </Link>
    </div>
  );
}
