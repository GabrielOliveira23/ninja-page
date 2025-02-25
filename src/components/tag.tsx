import type { ComponentProps } from "react";

type TagProps = ComponentProps<'div'>

export function Tag(props: TagProps){
  return (
    <div
      className="rounded-xl py-1 px-5 text-body3 font-medium text-gray-600 bg-gray-200"
      {...props}
    />
  )
}