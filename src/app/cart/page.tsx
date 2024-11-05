import { auth } from "@/auth";
import DeleteBtn from "@/components/delete-btn";
import { client } from "@/sanity/lib/client";
import { CART_BY_ID, PRODUCT_BY_SLUG_FOR_CART } from "@/sanity/query";

import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

export default async function CartPage() {
  const session = await auth();
  if (!session) {
    redirect("/");
  }
  const id = session.user.id;
  // console.log(id);
  const cart = await client.fetch(CART_BY_ID, { id });
  const slugs = cart.cart;

  const products = await Promise.all(
    slugs?.map((slug) => client.fetch(PRODUCT_BY_SLUG_FOR_CART, { slug }))
  );

  const flattenedProducts = products.flat() || [];
  // we can have a discount. count the discount too

  const unformattedTotal = flattenedProducts.reduce((acc, curr) => {
    return acc + curr.price - (curr.price * (curr.discount || 0)) / 100;
  }, 0);
  const total = parseFloat(unformattedTotal.toFixed(2));

  // console.log(flattenedProducts);
  return (
    <>
      {/* BG ELLIPSES  */}
      <Image
        src="/main ellipse.png"
        width={400}
        height={555}
        alt="ellipse"
        className="absolute top-[190px]  right-[-240px] -z-10 select-none max-md:right-[-300px]"
      ></Image>

      <Image
        src="/ellipse top.png"
        width={200}
        height={150}
        alt="ellipse"
        className="absolute top-0 left-0 -z-10 max-xl:left-[-70px] max-md:left-[-105px]"
      ></Image>
      {/* BG ELLIPSES  */}

      <main className="mt-[50px] max-lg:px-[5%] min-h-[78vh] mb-10">
        <h1 className="text-[25px] text-center max-md:text-[18px]">
          Your Cart [{flattenedProducts?.length} items]
        </h1>

        <section>
          <div className="flex justify-between mt-[30px] text-[18px] max-md:text-[14px] mb-5">
            <p className=" max-lg:ml-[10px]">Item</p>
            <p className="max-sm:ml-[100px] ml-[280px] max-md:ml-[100px]">
              Price
            </p>
            <p>Quantity</p>
            <p className="">Tot </p>
          </div>
          <section>
            <hr className="border-black/40 border-t-[2px]" />
            {flattenedProducts.length ? (
              flattenedProducts.map((product) => (
                <div
                  key={product.slug}
                  className="flex justify-between items-center  border-b-[2px] border-black/40 py-[10px]"
                >
                  <section className="flex gap-x-3 items-center max-md:flex-col max-md:items-baseline  ">
                    <div>
                      <Link href={`/product/${product.slug}`}>
                        <Image
                          width={75}
                          height={75}
                          alt="img"
                          src={product.images.asset.url}
                          className="w-[75px] h-[75px] object-cover object-top"
                        />
                      </Link>
                    </div>
                    <div className="text-[14px] max-md:text-[12px] max-md:flex max-md:flex-col max-md:items-baseline ">
                      <p className="max-w-[200px] max-md:max-w-[100px] ">
                        {product.title}
                      </p>
                      <p>Delivery:June 6th</p>
                    </div>
                  </section>
                  <section className="max-md:text-[14px]">
                    {/* count the price below including the dicsount ( %)*/}

                    {!product.discount ? (
                      <p>${product.price}</p>
                    ) : (
                      <p>
                        $
                        {product.price -
                          (product.price * product.discount) / 100}
                      </p>
                    )}
                  </section>
                  <section className="max-md:text-[14px]">
                    <p> 1 </p>
                  </section>
                  <section className="max-md:text-[14px] flex gap-x-2 relative">
                    {!product.discount ? (
                      <p>${product.price}</p>
                    ) : (
                      <p>
                        $
                        {product.price -
                          (product.price * product.discount) / 100}
                      </p>
                    )}
                    <DeleteBtn slug={product.slug} />
                  </section>
                </div>
              ))
            ) : (
              <h1 className="text-center mt-40 max-md:text-[20px] text-[22px]">
                Your cart is empty
              </h1>
            )}

            {flattenedProducts.length ? (
              <div className="ml-auto flex items-end mt-20 flex-col w-[250px]">
                <div className=" flex flex-col items-start w-full mb-2">
                  <p>
                    Grand Total:
                    <span className="text-[20px] font-thin ml-[20px]">
                      ${total}
                    </span>
                  </p>
                  <p>Sales Taxes: $0</p>
                  <p>Delivery: $0</p>
                </div>
                <button className="w-[250px] h-[40px] bg-black hover:bg-black/60 text-accent max-md:text-[14px] text-[20px]">
                  Check Out
                </button>
              </div>
            ) : (
              " "
            )}
          </section>
        </section>
      </main>
    </>
  );
}
