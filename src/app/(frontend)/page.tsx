import Link from "next/link";
import { Title } from "@/components/Title";

export default async function Page() {
  return (
    <section className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <Title>Hey! I&apos;m Leon 🌳</Title>
      <hr />
      <Link href="/blog">Blog posts index &rarr;</Link>
    </section>
  );
}