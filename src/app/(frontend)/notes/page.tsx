import { Suspense } from "react";
import { SearchParams } from "next/dist/server/request/search-params";

import NotesContainer from "@/components/NotesContainer";
import PostPageHeader from "@/components/PostPageHeader";
import { Title } from "@/components/Title";

export const metadata = {
  title: "Notes",
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  // get ready for pagination
  const params = await searchParams;

  return (
    <main className="px-8">
      <div className="container mx-auto max-w-1248">
        <PostPageHeader>
          <Title>Notes</Title>
          <div>
            Notes, references, and tutorials on programming, web development.
          </div>
        </PostPageHeader>
        <Suspense fallback={<div>Loading Notes...</div>}>
          <NotesContainer params={params} />
        </Suspense>
      </div>
    </main>
  );
}
