"use client";
import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <main className=" min-h-screen">
      {/** BRANDING */}
      <div className="flex mt-[125px] ">
        <section className="flex-1">
          <h1 className="text-[48px] inline-block leading-[100%] ">
            Design Innovation <br />
            <span className="text-accent pl-[85px]">In Tailored Clothing</span>
          </h1>
          <p className="text-[18px] mt-[34px]">
            Custom, stylish clothing for men and women <br />
            Elevate your everyday look
          </p>
          <button className="w-[425px] h-[69px] bg-[#000] text-accent text-[25px] mt-[57px] ml-[25px]">
            GET RICH-OR DIE TRYIN&apos;
          </button>
          <div
            onClick={() => {
              document
                .getElementById("new-collection")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex flex-col items-center w-fit ml-[125px] group"
          >
            <button className="w-[425px] h-[69px] bg-accent text-black text-[25px] mt-[11px] ">
              NEW COLLECTION IS OUT!
            </button>
            <span className="text-[25px] cursor-pointer group-hover:translate-y-2 transition duration-300 ">
              ↓↓↓
            </span>
          </div>
        </section>

        <section className="flex-2 mr-[-40px]">
          <div className="flex mt-[-40px] ">
            <div className="w-[325px] h-[325px] rounded-[10] relative mr-[-100px]">
              <div className="w-[92px] h-[44px] bg-accent text-[20px] flex items-center justify-center rounded-tr-[10] absolute top-0 right-0 z-10">
                NEW
              </div>
              <Image
                src="/manhome.jpg"
                alt="manhome"
                width={325}
                height={424}
                className="rounded-[10] mr-[-40px] absolute z-1 border border-black"
              ></Image>
            </div>

            <div className="w-[325px] h-[325px] rounded-[10] relative">
              <div className="w-[92px] h-[44px] bg-accent text-[20px] flex items-center justify-center rounded-tr-[10] absolute top-[-57px] right-0 z-10">
                NEW
              </div>
              <Image
                src="/girlhome.jpg"
                alt="manhome"
                width={325}
                height={424}
                className=" rounded-[10] object-fit absolute z-[-1] top-[-57px] border border-black object-cover"
              ></Image>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
