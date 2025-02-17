import { Suspense } from "react";

import BlogCategoriesFilterContainer from "@/components/BlogCategoriesFilterContainer";
import PostPageHeader from "@/components/PostPageHeader";
import Title from "@/components/Title";

export const metadata = {
  title: {
    template: "%s | Leon Lee",
    default: "Notes",
  },
};

export default function NotesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
        <Suspense>
          <BlogCategoriesFilterContainer />
        </Suspense>
        {children}
      </div>
    </main>
  );
}
