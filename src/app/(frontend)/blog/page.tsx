import { sanityFetch } from "@/sanity/lib/live";
import { CATEGORIES_QUERY, POSTS_IN_CATEGORY_RANGE_QUERY, POSTS_COUNT, POSTS_IN_CATEGORY_COUNT, POSTS_RANGE_QUERY } from "@/sanity/lib/queries";
import { PostCard } from "@/components/PostCard";
import { Title } from "@/components/Title";
import Link from "next/link";
// import { GetServerSideProps } from "next";

interface SearchParams {
  [key: string]: string | string[] | undefined;
}

export default async function Page({ searchParams }: { searchParams: Promise<SearchParams> }) {
  // get ready for pagination
  const params = await searchParams;
  const currentPage = parseInt(params.page as string) || 1;
  const postsPerPage = 3;
  const start = (currentPage - 1) * postsPerPage;
  const end = start + postsPerPage;
  const {data: totalPosts} = params.category ? await sanityFetch({ query: POSTS_IN_CATEGORY_COUNT, params: {category:params.category } }) : await sanityFetch({query:POSTS_COUNT});
  console.log(totalPosts);
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  // fetching data
  const {data: posts} = params.category ? await sanityFetch({ query: POSTS_IN_CATEGORY_RANGE_QUERY, params: {category: params.category, start, end} }) : await sanityFetch({ query: POSTS_RANGE_QUERY, params: {start, end} });
  const { data: categories } = await sanityFetch({ query: CATEGORIES_QUERY });

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
      <div>
          {currentPage > 1 && (
            <Link href={params.category ? `?category=${params.category}&&page=${currentPage - 1}` : `?page=${currentPage - 1}`}>Previous</Link>
          )}
          
          {currentPage < totalPages && (
            <Link href={params.category ? `?category=${params.category}&&page=${currentPage + 1}` :`?page=${currentPage + 1}` }>Next</Link>
          )}
      </div>
    </main>
  );
}
