import { Suspense } from "react";
import NotesList from "./NotesList";
import NotesPagination from "@/components/NotesPagination";
import { NOTES_PER_PAGE } from "@/lib/constant";

export default function NotesContainer({
  currentPage = "1",
  topic = "",
}: {
  currentPage: string;
  topic: string;
}) {
  let parsedCurrentPage = parseInt(currentPage);
  if (!parsedCurrentPage || parsedCurrentPage <=0) {
    parsedCurrentPage = 1;
  }

  return (
    <>
      <div className="mb-10 mt-6 md:mb-20 md:mt-9 lg:mb-24 lg:mt-12">
        <Suspense>
          <NotesList
            topic={topic}
            currentPage={parsedCurrentPage}
            notesPerPage={NOTES_PER_PAGE}
          />
        </Suspense>
        <Suspense>
          <NotesPagination
            topic={topic}
            currentPage={parsedCurrentPage}
            notesPerPage={NOTES_PER_PAGE}
          />
        </Suspense>
      </div>
    </>
  );
}
