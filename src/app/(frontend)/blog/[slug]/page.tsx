import type { Metadata } from 'next'
import { sanityFetch } from "@/sanity/lib/live";
import { POST_QUERY } from "@/sanity/lib/queries";
import { Post } from "@/components/Post";
import { notFound } from "next/navigation";

export async function generateMetadata({params} : {params: Promise<{ slug: string }>}):Promise<Metadata> {
  const { data: post } = await sanityFetch({
    query: POST_QUERY,
    params: await params,
  });

  return {
    title: post!.title
  }
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
      <main className="container mx-auto max-w-1248 pb-24 pt-12">
        <Post {...post} />
      </main>
    </div>
  );
}
