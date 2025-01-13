import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

interface SearchParams {
  [key: string]: string | string[] | undefined;
}

export function BlogPagination({
  currentPage,
  totalPages,
  params,
}: {
  currentPage: number;
  totalPages: number;
  params: SearchParams
}) {
  if (totalPages <= 1) return null;
  return (
    <div className="flex flex-row items-center justify-center gap-4">
      <Link
        href={
          params.category
            ? `?category=${params.category}&&page=${currentPage - 1}`
            : `?page=${currentPage - 1}`
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
          params.category
            ? `?category=${params.category}&&page=${currentPage + 1}`
            : `?page=${currentPage + 1}`
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
