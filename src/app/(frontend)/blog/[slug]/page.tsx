// Blog detail page
import { notFound } from "next/navigation";
import type { Metadata } from 'next'
import { sanityFetch } from "@/sanity/lib/live";
import { POST_QUERY, POSTS_SLUGS_QUERY } from "@/sanity/lib/queries";
import { Post } from "@/components/Post";

export async function generateMetadata({params} : {params: Promise<{ slug: string }>}):Promise<Metadata> {
  const { data: post } = await sanityFetch({
    query: POST_QUERY,
    params: await params,
  });

  return {
    title: post!.title
  }
}

export async function generateStaticParams() {
  const { data } = await sanityFetch({
    query: POSTS_SLUGS_QUERY,
    perspective: "published",
    stega: false,
  });
  return data;
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { data: post } = await sanityFetch({
    query: POST_QUERY,
    params: await params,
  });
  
  if (!post) {
    notFound();
  }
  
  return (
    <div className="px-8">
      <main className="container mx-auto mb-10 mt-6 max-w-1248 md:mb-20 md:mt-9 lg:mb-24 lg:mt-12">
        <Post {...post} />
      </main>
    </div>
  );
}
