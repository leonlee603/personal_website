import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SanityLive } from "@/sanity/lib/live";

export const metadata = {
  title: {
    template: "%s | Leon Lee",
    default: "Leon Lee",
  },
};

export default function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex min-h-screen flex-col">
      <Header />
      <div className="flex-1 flex flex-col">{children}</div>
      <Footer />
      <SanityLive />
    </section>
  );
}
