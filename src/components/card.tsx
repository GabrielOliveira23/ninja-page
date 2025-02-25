import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type CardProps = ComponentProps<'div'>

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={twMerge(
        'flex max-sm:flex-col md:flex-row w-full bg-gray-200 rounded-xl drop-shadow-2xl',
        className
      )}
      {...props}
    />
  )
}
