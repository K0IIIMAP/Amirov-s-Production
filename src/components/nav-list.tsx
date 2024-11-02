"use client";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import React from "react";
const routes = [
  { label: "Home", path: "/" },
  { label: "Men", path: "/men" },
  { label: "Women", path: "/women" },
];
export default function NavList() {
  const currentPath = usePathname();

  return (
    <ul className="flex gap-6">
      {routes.map((route) => (
        <li
          key={route.path}
          className={cn(`cursor-pointer hover:text-accent`, {
            "text-accent": route.path === currentPath,
          })}
        >
          {route.label}
        </li>
      ))}
    </ul>
  );
}
