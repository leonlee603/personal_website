import Link from "next/link";
import type { TOPICS_QUERYResult } from "@/sanity/types";
import FilterBadge from "./FilterBadge";

export default async function NotesTopicsFilter({
  currentTopic,
  topics,
}: {
  currentTopic: string | string[] | undefined;
  topics: TOPICS_QUERYResult;
}) {
  return (
    <div>
      <div className="flex flex-row flex-wrap gap-1 pb-2">
        <Link href={`/notes`}>
          <FilterBadge
            isActive={
              currentTopic === "" || currentTopic === undefined
                ? true
                : false
            }
          >
            <span className="whitespace-nowrap">All</span>
          </FilterBadge>
        </Link>
        {topics.map((topic) => {
          if (!topic.postCount) return;
          return (
            <Link
              key={topic._id}
              href={`/notes?topic=${topic.slug!.current}`}
            >
              <FilterBadge
                isActive={currentTopic === topic.slug!.current}
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
