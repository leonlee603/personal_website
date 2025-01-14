import { sanityFetch } from "@/sanity/lib/live";
import {
  TOPICS_QUERY,
  NOTES_IN_TOPIC_RANGE_QUERY,
  NOTES_COUNT,
  NOTES_IN_TOPIC_COUNT,
  NOTES_RANGE_QUERY,
} from "@/sanity/lib/queries";
import { NoteCard } from "@/components/NoteCard";
import PostPageHeader from "@/components/PostPageHeader";
import { Title } from "@/components/Title";
import NotesTopicsFilter from "@/components/NotesTopicsFilter";
import { NotesPagination } from "@/components/NotesPagination";

interface SearchParams {
  [key: string]: string | string[] | undefined;
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  // get ready for pagination
  const params = await searchParams;
  const currentPage = parseInt(params.page as string) || 1;
  const notesPerPage = 1;
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
    <main className="px-8">
      <div className="container mx-auto max-w-1248">
        <PostPageHeader>
          <Title>Notes</Title>
          <div>
          Notes, references, and tutorials on programming, web development for myself.
          </div>
        </PostPageHeader>
        <NotesTopicsFilter
          currentTopic={params.topic}
          topics={topics}
        />
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
      </div>
    </main>
  );
}
