import { notFound } from "next/navigation";
import { sanityFetch } from "@/sanity/lib/live";
import {
  POSTS_IN_CATEGORY_RANGE_QUERY,
  POSTS_RANGE_QUERY,
} from "@/sanity/lib/queries";
import PostCard from "./PostCard";

export default async function BlogList({
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
    <div className="grid grid-cols-4 gap-6 pb-12">
      {posts.map((post) => (
        <PostCard key={post._id} {...post} />
      ))}
    </div>
  );
}
