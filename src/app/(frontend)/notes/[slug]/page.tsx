// Note detail page
import { notFound } from "next/navigation";
import type { Metadata } from 'next'
import { sanityFetch } from "@/sanity/lib/live";
import { NOTE_QUERY, NOTES_SLUGS_QUERY } from "@/sanity/lib/queries";
import { Note } from "@/components/Note";

export async function generateMetadata({params} : {params: Promise<{ slug: string }>}):Promise<Metadata> {
  const { data: post } = await sanityFetch({
    query: NOTE_QUERY,
    params: await params,
  });

  return {
    title: post!.title
  }
}

export async function generateStaticParams() {
  const { data } = await sanityFetch({
    query: NOTES_SLUGS_QUERY,
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
    query: NOTE_QUERY,
    params: await params,
  });

  if (!post) {
    notFound();
  }

  return (
    <div className="px-8">
      <main className="container mx-auto mb-10 mt-6 max-w-1248 md:mb-20 md:mt-9 lg:mb-24 lg:mt-12">
        <Note {...post} />
      </main>
    </div>
  );
}
