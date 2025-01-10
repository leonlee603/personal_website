import { groupedCategories } from "@/sanity/lib/helper";
import { sanityFetch } from "@/sanity/lib/live";
import { CATEGORIES_QUERY } from "@/sanity/lib/queries";
import Link from "next/link";

export default async function Page() {
  const { data: categories } = await sanityFetch({ query: CATEGORIES_QUERY });
  const groupedCategoryItems = groupedCategories(categories);

  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <header>Categories</header>
      {Object.entries(groupedCategoryItems).map(([key, value]) => {
        return (
          <div key={key} className="alphabetical-tags">
            <h3>{key.toUpperCase()}</h3>
            <div className="tags">
              {value.map((category) => {
                return (
                  <Link
                    key={category._id}
                    href={`/categories/${category.slug!.current}`}
                    style={{
                      borderStyle: "solid",
                      borderWidth: "1px",
                      borderColor: "black",
                    }}
                  >
                    <span>{category.title}</span>
                    <span className="tag-count">{category.postCount}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}
    </main>
  );
}
