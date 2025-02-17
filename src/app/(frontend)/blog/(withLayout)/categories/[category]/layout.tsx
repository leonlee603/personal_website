import { sanityFetch } from "@/sanity/lib/live";
import { CATEGORIES_QUERY } from "@/sanity/lib/queries";

export async function generateStaticParams() {
  const { data: categories } = await sanityFetch({
    query: CATEGORIES_QUERY,
    perspective: "published",
    stega: false,
  });

  return categories.map((category) => ({ category: category.title }));
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
