import { sanityFetch } from '@/sanity/lib/live';
import { POSTS_CATEGORY_QUERY } from '@/sanity/lib/queries';
// import { POST_QUERY } from '@/sanity/lib/queries'
// import { Post } from '@/components/Post'
import { notFound } from 'next/navigation';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { data: post } = await sanityFetch({
    query: POSTS_CATEGORY_QUERY,
    params: await params,
  });
  console.log(post);

  if (!post) {
    notFound();
  }

  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <div>all posts for 1 cat</div>
    </main>
  );
}
