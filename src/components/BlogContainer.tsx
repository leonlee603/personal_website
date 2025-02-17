import { Suspense } from "react";
import BlogList from "./BlogList";
import BlogPagination from "./BlogPagination";
import { POSTS_PER_PAGE } from "@/lib/constant";

export default function BlogContainer({
  currentPage = "1",
  category = "",
}: {
  currentPage: string;
  category: string;
}) {
  let parsedCurrentPage = parseInt(currentPage);
  if (!parsedCurrentPage || parsedCurrentPage <=0) {
    parsedCurrentPage = 1;
  }

  return (
    <>
      <div className="mb-24 mt-12">
        <Suspense>
          <BlogList
            category={category}
            currentPage={parsedCurrentPage}
            postsPerPage={POSTS_PER_PAGE}
          />
        </Suspense>
        <Suspense>
          <BlogPagination
            category={category}
            currentPage={parsedCurrentPage}
            postsPerPage={POSTS_PER_PAGE}
          />
        </Suspense>
      </div>
    </>
  );
}
