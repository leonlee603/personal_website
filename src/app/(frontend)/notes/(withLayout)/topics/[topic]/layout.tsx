import { sanityFetch } from "@/sanity/lib/live";
import { TOPICS_QUERY } from "@/sanity/lib/queries";

export async function generateStaticParams() {
  const { data: topics } = await sanityFetch({
    query: TOPICS_QUERY,
    perspective: "published",
    stega: false,
  });

  return topics.map((topic) => ({ topic: topic.title }));
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
