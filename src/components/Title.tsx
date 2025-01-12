import { PropsWithChildren } from 'react'

export function Title(props: PropsWithChildren) {
  return (
    <h1 className="max-w-1248 text-pretty text-2xl font-semibold md:text-4xl lg:text-6xl">
      {props.children}
    </h1>
  )
}