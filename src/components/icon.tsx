'use client'

import { useTheme } from 'next-themes'
import Image from 'next/image'

interface IconProps {
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

export function Icon({ name, size }: IconProps) {
  const { theme } = useTheme()
  const iconPath = `/assets/icons/${name}-${theme === 'dark' ? 'dark' : 'light'}.svg`

  return (
    <Image
      alt="icon"
      src={iconPath}
      width={size === 'md' ? 24 : 32}
      height={size === 'md' ? 24 : 32}
    />
  )
}
