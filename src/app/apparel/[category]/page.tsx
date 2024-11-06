import FilterDrop from "@/components/filter-drop";
import NewColGrid from "@/components/newcol-grid";
import Image from "next/image";

import React from "react";

export default async function ApparelPage({
  params,
}: {
  params: { category: Promise<string> };
}) {
  const slug = await params?.category;

  const apparelSlug = slug !== "accessories";
  console.log("apparelSlug", apparelSlug);
  return (
    <>
      <Image
        src="/main ellipse.png"
        width={400}
        height={555}
        alt="ellipse"
        className="absolute top-[50px]  left-[-300px] -z-10 select-none max-md:right-[-350px]"
      ></Image>
      <main className="min-h-screen">
        <h1 className="  text-[18px] custom-xsm:text-[20px] sm:text-[25px] lg:text-[40px] text-center mt-10  max-custom-xsm:px-[2%] ">
          GET RICH OR DIE TRYIN&apos;
          <br />
          <span className="text-accent">
            {" "}
            {slug === "all"
              ? "NEWEST COLLECTION"
              : slug === "men"
                ? "MEN"
                : slug === "women"
                  ? "WOMEN"
                  : slug === "accessories"
                    ? "ACCESSORIES"
                    : ""}
          </span>
        </h1>
        {apparelSlug && <FilterDrop slug={slug} />}
        <NewColGrid
          variant={
            slug === "all"
              ? "apparelPage"
              : slug === "men"
                ? "menPage"
                : slug === "women"
                  ? "womenPage"
                  : slug === "accessories"
                    ? "accessoriesPage"
                    : ""
          }
        ></NewColGrid>
      </main>
    </>
  );
}
