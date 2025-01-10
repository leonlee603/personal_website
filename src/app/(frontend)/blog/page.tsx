import { sanityFetch } from "@/sanity/lib/live";
import { CATEGORIES_QUERY, POSTS_QUERY } from "@/sanity/lib/queries";
import { PostCard } from "@/components/PostCard";
import { Title } from "@/components/Title";
import Link from "next/link";

interface SearchParams {
  [key: string]: string | string[] | undefined;
}

export default async function Page({ searchParams }: { searchParams: Promise<SearchParams> }) {
  const params = await searchParams;
  console.log(params);
  const { data: posts } = await sanityFetch({ query: POSTS_QUERY });
  const { data: categories } = await sanityFetch({ query: CATEGORIES_QUERY });
  // console.log(categories);
  // console.log(posts);

  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <Title>Blog</Title>
      <div>Personal articles about life, hobbies, photography, and everything else.</div>
      <div>
        <Link href={`/blog`}>
          <span className="bg-cyan-50 rounded-full px-2 py-1 leading-none whitespace-nowrap text-sm font-semibold text-cyan-700">
            All categories
          </span>
        </Link>
        {categories.map((category) => {
          return (
            <Link
              key={category._id}
              href={`/blog?category=${category.slug!.current}`}
            >
              <span className="bg-cyan-50 rounded-full px-2 py-1 leading-none whitespace-nowrap text-sm font-semibold text-cyan-700">
                {category.title}
              </span>
            </Link>
          );
        })}
      </div>
      <div className="flex flex-col gap-24 py-12">
        {posts.map((post) => (
          <PostCard key={post._id} {...post} />
        ))}
      </div>
    </main>
  );
}
