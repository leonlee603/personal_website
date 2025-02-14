// All notes on specific page (other than page 1)
import { notFound, redirect } from "next/navigation";
import { sanityFetch } from "@/sanity/lib/live";
import { NOTES_COUNT } from "@/sanity/lib/queries";
import NotesContainer from "@/components/NotesContainer";
import { NOTES_PER_PAGE } from "@/lib/constant";

export const metadata = {
  title: "Notes",
};

export async function generateStaticParams() {
  const { data: totalNotes } = await sanityFetch({
    query: NOTES_COUNT,
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
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;

  if (page === "1") redirect("/notes");

  const { data: totalNotes } = await sanityFetch({ query: NOTES_COUNT });
  const totalPages = Math.ceil(totalNotes / NOTES_PER_PAGE);

  if (!(Number(page) >= 2 && Number(page) <= totalPages)) {
    notFound();
  }

  return <NotesContainer currentPage={`${page}`} topic="" />;
}
