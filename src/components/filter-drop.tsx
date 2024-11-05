"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function FilterDrop({ slug }: { slug: string }) {
  console.log(slug);
  const defaultValue =
    slug === "all"
      ? "All"
      : slug === "women"
        ? "Women"
        : slug === "men"
          ? "Men"
          : "";
  console.log(defaultValue);
  const [filter, setFilter] = React.useState(defaultValue);

  return (
    <div className="ml-[22px] custom-xsm:px-[10%] sm:px-[5%] xl:px-0 max-sm:mt-[15px]  ">
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger
          asChild
          className="hover:bg-black hover:text-white focus:bg-black  data-[state=open]:bg-black data-[state=open]:text-white flex flex-row "
        >
          <Button variant="outline" className="max-md:text-[12px]">
            Filter <ChevronDown className="mt-[5px] ml-[-5px]"></ChevronDown>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className=" bg-white"
          onCloseAutoFocus={(e) => e.preventDefault()}
        >
          <DropdownMenuRadioGroup value={filter} onValueChange={setFilter}>
            <Link href="/apparel/all">
              <DropdownMenuRadioItem value="All"> All</DropdownMenuRadioItem>
            </Link>
            <Link href="/apparel/men">
              <DropdownMenuRadioItem value="Men"> Men</DropdownMenuRadioItem>
            </Link>
            <Link href="/apparel/women">
              <DropdownMenuRadioItem value="Women">Women</DropdownMenuRadioItem>
            </Link>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
