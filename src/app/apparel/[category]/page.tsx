import NewColGrid from "@/components/newcol-grid";

import React from "react";

export default async function ApparelPage({
  params,
}: {
  params: { category: Promise<string> };
}) {
  const slug = await params.category;

  return (
    <main>
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
  );
}
