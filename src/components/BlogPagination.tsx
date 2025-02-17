import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { sanityFetch } from "@/sanity/lib/live";
import { POSTS_COUNT, POSTS_IN_CATEGORY_COUNT } from "@/sanity/lib/queries";
import { Button } from "./ui/button";

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
  
  return (
    <div className="flex flex-row items-center justify-center gap-4">
      <Link
        href={
          category
            ? currentPage > 2 ? `/blog/categories/${category}/page/${currentPage - 1}` : `/blog/categories/${category}`
            : currentPage > 2 ? `/blog/page/${currentPage - 1}` : `/blog`
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
          category
          ? `/blog/categories/${category}/page/${currentPage + 1}`
          : `/blog/page/${currentPage + 1}`
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
