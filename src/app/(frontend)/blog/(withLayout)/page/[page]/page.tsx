// All blog posts on specific page (other than page 1)
import { notFound, redirect } from "next/navigation";
import { sanityFetch } from "@/sanity/lib/live";
import { POSTS_COUNT } from "@/sanity/lib/queries";
import BlogContainer from "@/components/BlogContainer";
import { POSTS_PER_PAGE } from "@/lib/constant";

export const metadata = {
  title: "Blog",
};

export async function generateStaticParams() {
  const { data: totalPosts } = await sanityFetch({
    query: POSTS_COUNT,
    perspective: "published",
    stega: false,
  });
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);
  const numberArray = Array.from({ length: totalPages }, (_, i) => i + 1);
  const pageObjectArray = numberArray.map((num) => ({ page: `${num}` }));
  return pageObjectArray;
}

export default async function Page({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;

  if (page === "1") redirect("/blog");

  const { data: totalPosts } = await sanityFetch({ query: POSTS_COUNT });
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

  if (!(Number(page) >= 2 && Number(page) <= totalPages)) {
    notFound();
  }

  return <BlogContainer currentPage={`${page}`} category="" />;
}
