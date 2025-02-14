import { sanityFetch } from "@/sanity/lib/live";
import { TOPICS_QUERY } from "@/sanity/lib/queries";

import NotesTopicsFilter from "./NotesTopicsFilter";


export default async function NotesTopicsFilterContainer() {
  const { data: topics } = await sanityFetch({ query: TOPICS_QUERY });

  return (
    <>
      <NotesTopicsFilter topics={topics} />
    </>
  );
}
