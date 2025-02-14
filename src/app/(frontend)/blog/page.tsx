import { Suspense } from "react";
import { SearchParams } from "next/dist/server/request/search-params";

import BlogContainer from "@/components/BlogContainer";
import PostPageHeader from "@/components/PostPageHeader";
import Title from "@/components/Title";

export const metadata = {
  title: "Blog",
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
          <Title>Blog</Title>
          <div>
            Articles about personal life, hobbies, photography, and everything
            else.
          </div>
        </PostPageHeader>
        <Suspense fallback={<div>Loading...</div>}>
          <BlogContainer params={params} />
        </Suspense>
      </div>
    </main>
  );
}
