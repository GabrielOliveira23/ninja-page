import NextLink from 'next/link'
import type { ComponentProps } from 'react'

interface LinkProps extends ComponentProps<typeof NextLink> {
  isMenu?: boolean
}

export function Link({ isMenu = false, ...props }: LinkProps) {
  if (isMenu) {
    return (
      <NextLink
        className="text-body2 font-medium text-gray-600 hover:text-gray-900 active:text-gray-600"
        {...props}
      />
    )
  }

  return (
    <NextLink
      className="text-bold2 text-normal underline text-gray-600 hover:text-gray-900 active:text-gray-600"
      {...props}
    />
  )
}
