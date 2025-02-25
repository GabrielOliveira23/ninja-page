'use client'

import { Separator } from '@/components/ui/separator'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar'
import { Calendar, Home, Inbox } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from './button'
import { Icon } from './icon'
import { IconButton } from './icon-button'
import { Link } from './link'

const sidebarItems = [
  {
    title: 'About',
    url: '#',
    icon: Home,
  },
  {
    title: 'Contact',
    url: '#',
    icon: Inbox,
  },
  {
    title: 'Projects',
    url: '#',
    icon: Calendar,
  },
]

export function AppSidebar() {
  const { toggleSidebar } = useSidebar()
  const { theme, setTheme } = useTheme()

  return (
    <Sidebar side="right">
      <SidebarHeader className="flex flex-row justify-between p-4">
        <Link href="/" className="font-bold text-h3-mobile">
          {"<Gabriel's Page />"}
        </Link>
        <IconButton name="close" size="md" onClick={toggleSidebar} />
      </SidebarHeader>
      <SidebarContent>
        <Separator orientation="horizontal" />
        <SidebarGroup className="p-0 text-body2">
          <SidebarGroupContent>
            <SidebarMenu className="gap-2 px-2 py-4">
              {sidebarItems.map(item => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="py-1">
                    <Link isMenu href={item.url}>
                      {item.title}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <Separator orientation="horizontal" />
        <SidebarGroup className="p-0">
          <SidebarGroupContent>
            <SidebarMenu className="gap-4 px-2 py-4">
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className="flex flex-row justify-between items-center w-full cursor-pointer"
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                >
                  <div>
                    <span className="text-body2 font-normal">Swtich Theme</span>
                    <Icon
                      name={theme === 'dark' ? 'dark-mode' : 'light-mode'}
                      size="md"
                    />
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <Button>Download CV</Button>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
