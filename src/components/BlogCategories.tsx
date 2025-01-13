import Link from "next/link";
import type { CATEGORIES_QUERYResult } from "@/sanity/types";
import FilterBadge from "./FilterBadge";

export default async function BlogCategories({
  currentCategory,
  categories,
}: {
  currentCategory: string | string[] | undefined,
  categories: CATEGORIES_QUERYResult;
}) {
  return (
    <div>
      <div className="flex flex-row flex-wrap gap-1 pb-2">
        <FilterBadge isActive={currentCategory === "" || currentCategory === undefined ? true : false}>
          <Link href={`/blog`}>
            <span className="whitespace-nowrap">
              All
            </span>
          </Link>
        </FilterBadge>
        {categories.map((category) => {
          if (!category.postCount) return;
          return (
            <FilterBadge key={category._id} isActive={currentCategory === category.slug!.current}>
              <Link href={`/blog?category=${category.slug!.current}`}>
                <span className="whitespace-nowrap">
                  {category.title}
                </span>
              </Link>
            </FilterBadge>
          );
        })}
      </div>
      <hr />
    </div>
  );
}
