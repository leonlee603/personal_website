import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Not Found",
};

export default function NotFound() {
  return (
    <div className="mb-10 mt-6 md:mb-20 md:mt-9 lg:mb-24 lg:mt-12">
      <div className="text-xl font-semibold md:text-2xl lg:text-4xl">404</div>
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
    </div>
  );
}
