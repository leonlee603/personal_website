import { SearchParams } from "next/dist/server/request/search-params";

import { NoteCard } from "@/components/NoteCard";
import NotesTopicsFilter from "@/components/NotesTopicsFilter";
import { NotesPagination } from "@/components/NotesPagination";

import { sanityFetch } from "@/sanity/lib/live";
import {
  TOPICS_QUERY,
  NOTES_IN_TOPIC_RANGE_QUERY,
  NOTES_COUNT,
  NOTES_IN_TOPIC_COUNT,
  NOTES_RANGE_QUERY,
} from "@/sanity/lib/queries";

export default async function NotesContainer({params}: {params: SearchParams}) {
  const currentPage = parseInt(params.page as string) || 1;
  const notesPerPage = 12;
  const start = (currentPage - 1) * notesPerPage;
  const end = start + notesPerPage;
  const { data: totalNotes } = params.topic
    ? await sanityFetch({
        query: NOTES_IN_TOPIC_COUNT,
        params: { topic: params.topic },
      })
    : await sanityFetch({ query: NOTES_COUNT });
  const totalPages = Math.ceil(totalNotes / notesPerPage);

  // fetching data
  const { data: notes } = params.topic
    ? await sanityFetch({
        query: NOTES_IN_TOPIC_RANGE_QUERY,
        params: { topic: params.topic, start, end },
      })
    : await sanityFetch({ query: NOTES_RANGE_QUERY, params: { start, end } });
  const { data: topics } = await sanityFetch({ query: TOPICS_QUERY });

  return (
    <>
      <NotesTopicsFilter currentTopic={params.topic} topics={topics} />
      <div className="mb-24 mt-12">
        <div className="flex flex-col border-t-2 border-dotted pb-12">
          {notes.map((note) => (
            <NoteCard key={note._id} {...note} />
          ))}
        </div>
        <NotesPagination
          currentPage={currentPage}
          totalPages={totalPages}
          params={params}
        />
      </div>
    </>
  );
}
