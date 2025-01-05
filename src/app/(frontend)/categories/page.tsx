import { sanityFetch } from "@/sanity/lib/live";
import { CATEGORIES_QUERY } from "@/sanity/lib/queries";

export default async function Page() {
  const {data: categories} = await sanityFetch({query: CATEGORIES_QUERY});
  console.log(categories);

  return (
    <div>Category</div>
  );
}