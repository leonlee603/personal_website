import { sanityFetch } from "@/sanity/lib/live";
import { TOPICS_QUERY } from "@/sanity/lib/queries";

import NotesTopicsFilterNew from "./NotesTopicsFilterNew";


export default async function NotesTopicsFilterContainer() {
  const { data: topics } = await sanityFetch({ query: TOPICS_QUERY });

  return (
    <>
      <NotesTopicsFilterNew topics={topics} />
    </>
  );
}
