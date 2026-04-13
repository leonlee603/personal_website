import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex-1 flex flex-row items-center justify-center">
      <main className="px-8">
        <section className="container mx-auto max-w-1248 flex flex-col items-center">
          <div className="text-xl font-semibold md:text-2xl lg:text-4xl">
            404
          </div>
          <div className="mb-6">Page not found</div>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="mb-6 inline-flex px-4 md:mb-12 md:px-6 lg:px-8"
          >
            <Link className="hover:text-primary" href="/blog">
              Back to Blog page
            </Link>
          </Button>
        </section>
      </main>
    </div>
  );
}
