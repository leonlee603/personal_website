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
  const notesPerPage = NOTES_PER_PAGE;

  return (
    <>
      <div className="mb-24 mt-12">
        <Suspense>
          <NotesList
            topic={topic}
            currentPage={parsedCurrentPage}
            notesPerPage={notesPerPage}
          />
        </Suspense>
        <Suspense>
          <NotesPagination
            topic={topic}
            currentPage={parsedCurrentPage}
            notesPerPage={notesPerPage}
          />
        </Suspense>
      </div>
    </>
  );
}
