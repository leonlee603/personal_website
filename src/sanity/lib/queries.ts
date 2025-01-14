import { defineQuery } from "next-sanity";

export const POSTS_COUNT = defineQuery(`count(*[_type == "post"])`);

export const POSTS_IN_CATEGORY_COUNT = defineQuery(`count(*[_type == "post" && $category in categories[]->slug.current ])`);

// get all posts
export const POSTS_QUERY =
  defineQuery(`*[_type == "post" && defined(slug.current)]|order(publishedAt desc){
  _id,
  title,
  slug,
  body,
  mainImage,
  publishedAt,
  "categories": coalesce(
    categories[]->{
      _id,
      slug,
      title
    },
    []
  ),
  author->{
    name,
    image
  }
}`);

// get all posts within a page range
export const POSTS_RANGE_QUERY =
  defineQuery(`*[_type == "post" && defined(slug.current)]|order(publishedAt desc)[$start...$end]{
  _id,
  title,
  slug,
  body,
  mainImage,
  publishedAt,
  "categories": coalesce(
    categories[]->{
      _id,
      slug,
      title
    },
    []
  ),
  author->{
    name,
    image
  }
}`);

export const POSTS_SLUGS_QUERY =
  defineQuery(`*[_type == "post" && defined(slug.current)]{ 
  "slug": slug.current
}`);

// get a post with specific post slug
export const POST_QUERY =
  defineQuery(`*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  body,
  mainImage,
  publishedAt,
  "categories": coalesce(
    categories[]->{
      _id,
      slug,
      title
    },
    []
  ),
  author->{
    name,
    image
  }
}`);

// get all categories and order by title
export const CATEGORIES_QUERY =
  defineQuery(`*[_type == "category"] | order(title asc) {
    _id,
    title,
    slug,
    "postCount": count(*[_type == "post" && references(^._id)])
}`);

// get all posts related to a specific category
export const POSTS_IN_CATEGORY_QUERY =
  defineQuery(`*[_type == "post" && defined(slug.current) && $category in categories[]->slug.current] | order(publishedAt desc) {
    _id,
    title,
    slug,
    body,
    mainImage,
    publishedAt,
    "categories": coalesce(
      categories[]->{
        _id,
        slug,
        title
      },
      []
    ),
    author->{
      name,
      image
    }
}`);

// get all posts related to a specific category within a page range
export const POSTS_IN_CATEGORY_RANGE_QUERY =
  defineQuery(`*[_type == "post" && defined(slug.current) && $category in categories[]->slug.current] | order(publishedAt desc)[$start...$end] {
    _id,
    title,
    slug,
    body,
    mainImage,
    publishedAt,
    "categories": coalesce(
      categories[]->{
        _id,
        slug,
        title
      },
      []
    ),
    author->{
      name,
      image
    }
}`);

export const NOTES_COUNT = defineQuery(`count(*[_type == "note"])`);

export const NOTES_IN_TOPIC_COUNT = defineQuery(`count(*[_type == "note" && $topic in topics[]->slug.current ])`);

// get all notes
export const NOTES_QUERY =
  defineQuery(`*[_type == "note" && defined(slug.current)]|order(publishedAt desc){
  _id,
  title,
  slug,
  body,
  mainImage,
  publishedAt,
  "topics": coalesce(
    topics[]->{
      _id,
      slug,
      title
    },
    []
  ),
  author->{
    name,
    image
  }
}`);

// get all notes within a page range
export const NOTES_RANGE_QUERY =
  defineQuery(`*[_type == "note" && defined(slug.current)]|order(publishedAt desc)[$start...$end]{
  _id,
  title,
  slug,
  body,
  mainImage,
  publishedAt,
  "topics": coalesce(
    topics[]->{
      _id,
      slug,
      title
    },
    []
  ),
  author->{
    name,
    image
  }
}`);

export const NOTES_SLUGS_QUERY =
  defineQuery(`*[_type == "note" && defined(slug.current)]{ 
  "slug": slug.current
}`);

// get a note with specific slug
export const NOTE_QUERY =
  defineQuery(`*[_type == "note" && slug.current == $slug][0]{
  _id,
  title,
  body,
  mainImage,
  publishedAt,
  "topics": coalesce(
    topics[]->{
      _id,
      slug,
      title
    },
    []
  ),
  author->{
    name,
    image
  }
}`);

// get all topics and order by title
export const TOPICS_QUERY =
  defineQuery(`*[_type == "topic"] | order(title asc) {
    _id,
    title,
    slug,
    "postCount": count(*[_type == "note" && references(^._id)])
}`);

// get all notes related to a specific topic
export const NOTES_IN_TOPIC_QUERY =
  defineQuery(`*[_type == "note" && defined(slug.current) && $topic in topics[]->slug.current] | order(publishedAt desc) {
    _id,
    title,
    slug,
    body,
    mainImage,
    publishedAt,
    "topics": coalesce(
      topics[]->{
        _id,
        slug,
        title
      },
      []
    ),
    author->{
      name,
      image
    }
}`);

// get all notes related to a specific topic within a page range
export const NOTES_IN_TOPIC_RANGE_QUERY =
  defineQuery(`*[_type == "note" && defined(slug.current) && $topic in topics[]->slug.current] | order(publishedAt desc)[$start...$end] {
    _id,
    title,
    slug,
    body,
    mainImage,
    publishedAt,
    "topics": coalesce(
      topics[]->{
        _id,
        slug,
        title
      },
      []
    ),
    author->{
      name,
      image
    }
}`);