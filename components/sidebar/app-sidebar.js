"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Currency,
  Frame,
  GalleryVerticalEnd,
  History,
  Home,
  Hospital,
  Map,
  Notebook,
  PieChart,
  Pill,
  Receipt,
  Settings2,
  SquareTerminal,
  Tablet,
  Stethoscope 
} from "lucide-react"

import { NavUser } from "./nav-user"
import { TeamSwitcher } from "./team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { NavGroup } from "./nav-group"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Home",
      url: "/home",
      icon: Home,
      isActive: true,
      roles : ["admin", "doctor", "patient","pharma"]
    },
    {
      title: "Doctors",
      url: "/doctors",
      icon: Stethoscope ,
      roles : ["admin", "patient"]
    },
    {
      title: "Appointments",
      url: "/appointments",
      icon: Notebook,
      roles : ["admin", "doctor", "patient"]
    },
    {
      title: "Pharma Orders",
      url: "/pharma",
      icon: Pill,
      roles : ["admin", "pharma", "patient"]
    },
    {
      title: "Bills",
      url: "/bills",
      icon: Receipt,
      roles : ["admin", "doctor", "patient"]
    },
    {
      title: "History",
      url: "/history",
      icon: History,
      roles : ["admin", "doctor", "patient"]
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavGroup title={"Items"} items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
