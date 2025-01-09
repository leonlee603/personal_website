import { sanityFetch } from "@/sanity/lib/live";
import { CATEGORIES_QUERY } from "@/sanity/lib/queries";
import { CATEGORIES_QUERYResult } from "@/sanity/types";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";

// function to group all categories by first letter of its title
function groupedCategories(categories: CATEGORIES_QUERYResult) {
  return categories.reduce<Record<string, CATEGORIES_QUERYResult>>(
    (acc, item) => {
      const firstLetter = item.title!.charAt(0).toLowerCase(); // Get the first letter and convert to lowercase
      if (!acc[firstLetter]) {
        acc[firstLetter] = []; // Initialize an array for this letter if it doesn't exist
      }
      acc[firstLetter].push(item); // Push the current item into the respective group
      return acc;
    },
    {}
  );
}

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
                    key={category.slug?.current ?? uuidv4()}
                    href={`/categories/${category.slug!.current}`}
                    // className="button small"
                    // activeClassName="active"
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
