import { notFound } from "next/navigation";
import { sanityFetch } from "@/sanity/lib/live";
import {
  NOTES_IN_TOPIC_RANGE_QUERY,
  NOTES_RANGE_QUERY,
} from "@/sanity/lib/queries";
import NoteCard from "./NoteCard";

export default async function NotesListHome({
  topic,
  currentPage,
  notesPerPage,
}: {
  topic: string;
  currentPage: number;
  notesPerPage: number;
}) {
  const start = (currentPage - 1) * notesPerPage;
  const end = start + notesPerPage;

  const { data: notes } = topic
    ? await sanityFetch({
        query: NOTES_IN_TOPIC_RANGE_QUERY,
        params: { topic: topic, start, end },
      })
    : await sanityFetch({ query: NOTES_RANGE_QUERY, params: { start, end } });

  if (!notes || !notes.length) {
    notFound();
  }

  return (
    <div className="flex flex-col border-l-2 border-dotted pb-12">
      <div className="ml-5 border-t-2 border-dotted">
        {notes.map((note) => (
          <NoteCard key={note._id} {...note} />
        ))}
      </div>
    </div>
  );
}
