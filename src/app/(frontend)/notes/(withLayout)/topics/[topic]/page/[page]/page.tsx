// All note for a topic on specific page (other than page 1)

import { notFound, redirect } from "next/navigation";
import { NOTES_PER_PAGE } from "@/lib/constant";
import { sanityFetch } from "@/sanity/lib/live";
import { NOTES_IN_TOPIC_COUNT } from "@/sanity/lib/queries";
import NotesContainer from "@/components/NotesContainer";

export const metadata = {
  title: "Notes",
};

// export async function generateStaticParams() {
//   const { data: topics } = await sanityFetch({
//     query: TOPICS_QUERY,
//     perspective: "published",
//     stega: false,
//   });
//   const staticParamsArr = [];
//   for (let i = 0; i < topics.length; i++) {
//     for (let j = 0; j < (Math.ceil(topics[i].postCount / NOTES_PER_PAGE)); j++) {
//       staticParamsArr.push({topic: topics[i].title, page: `${j+1}`})
//     }
//   }
//   return staticParamsArr;
// }

export async function generateStaticParams({ params }: { params: { topic: string } }) {
  const { topic } = params;
  const { data: totalNotes } = await sanityFetch({
    query: NOTES_IN_TOPIC_COUNT,
    params: { topic: topic },
    perspective: "published",
    stega: false,
  });
  const totalPages = Math.ceil(totalNotes / NOTES_PER_PAGE);
  const numberArray = Array.from({ length: totalPages }, (_, i) => i + 1);
  const pageObjectArray = numberArray.map((num) => ({ page: `${num}` }));
  return pageObjectArray;
}

export default async function Page({
  params,
}: {
  params: Promise<{ topic: string; page: string }>;
}) {
  const { topic, page } = await params;

  if (page === "1") redirect(`/notes/topics/${topic}`);

  const { data: totalNotes } = await sanityFetch({
    query: NOTES_IN_TOPIC_COUNT,
    params: { topic: topic },
  });
  const totalPages = Math.ceil(totalNotes / NOTES_PER_PAGE);

  if (!(Number(page) >= 2 && Number(page) <= totalPages)) {
    notFound();
  }

  return <NotesContainer currentPage={`${page}`} topic={topic} />;
}
