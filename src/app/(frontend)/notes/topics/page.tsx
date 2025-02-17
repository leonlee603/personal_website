// All topics list
import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/live";
import { TOPICS_QUERY } from "@/sanity/lib/queries";

import PostPageHeader from "@/components/PostPageHeader";
import Title from "@/components/Title";
import TagBadge from "@/components/TagBadge";

import { groupedTags } from "@/sanity/lib/helper";

export default async function page() {
  const { data: topics } = await sanityFetch({ query: TOPICS_QUERY });
  const groupedTopicItems = groupedTags(topics);

  return (
    <main className="px-8">
      <div className="container mx-auto max-w-1248">
        <PostPageHeader>
          <Title>Notes</Title>
          <div>All topics list</div>
        </PostPageHeader>

        <div>List will be here</div>
        {Object.entries(groupedTopicItems).map(([key, value]) => {
          return (
            <div key={key} className="alphabetical-tags">
              <h3>{key.toUpperCase()}</h3>
              <div className="flex flex-row flex-wrap gap-1 pb-2">
                {value.map((topic) => {
                  return (
                    <Link
                      key={topic._id}
                      href={`/notes/topics/${topic.slug!.current}`}
                    >
                      <TagBadge label={topic.title} count={topic.postCount} />
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
