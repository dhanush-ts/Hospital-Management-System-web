"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "../ui/sidebar"
import { Badge } from "../ui/badge"

// Badge component for navigation items
const NavBadge = ({ children }) => (
  <Badge className="rounded-full px-1 py-0 text-xs">{children}</Badge>
)

// Helper function to check active route
const checkIsActive = (href, itemUrl) => {
  return href === itemUrl
}

// Sidebar menu link component
const SidebarMenuLink = ({ item }) => {
  const pathname = usePathname() // Get current URL
  const { setOpenMobile } = useSidebar()

  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        asChild
        isActive={checkIsActive(pathname, item.url)}
        tooltip={item.title}
      >
        <Link href={item.url} onClick={() => setOpenMobile(false)}>
          {item.icon && <item.icon />}
          <span>{item.title}</span>
          {item.badge && <NavBadge>{item.badge}</NavBadge>}
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  )
}

// Sidebar navigation group
export function NavGroup({ title, items }) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>{title}</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuLink key={`${item.title}-${item.url}`} item={item} />
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
