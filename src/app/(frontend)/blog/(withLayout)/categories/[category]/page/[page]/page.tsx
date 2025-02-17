// All blog posts for a category on specific page (other than page 1)
import type { Metadata } from 'next'
import { notFound, redirect } from "next/navigation";
import { POSTS_PER_PAGE } from "@/lib/constant";
import { sanityFetch } from "@/sanity/lib/live";
import { POSTS_IN_CATEGORY_COUNT } from "@/sanity/lib/queries";
import BlogContainer from "@/components/BlogContainer";

export async function generateMetadata({params} : {params: Promise<{ category: string }>}):Promise<Metadata> {
  const { category } = await params;
  
  return {
    title: category.charAt(0).toUpperCase() + category.slice(1),
  }
}

export async function generateStaticParams({ params }: { params: { category: string } }) {
  const { category } = params;
  const { data: totalPosts } = await sanityFetch({
    query: POSTS_IN_CATEGORY_COUNT,
    params: { category: category },
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
  params: Promise<{ category: string; page: string }>;
}) {
  const { category, page } = await params;

  if (page === "1") redirect(`/blog/categories/${category}`);

  const { data: totalPosts } = await sanityFetch({
    query: POSTS_IN_CATEGORY_COUNT,
    params: { category: category },
  });
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

  if (!(Number(page) >= 2 && Number(page) <= totalPages)) {
    notFound();
  }

  return <BlogContainer currentPage={`${page}`} category={category} />;
}
