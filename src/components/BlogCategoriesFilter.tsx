import Link from "next/link";
import type { CATEGORIES_QUERYResult } from "@/sanity/types";
import FilterBadge from "./FilterBadge";

export default async function BlogCategoriesFilter({
  currentCategory,
  categories,
}: {
  currentCategory: string | string[] | undefined;
  categories: CATEGORIES_QUERYResult;
}) {
  return (
    <div>
      <div className="flex flex-row flex-wrap gap-1 pb-2">
        <Link href={`/blog`}>
          <FilterBadge
            isActive={
              currentCategory === "" || currentCategory === undefined
                ? true
                : false
            }
          >
            <span className="whitespace-nowrap">All</span>
          </FilterBadge>
        </Link>
        {categories.map((category) => {
          if (!category.postCount) return;
          return (
            <Link
              key={category._id}
              href={`/blog?category=${category.slug!.current}`}
            >
              <FilterBadge
                isActive={currentCategory === category.slug!.current}
              >
                <span className="whitespace-nowrap">{category.title}</span>
              </FilterBadge>
            </Link>
          );
        })}
      </div>
      <hr />
    </div>
  );
}
