"use client";
import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <main className=" min-h-screen px-[2%] custom-xl:px-0 flex flex-col max-custom-xmd:items-center  ">
      {/** BRANDING */}
      <div className="flex mt-10 custom-xmd:mt-[125px] flex-col custom-xmd:flex-row ">
        <section className="flex-1 flex flex-col max-md:items-center  pr-[2%]">
          <h1 className=" text-[25px] sm:text-[38px] lg:text-[48px] inline-block leading-[100%] max-md:text-center ">
            Design Innovation <br />
            <span className="text-accent pl-0 md:pl-[85px] whitespace-nowrap ">
              In Tailored Clothing
            </span>
          </h1>
          <p className=" text-[14px] sm:text-[18px] mt-[15px] md:mt-[34px] max-md:max-w-[300px] max-md:text-center">
            Custom, stylish clothing for men and women <br />
            Elevate your everyday look
          </p>
          <button className="w-[300px] md:w-[425px] h-[50px] md:h-[69px] bg-[#000] text-accent text-[18px] md:text-[25px] mt-[15px] md:mt-[30px] custom-xmd:mt-[57px] ml-0 md:ml-[25px]">
            GET RICH-OR DIE TRYIN&apos;
          </button>
          <div
            onClick={() => {
              document
                .getElementById("new-collection")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex flex-col w-fit ml-0 md:ml-[125px] "
          >
            <div className="flex flex-col items-center">
              <button className="w-[300px] md:w-[425px] h-[50px] md:h-[69px] bg-accent text-black text-[18px] md:text-[25px] mt-[11px] ">
                NEW COLLECTION IS OUT!
              </button>
              <span className="animate-smoothBounce text-[18px] md:text-[25px] cursor-pointer mt-3  ">
                ↓↓↓
              </span>
            </div>
          </div>
        </section>

        <section className="flex-2 max-sm:ml-2 lg:mr-[-40px] max-sm:mt-[130px] max-custom-xmd:mt-[150px]">
          <div className="flex mt-[-40px]   max-sm:w-[310px] max-md:w-[400px] max-xl:w-[450px]  max-lg:mr-0 max-xl:mr-[80px] max-lg:ml-[20px] max-sm:ml-[0] ">
            <div className="w-[325px] h-[325px] rounded-[10] relative mr-[-100px]">
              <div className="w-[72px] h-[30px] md:w-[92px] md:h-[44px] bg-accent text-[15px] md:text-[20px] flex items-center justify-center rounded-tr-[10] absolute top-0 right-0 z-10">
                NEW
              </div>
              <Image
                src="/manhome.jpg"
                alt="manhome"
                width={325}
                height={424}
                className="rounded-[10] mr-[-40px] absolute z-1 border border-black/30"
              ></Image>
            </div>
            <div className="w-[325px] h-[325px] rounded-[10] relative">
              <div className="w-[72px] h-[30px] md:w-[92px] md:h-[44px] bg-accent text-[15px] md:text-[20px] flex items-center justify-center rounded-tr-[10] absolute top-[-57px] right-0 z-10">
                NEW
              </div>
              <Image
                src="/girlhome.jpg"
                alt="manhome"
                width={325}
                height={424}
                className=" rounded-[10] object-fit absolute z-[-1] top-[-57px] border border-black/30 object-cover"
              ></Image>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
