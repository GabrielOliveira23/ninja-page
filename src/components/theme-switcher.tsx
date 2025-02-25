'use client'

import { useTheme } from 'next-themes'
import { IconButton } from './icon-button'

export function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <IconButton
      name={`${resolvedTheme === 'dark' ? 'dark-mode' : 'light-mode'}`}
      size="md"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    />
  )

  // return (
  //   <button
  //     type="button"
  //     className="bg-gray-900 p-2 rounded-full w-20 transition duration-300 shadow drop-shadow-md"
  //     onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
  //   >
  //     {resolvedTheme === 'dark' ? '🌞' : '🌙'}
  //   </button>
  // )
}
