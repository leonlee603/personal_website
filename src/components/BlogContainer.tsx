import { SearchParams } from "next/dist/server/request/search-params";

import BlogCategoriesFilter from "./BlogCategoriesFilter";
import { BlogPagination } from "./BlogPagination";
import { PostCard } from "./PostCard";

import { sanityFetch } from "@/sanity/lib/live";
import {
  CATEGORIES_QUERY,
  POSTS_IN_CATEGORY_RANGE_QUERY,
  POSTS_COUNT,
  POSTS_IN_CATEGORY_COUNT,
  POSTS_RANGE_QUERY,
} from "@/sanity/lib/queries";

export default async function BlogContainer({
  params,
}: {
  params: SearchParams;
}) {
  const currentPage = parseInt(params.page as string) || 1;
  const postsPerPage = 12;
  const start = (currentPage - 1) * postsPerPage;
  const end = start + postsPerPage;
  const { data: totalPosts } = params.category
    ? await sanityFetch({
        query: POSTS_IN_CATEGORY_COUNT,
        params: { category: params.category },
      })
    : await sanityFetch({ query: POSTS_COUNT });
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  // fetching data
  const { data: posts } = params.category
    ? await sanityFetch({
        query: POSTS_IN_CATEGORY_RANGE_QUERY,
        params: { category: params.category, start, end },
      })
    : await sanityFetch({ query: POSTS_RANGE_QUERY, params: { start, end } });
  const { data: categories } = await sanityFetch({ query: CATEGORIES_QUERY });

  return (
    <>
      <BlogCategoriesFilter
        currentCategory={params.category}
        categories={categories}
      />
      <div className="mb-24 mt-12">
        <div className="grid grid-cols-4 gap-6 pb-12">
          {posts.map((post) => (
            <PostCard key={post._id} {...post} />
          ))}
        </div>
        <BlogPagination
          currentPage={currentPage}
          totalPages={totalPages}
          params={params}
        />
      </div>
    </>
  );
}
