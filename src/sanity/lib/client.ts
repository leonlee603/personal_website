import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

/**
 * Sanity Client is a JavaScript library commonly used to interact with Sanity projects. 
 * Its most basic function is querying content, but once authenticated with a token, 
 * it can interact with almost every part of a Sanity project.
 */

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
