import { POST_QUERYResult } from '@/sanity/types'

type CategoriesProps = {
  categories: NonNullable<POST_QUERYResult>['categories']
}

export function Categories({ categories }: CategoriesProps) {
  return categories.map((category) => (
    <span
      key={category._id}
      className="whitespace-nowrap rounded-sm bg-secondary px-2 py-1 text-xs leading-none"
    >
      {category.title}
    </span>
  ))
}