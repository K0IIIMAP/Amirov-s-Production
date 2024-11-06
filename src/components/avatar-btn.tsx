"use client";
import { useIndicator } from "@/app/contexts/indicator-context-provider";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { CircleUserRound } from "lucide-react";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { signUserOut } from "@/lib/actions";

export default function AvatarBtn({ avatar }: { avatar: string }) {
  const { indicator } = useIndicator();
  console.log(indicator);
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <button className="cursor-pointer ml-5 z-10   relative ">
          {indicator ? (
            <div className="h-[10px] w-[10px] bg-[#dc3545] rounded-full absolute top-0 z-50 right-0"></div>
          ) : (
            ""
          )}
          <Avatar>
            <AvatarImage src={avatar} />
            <AvatarFallback>
              {" "}
              <CircleUserRound />
            </AvatarFallback>
          </Avatar>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-[#e4e4e4]">
        <Link href="/cart" className="relative">
          <DropdownMenuItem className="cursor-pointer">Cart </DropdownMenuItem>
          {indicator ? (
            <div className="h-[10px] w-[10px] bg-[#dc3545] rounded-full absolute right-0 top-[10px]  "></div>
          ) : (
            ""
          )}
        </Link>
        <Link href="/history">
          <DropdownMenuItem className="cursor-pointer">
            History
          </DropdownMenuItem>
        </Link>

        <DropdownMenuSeparator className="bg-slate-400 " />

        <DropdownMenuLabel className="text-center text-red-500 cursor-pointer text-[14px] font-normal ">
          <form action={signUserOut}>
            <button type="submit"> Sign Out</button>
          </form>
        </DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
