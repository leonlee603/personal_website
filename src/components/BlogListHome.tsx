import { notFound } from "next/navigation";
import { sanityFetch } from "@/sanity/lib/live";
import {
  POSTS_IN_CATEGORY_RANGE_QUERY,
  POSTS_RANGE_QUERY,
} from "@/sanity/lib/queries";
import Link from "next/link";
import { Categories } from "./Categories";
import { PublishedAt } from "./PublishedAt";

export default async function BlogListHome({
  category,
  currentPage,
  postsPerPage,
}: {
  category: string;
  currentPage: number;
  postsPerPage: number;
}) {
  const start = (currentPage - 1) * postsPerPage;
  const end = start + postsPerPage;

  const { data: posts } = category
    ? await sanityFetch({
        query: POSTS_IN_CATEGORY_RANGE_QUERY,
        params: { category: category, start, end },
      })
    : await sanityFetch({ query: POSTS_RANGE_QUERY, params: { start, end } });

  if (!posts || !posts.length) {
    notFound();
  }

  return (
    <div className="flex flex-col border-l-2 border-dotted pb-6 md:pb-9 lg:pb-12">
      <div className="ml-5 border-t-2 border-dotted">
        {posts.map((post) => {
          const { title, publishedAt, categories } = post;
          return (
            <Link
              key={post._id}
              className=""
              href={`/blog/${post.slug!.current}`}
            >
              <div className="flex flex-col justify-between gap-2 overflow-hidden border-b-2 border-dotted py-3 md:gap-4 md:py-4 lg:flex-row lg:gap-6 lg:py-5">
                <div className="max-w-70 text-base font-semibold leading-none tracking-tight md:text-lg">
                  {title}
                </div>
                <div className="flex flex-row items-center gap-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <Categories categories={categories} />
                  </div>
                  <PublishedAt
                    publishedAt={publishedAt}
                    className="mb-0 text-nowrap"
                  />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
