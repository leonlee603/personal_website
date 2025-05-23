import { Categories } from "@/components/Categories";
import { NOTES_QUERYResult } from "@/sanity/types";
import { PublishedAt } from "@/components/PublishedAt";
import Link from "next/link";

export default function NoteCard(props: NOTES_QUERYResult[0]) {
  const { title, publishedAt, topics } = props;

  return (
    <Link className="" href={`/notes/${props.slug!.current}`}>
      <div className="flex flex-col justify-between gap-2 overflow-hidden border-b-2 border-dotted py-3 md:gap-4 md:py-4 lg:flex-row lg:gap-6 lg:py-5">
        <div className="max-w-70 text-base font-semibold leading-none tracking-tight md:text-lg">{title}</div>
        <div className="flex flex-row items-center gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <Categories categories={topics} />
          </div>
          <PublishedAt publishedAt={publishedAt} className="mb-0 text-nowrap" />
        </div>
      </div>
    </Link>
  );
}
