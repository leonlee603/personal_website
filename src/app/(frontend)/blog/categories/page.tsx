// All categories list
import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/live";
import { CATEGORIES_QUERY } from "@/sanity/lib/queries";

import PostPageHeader from "@/components/PostPageHeader";
import Title from "@/components/Title";
import TagBadge from "@/components/TagBadge";

import { groupedTags } from "@/sanity/lib/helper";

export default async function page() {
  const { data: categories } = await sanityFetch({ query: CATEGORIES_QUERY });
  const groupedCategoryItems = groupedTags(categories);

  return (
    <main className="px-8">
      <div className="container mx-auto max-w-1248">
        <PostPageHeader>
          <Title>Blog</Title>
          <div>All categories list</div>
        </PostPageHeader>

        <div>List of categories will be here</div>
        {Object.entries(groupedCategoryItems).map(([key, value]) => {
          return (
            <div key={key} className="alphabetical-tags">
              <h3>{key.toUpperCase()}</h3>
              <div className="flex flex-row flex-wrap gap-1 pb-2">
                {value.map((category) => {
                  return (
                    <Link
                      key={category._id}
                      href={`/blog/categories/${category.slug!.current}`}
                    >
                      <TagBadge label={category.title} count={category.postCount} />
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
