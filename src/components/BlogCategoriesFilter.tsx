"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { CATEGORIES_QUERYResult } from "@/sanity/types";

import FilterBadge from "./FilterBadge";

// Helper function to get the information of categories and page number.
function analyzeRoute(route: string) {
  const pagePattern = /\/page\/([^/]+)/;
  const categoryPattern = /\/categories\/([^/]+)/;

  const pageMatch = route.match(pagePattern);
  const pageValue = pageMatch ? pageMatch[1] : "";

  const categoryMatch = route.match(categoryPattern);
  const categoryValue = categoryMatch ? categoryMatch[1] : "";

  return {
    route: route,
    containsPage: !!pageValue,
    containsCategory: !!categoryValue,
    pageValue: pageValue,
    categoryValue: categoryValue,
  };
}

export default function BlogCategoriesFilter({
  categories,
}: {
  categories: CATEGORIES_QUERYResult;
}) {
  const pathname = usePathname();
  const { categoryValue } = analyzeRoute(pathname);

  return (
    <div>
      <div className="flex flex-row flex-wrap gap-1 pb-2">
        <Link href={`/blog`}>
          <FilterBadge
            isActive={categoryValue === "" ? true : false}
          >
            <span className="whitespace-nowrap">All</span>
          </FilterBadge>
        </Link>
        {categories.map((category) => {
          if (!category.postCount) return;
          return (
            <Link key={category._id} href={`/blog/categories/${category.slug!.current}`}>
              <FilterBadge
                isActive={categoryValue === category.slug!.current}
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
