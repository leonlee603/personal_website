// All note for a topic on page 1
import type { Metadata } from 'next'
// import { sanityFetch } from '@/sanity/lib/live';
// import { TOPICS_QUERY } from '@/sanity/lib/queries';
import NotesContainer from "@/components/NotesContainer";

export async function generateMetadata({params} : {params: Promise<{ topic: string }>}):Promise<Metadata> {
  const { topic } = await params;
  
  return {
    title: topic.charAt(0).toUpperCase() + topic.slice(1),
  }
}

// export async function generateStaticParams() {
//   const { data: topics } = await sanityFetch({
//     query: TOPICS_QUERY,
//     perspective: "published",
//     stega: false,
//   });

//   return topics.map(topic=> ({topic: topic.title}));
// }

export default async function Page({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic } = await params;

  return (
    <NotesContainer currentPage="1" topic={topic}  />
  );
}