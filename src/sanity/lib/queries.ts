import { defineQuery } from 'next-sanity';

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

export const POSTS_SLUGS_QUERY =
  defineQuery(`*[_type == "post" && defined(slug.current)]{ 
  "slug": slug.current
}`);

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
    title,
    slug,
    "postCount": count(*[_type == "post" && references(^._id)])
}`);

// get all post related to a category
export const POSTS_CATEGORY_QUERY = 
  defineQuery(`*[_type == "post" && $slug in categories[]->slug.current] | order(publishedAt desc) {
    title,
    slug,
    publishedAt,
}`);