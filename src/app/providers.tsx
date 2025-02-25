'use client'

import { SidebarProvider } from '@/components/ui/sidebar'
import { ThemeProvider } from 'next-themes'
import { type ReactNode, useEffect, useState } from 'react'

interface ProvidersProps {
  children: ReactNode
}

export function Providers({ children }: ProvidersProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <SidebarProvider className="flex flex-col">{children}</SidebarProvider>
    </ThemeProvider>
  )
}
