"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
const allRoutes = [
  { label: "Apparel", path: "/apparel/all" },
  { label: "Men", path: "apparel/men" },
  { label: "Women", path: "apparel/women" },
];
// !TODO fix the routes apparel/apparel
const mobileRoutes = [{ label: "Apparel", path: "/apparel" }];

export default function NavList() {
  const [routes, setRoutes] = useState(allRoutes);
  const currentPath = usePathname();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setRoutes(mobileRoutes);
      } else {
        setRoutes(routes);
      }
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <ul className="flex gap-6">
      {routes.map((route) => (
        <Link key={route.path} href={route.path}>
          <li
            className={cn(`cursor-pointer hover:text-accent`, {
              "text-accent": route.path === currentPath,
            })}
          >
            {route.label}
          </li>
        </Link>
      ))}
    </ul>
  );
}
