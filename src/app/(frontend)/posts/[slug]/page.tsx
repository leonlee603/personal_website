import { client } from '@/sanity/lib/client'
import { POST_QUERY } from '@/sanity/lib/queries'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { urlFor } from "@/sanity/lib/image";
import Image from 'next/image';

type PostIndexProps = { params: { slug: string } }

const options = { next: { revalidate: 60 } }

export default async function Page({ params }: PostIndexProps) {
  const post = await client.fetch(POST_QUERY, params, options)

  if (!post) {
    notFound()
  }

  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 p-12">
      {post?.mainImage ?
        <Image
          className="w-full aspect-[800/400]"
          src={urlFor(post.mainImage).width(800).height(400).quality(80).auto('format').url()}
          alt={post?.mainImage?.alt || ''}
          width="800"
          height="400"
        /> : null}
      <h1 className="text-4xl font-bold text-balance">{post?.title}</h1>
      <hr />
      <Link href="/posts">&larr; Return to index</Link>
    </main>
  );
}
