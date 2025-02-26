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
import { useEffect, useState } from "react"

// Badge component for navigation items
const NavBadge = ({ children }) => (
  <Badge className="rounded-full px-1 py-0 text-xs">{children}</Badge>
)

// Helper function to check active route
const checkIsActive = (href, itemUrl) => {
  return href === itemUrl
}

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

export function NavGroup({ title, items }) {
  const [cookieValue, setCookieValue] = useState("");

  useEffect(() => {
    const cookies = document.cookie.split("; ");
    const targetCookie = cookies.find((row) => row.startsWith("user_type="));
    if (targetCookie) {
      setCookieValue(targetCookie.split("=")[1]);
    }
    console.log('targetCookie', targetCookie.split("=")[1])
  }, []);

  return (
    <SidebarGroup>
      <SidebarGroupLabel>{title}</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => 
            item.roles.includes(cookieValue) && (<SidebarMenuLink key={`${item.title}-${item.url}`} item={item} />)
        )}
      </SidebarMenu>
    </SidebarGroup>
  )
}
