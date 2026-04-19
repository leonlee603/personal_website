import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { sanityFetch } from "@/sanity/lib/live";
import { POSTS_COUNT, POSTS_IN_CATEGORY_COUNT } from "@/sanity/lib/queries";
import { Button } from "./ui/button";
import PaginationHotkeys from "./PaginationHotkeys";

export default async function BlogPagination({
  category,
  currentPage,
  postsPerPage,
}: {
  category: string;
  currentPage: number;
  postsPerPage: number;
}) {
  const { data: totalPosts } = category
    ? await sanityFetch({
        query: POSTS_IN_CATEGORY_COUNT,
        params: { category: category },
      })
    : await sanityFetch({ query: POSTS_COUNT });
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  if (totalPages <= 1) return null;

  const prevHref = category
    ? currentPage > 2
      ? `/blog/categories/${category}/page/${currentPage - 1}`
      : `/blog/categories/${category}`
    : currentPage > 2
      ? `/blog/page/${currentPage - 1}`
      : `/blog`;

  const nextHref = category
    ? `/blog/categories/${category}/page/${currentPage + 1}`
    : `/blog/page/${currentPage + 1}`;

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
