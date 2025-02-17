import { sanityFetch } from "@/sanity/lib/live";
import { CATEGORIES_QUERY } from "@/sanity/lib/queries";

import BlogCategoriesFilter from "./BlogCategoriesFilter";

export default async function BlogCategoriesFilterContainer() {
  const { data: categories } = await sanityFetch({ query: CATEGORIES_QUERY });

  return (
    <>
      <BlogCategoriesFilter categories={categories} />
    </>
  );
}
