import Link from "next/link";
import Title from "@/components/Title";

//TODO add description
// export const metadata = {
//   description: 'To be added.'
// };

export default async function Page() {
  return (
    <section className="container mx-auto max-w-1248">
      <Title>Hey there! I&apos;m Leon 🌳</Title>
      <p>I&apos;m a self-taught programmer passionate on learning new things, currently working on Next.js.</p>
      <p>I enjoy weight-lifting, reading books and playing video games.</p>
      <hr />
      <Link href="/blog">Blog posts index &rarr;</Link>
    </section>
  );
}
