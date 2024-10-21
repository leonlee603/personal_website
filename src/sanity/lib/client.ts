import { createClient, QueryOptions, type QueryParams } from "next-sanity";
import { draftMode } from "next/headers";

import { apiVersion, dataset, projectId } from "../env";
import { token } from "./token";

/**
 * Sanity Client is a JavaScript library commonly used to interact with Sanity projects.
 * Its most basic function is querying content, but once authenticated with a token,
 * it can interact with almost every part of a Sanity project.
 */

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
  stega: {
    enabled: process.env.NEXT_PUBLIC_VERCEL_ENV === "preview",
    studioUrl: "/studio",
  },
});

export async function sanityFetch<const QueryString extends string>({
  query,
  params = {},
  revalidate = 60, // default revalidation time in seconds
  tags = [],
}: {
  query: QueryString;
  params?: QueryParams;
  revalidate?: number | false;
  tags?: string[];
}) {
  const isDraftMode = draftMode().isEnabled;

  if (isDraftMode && !token) {
    throw new Error("Missing environment variable SANITY_API_READ_TOKEN");
  }

  const queryOptions: QueryOptions = {};
  let maybeRevalidate = revalidate;

  if (isDraftMode) {
    queryOptions.token = token
    queryOptions.perspective = 'previewDrafts'
    queryOptions.stega = true

    maybeRevalidate = 0 // Do not cache in Draft Mode
  } else if (tags.length) {
    maybeRevalidate = false // Cache indefinitely if tags supplied
  }

  return client.fetch(query, params, {
    ...queryOptions,
    next: {
      revalidate: maybeRevalidate,
      tags, // for tag-based revalidation
    },
  });
}
