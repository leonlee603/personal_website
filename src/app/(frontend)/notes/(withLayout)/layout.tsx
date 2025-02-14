import { Suspense } from "react";

import NotesTopicsFilterContainer from "@/components/NotesTopicsFilterContainer";
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
          <Title>Notes</Title>
          <div>
            Notes, references, and tutorials on programming, web development.
          </div>
        </PostPageHeader>
        <Suspense>
          <NotesTopicsFilterContainer />
        </Suspense>
        {children}
      </div>
    </main>
  );
}
