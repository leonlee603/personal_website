"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { TOPICS_QUERYResult } from "@/sanity/types";

import FilterBadge from "./FilterBadge";

// Helper function to get the information of topics and page number.
function analyzeRoute(route: string) {
  const pagePattern = /\/page\/([^/]+)/;
  const topicPattern = /\/topics\/([^/]+)/;

  const pageMatch = route.match(pagePattern);
  const pageValue = pageMatch ? pageMatch[1] : "";

  const topicMatch = route.match(topicPattern);
  const topicValue = topicMatch ? topicMatch[1] : "";

  return {
    route: route,
    containsPage: !!pageValue,
    containsTopic: !!topicValue,
    pageValue: pageValue,
    topicValue: topicValue,
  };
}

export default function NotesTopicsFilterNew({
  topics,
}: {
  topics: TOPICS_QUERYResult;
}) {
  const pathname = usePathname();
  const { topicValue } = analyzeRoute(pathname);

  return (
    <div>
      <div className="flex flex-row flex-wrap gap-1 pb-2">
        <Link href={`/notes`}>
          <FilterBadge
            isActive={topicValue === "" ? true : false}
          >
            <span className="whitespace-nowrap">All</span>
          </FilterBadge>
        </Link>
        {topics.map((topic) => {
          if (!topic.postCount) return;
          return (
            <Link key={topic._id} href={`/notes/topics/${topic.slug!.current}`}>
              <FilterBadge
                isActive={topicValue === topic.slug!.current}
              >
                <span className="whitespace-nowrap">{topic.title}</span>
              </FilterBadge>
            </Link>
          );
        })}
      </div>
      <hr />
    </div>
  );
}
