import { sanityFetch } from "@/sanity/lib/live";
import {
  CATEGORIES_QUERY,
  POSTS_IN_CATEGORY_RANGE_QUERY,
  POSTS_COUNT,
  POSTS_IN_CATEGORY_COUNT,
  POSTS_RANGE_QUERY,
} from "@/sanity/lib/queries";
import { PostCard } from "@/components/PostCard";
import PostPageHeader from "@/components/PostPageHeader";
import { Title } from "@/components/Title";
import BlogCategoriesFilter from "@/components/BlogCategoriesFilter";
import { BlogPagination } from "@/components/BlogPagination";

interface SearchParams {
  [key: string]: string | string[] | undefined;
}

export const metadata = {
  title: "Blog"
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  // get ready for pagination
  const params = await searchParams;
  const currentPage = parseInt(params.page as string) || 1;
  const postsPerPage = 12;
  const start = (currentPage - 1) * postsPerPage;
  const end = start + postsPerPage;
  const { data: totalPosts } = params.category
    ? await sanityFetch({
        query: POSTS_IN_CATEGORY_COUNT,
        params: { category: params.category },
      })
    : await sanityFetch({ query: POSTS_COUNT });
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  // fetching data
  const { data: posts } = params.category
    ? await sanityFetch({
        query: POSTS_IN_CATEGORY_RANGE_QUERY,
        params: { category: params.category, start, end },
      })
    : await sanityFetch({ query: POSTS_RANGE_QUERY, params: { start, end } });
  const { data: categories } = await sanityFetch({ query: CATEGORIES_QUERY });

  return (
    <main className="px-8">
      <div className="container mx-auto max-w-1248">
        <PostPageHeader>
          <Title>Blog</Title>
          <div>
            Articles about personal life, hobbies, photography, and everything else.
          </div>
        </PostPageHeader>
        <BlogCategoriesFilter
          currentCategory={params.category}
          categories={categories}
        />
        <div className="mb-24 mt-12">
          <div className="grid grid-cols-4 gap-6 pb-12">
            {posts.map((post) => (
              <PostCard key={post._id} {...post} />
            ))}
          </div>
          <BlogPagination
            currentPage={currentPage}
            totalPages={totalPages}
            params={params}
          />
        </div>
      </div>
    </main>
  );
}
