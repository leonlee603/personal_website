import Link from "next/link";
import { Title } from "@/components/Title";

//TODO add description
// export const metadata = {
//   description: 'To be added.'
// };

export default async function Page() {
  return (
    <section className="container mx-auto max-w-1248">
      <Title>Hey! I&apos;m Leon 🌳</Title>
      <hr />
      <Link href="/blog">Blog posts index &rarr;</Link>
    </section>
  );
}