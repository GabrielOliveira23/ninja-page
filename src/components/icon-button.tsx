import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import { Icon } from './icon'

interface IconButtonProps extends ComponentProps<'button'> {
  name:
    | 'github'
    | 'twitter'
    | 'inbox'
    | 'close'
    | 'menu'
    | 'external-link'
    | 'phone'
    | 'light-mode'
    | 'dark-mode'
    | 'location'
    | 'copyright'
    | 'copy'
    | 'linkedin'
  size: 'md' | 'lg'
}

export function IconButton({
  name,
  size,
  className,
  ...props
}: IconButtonProps) {
  return (
    <button
      className={twMerge(
        'p-[6px] rounded-lg text-gray-600 hover:text-gray-700 hover:bg-gray-100 active:text-gray-600 active:bg-gray-200',
        className
      )}
      {...props}
    >
      <Icon name={name} size={size} />
    </button>
  )
}
