import Image from "next/image";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PRODUCT_BY_SLUG } from "@/sanity/query";
import { client } from "@/sanity/client";

import AddToCartBtn from "@/components/add-to-cart-btn";

export default async function ProductPage({
  params,
}: {
  params: { slug: Promise<string> };
}) {
  const slug = await params?.slug;
  const product = await client.fetch(PRODUCT_BY_SLUG, { slug });
  const { title, price, description, sex, discount } = product;

  return (
    <>
      <Image
        src="/main ellipse.png"
        width={400}
        height={555}
        alt="ellipse"
        className="absolute top-[50px]  right-[-240px] -z-10 select-none"
      ></Image>

      <main className="flex w-full  mb-32 ">
        <div className="flex w-full mt-10 md:mt-20 flex-col lg:flex-row ">
          <section className=" lg:basis-[550px]  h-full  flex  flex-col lg:flex-row lg:justify-normal items-center ">
            <div className="basis-[170px] h-full  flex flex-row lg:flex-col items-center gap-y-4 order-1 lg:order-[0] max-lg:mt-[20px]  gap-x-10 lg:gap-x-0 px-[5%] lg:px-0 max-custom-xsm:hidden ">
              {product.images.map((asset) => (
                <Image
                  key={asset.asset.url}
                  width={110}
                  height={110}
                  src={asset.asset.url}
                  alt="main img"
                  className="w-[110px] h-[110px] object-cover object-top"
                />
              ))}
            </div>

            <Carousel className="w-[375px] h-[500px] max-custom-xsm:w-[300px] max-custom-xsm:h-[400px]  ">
              <CarouselContent>
                {product.images.map((asset) => (
                  <CarouselItem key={asset.asset.url}>
                    <div className="flex-1  transition duration-300 ">
                      <Image
                        width={375}
                        height={500}
                        src={asset.asset.url}
                        alt="main img"
                        className="w-[375px] h-[500px] max-custom-xsm:w-[300px] max-custom-xsm:h-[400px] object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0 top-[50%] translate-y-[-50%] hover:bg-white/30 disabled:hidden opacity-20" />
              <CarouselNext className="right-0 top-[50%] translate-y-[-50%] hover:bg-white/30 disabled:hidden opacity-20" />
            </Carousel>
          </section>

          <section className="flex-1 h-full  pt-[10px] lg:pt-[0px] pl-[40px] max-sm:px-[15%] ">
            <div className="flex  flex-row sm:flex-col max-sm:justify-between  max-sm:items-center">
              <div>
                {discount && (
                  <div className="w-[90px] h-[30px] bg-red-500 text-white  flex items-center justify-center mb-[10px] lg:mb-[20px] ">
                    SALE
                  </div>
                )}
                <p>{title}</p>
                <p className="text-[12px] font-thin ">{sex}</p>
              </div>
              <div className="flex items-center mt-2 max-sm:flex-col ">
                <div className="w-[70px] h-[29px] bg-[#d9d9d9] rounded-[50] flex items-center justify-center cursor-pointer ">
                  <p className="">4.2★</p>
                </div>
                <p className="ml-1 text-[12px] md:text-[14px] mt-1">
                  {" "}
                  12 reviews
                </p>
              </div>
            </div>
            {!discount ? (
              <p
                className="
                text-[18px] mt-[20px]"
              >
                ${price}
              </p>
            ) : (
              <div className="flex items-center mt-[20px] gap-x-3">
                <span className="text-[18px] ">
                  ${price - (price * discount) / 100}
                </span>
                <span className="line-through text-red-500/80 text-[14px] ">
                  ${price}
                </span>
              </div>
            )}

            <p className="text-[14px] mt-1 ">Free shipping 2-4 days</p>
            <AddToCartBtn slug={slug} />
            <p className="max-sm:text-[12px] text-[14px] sm:max-w-[500px] mt-[10px] sm:mt-[30px] sm:pr-10 mb-[50px]">
              {description}
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
// on submit of a form i call an action from use action state. we gonna pass the slug. if the slug is already added there we return a state of denied and get the toast of error. t then we gonna add the product to the cart. we gonna fire the success toast.
