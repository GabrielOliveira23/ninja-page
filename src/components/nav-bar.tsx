'use client'

import { useEffect, useState } from 'react'
import { Button } from './button'
import { Link } from './link'
import { ThemeSwitcher } from './theme-switcher'
import { SidebarTrigger } from './ui/sidebar'

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-20 bg-background shadow-full px-4 py-4 md:px-10 lg:px-20 flex justify-between items-center ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-xl md:border-gray-100 drop-shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div>
        <Link href="/" className="font-bold text-h3">
          {"<Gabriel's Page />"}
        </Link>
      </div>
      <div>
        <ul className="hidden md:flex gap-4 items-center">
          <li>
            <Link isMenu href="/">
              About
            </Link>
          </li>
          <li>
            <Link isMenu href="/">
              Projects
            </Link>
          </li>
          <li>
            <Link isMenu href="/">
              Contact
            </Link>
          </li>
          <li className="text-gray-100">|</li>
          <li>
            <ThemeSwitcher />
          </li>
          <li>
            <Button>Download CV</Button>
          </li>
        </ul>

        <SidebarTrigger className="md:hidden" />
      </div>
    </header>
  )
}
