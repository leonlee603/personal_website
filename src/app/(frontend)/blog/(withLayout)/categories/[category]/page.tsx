// All posts for a category on page 1
import type { Metadata } from 'next'
import BlogContainer from "@/components/BlogContainer";

export async function generateMetadata({params} : {params: Promise<{ category: string }>}):Promise<Metadata> {
  const { category } = await params;
  
  return {
    title: category.charAt(0).toUpperCase() + category.slice(1),
  }
}

// Generate static params in layout.tsx for nested dynamic route

export default async function Page({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  return (
    <BlogContainer currentPage="1" category={category}  />
  );
}