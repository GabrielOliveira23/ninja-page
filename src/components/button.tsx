import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type ButtonProps = ComponentProps<'button'>

export function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      className={twMerge(
        'w-full rounded-xl px-4 py-[6px] text-body2 font-medium text-gray-50 bg-gray-900 hover:bg-gray-700 active:bg-gray-800',
        className
      )}
      {...props}
    />
  )
}
