import Link from "next/link";
import type { CATEGORIES_QUERYResult } from "@/sanity/types";

export default function BlogCategories({
  categories,
}: {
  categories: CATEGORIES_QUERYResult;
}) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", columnGap: '1rem', rowGap: '1rem' }}>
      <Link href={`/blog`}>
        <span className="bg-cyan-50 rounded-full px-2 py-1 leading-none whitespace-nowrap text-sm font-semibold text-cyan-700">
          All categories
        </span>
      </Link>
      {categories.map((category) => {
        if (!category.postCount) return;
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
  );
}
