import { CATEGORIES_QUERYResult } from "@/sanity/types";

// function to group all categories by first letter of its title
export function groupedCategories(categories: CATEGORIES_QUERYResult) {
  return categories.reduce<Record<string, CATEGORIES_QUERYResult>>(
    (acc, item) => {
      const firstLetter = item.title!.charAt(0).toLowerCase(); // Get the first letter and convert to lowercase
      if (!acc[firstLetter]) {
        acc[firstLetter] = []; // Initialize an array for this letter if it doesn't exist
      }
      acc[firstLetter].push(item); // Push the current item into the respective group
      return acc;
    },
    {}
  );
}