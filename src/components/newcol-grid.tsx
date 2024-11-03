import { client } from "@/sanity/lib/client";
import { mainPageProds } from "@/sanity/query";
import Image from "next/image";
import React from "react";

export default async function NewColGrid() {
  const products = await client.fetch(mainPageProds);
  console.log(products);
  return (
    <section className="grid max-sm:grid-cols-2 sm:grid-cols-2 custom-md:grid-cols-3 xl:grid-cols-4   gap-y-10 lg:gap-y-[100px] mt-6 place-items-center custom-xsm:px-[10%] sm:px-[5%] xl:px-0   text-[12px] lg:text-[16px]  mb-14">
      {products.map((prod) => (
        <div key={prod.title}>
          <Image
            src={prod.images.asset.url}
            width={255}
            height={337}
            alt="prod img"
            className=" w-[150px] h-[150px] sm:w-[255px] sm:h-[300px] object-cover"
          ></Image>
          <div>
            <div className="flex justify-between">
              <p className=" max-w-[100px] md:max-w-[200px] truncate ">
                {prod.title}
              </p>
              <p>${prod.price}</p>
            </div>
            <div className="flex justify-between mt-1">
              <p>{prod.sex}</p>
              <button className="bg-accent w-[60px] h-[25px]">BUY</button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
