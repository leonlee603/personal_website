// All categories list

import PostPageHeader from "@/components/PostPageHeader";
import Title from "@/components/Title";

export default function page() {
  return (
    <main className="px-8">
          <div className="container mx-auto max-w-1248">
            <PostPageHeader>
              <Title>Blog</Title>
              <div>All categories list</div>
            </PostPageHeader>

            <div>List of categories will be here</div>
          </div>
        </main>
    
  )
}