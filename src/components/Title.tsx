import { PropsWithChildren } from 'react'

export default function Title(props: PropsWithChildren) {
  return (
    <h1 className="text-pretty text-4xl font-semibold md:text-5xl lg:text-6xl">
      {props.children}
    </h1>
  )
}