"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import "../globals.css";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function RootLayout({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();
  const pathname = usePathname() || "";

  useEffect(() => {
    if (typeof document !== "undefined") {
      const cookies = document.cookie ? document.cookie.split("; ") : [];
      const jwtCookie = cookies.find((row) => row.startsWith("jwt="));

      if (!jwtCookie) {
        router.push("/login"); // ✅ Redirect if JWT is missing
      } else {
        setIsAuthenticated(true);
      }
    }
  }, []);

  const pathSegments = pathname.split("/").filter(Boolean);
  const breadcrumbItems = pathSegments.map((segment, index) => ({
    label: segment.replace(/-/g, " "),
    link: "/" + pathSegments.slice(0, index + 1).join("/"),
    className: index === 0 ? "hidden md:block" : "",
    separatorClassName: index < pathSegments.length - 1 ? "hidden md:block" : "",
  }));

  if (!isAuthenticated) return null;

  return (
    <SidebarProvider>
      <AppSidebar variant="floating" />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1 rounded-md border" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                {breadcrumbItems.map((item, index) => (
                  <React.Fragment key={index}>
                    <BreadcrumbItem className={item.className}>
                      <BreadcrumbLink href={item.link}>
                        {item.label.charAt(0).toUpperCase() + item.label.slice(1)}
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    {index < breadcrumbItems.length - 1 && (
                      <BreadcrumbSeparator className={` ${item.separatorClassName}`} />
                    )}
                  </React.Fragment>
                ))}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
