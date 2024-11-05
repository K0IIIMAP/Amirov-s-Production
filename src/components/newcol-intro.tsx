import Link from "next/link";
import React from "react";

export default function NewColIntro() {
  return (
    <div className=" max-sm:mt-[-180px] max-md:mt-[-100px]">
      <h1 className="  text-[18px] custom-xsm:text-[20px] sm:text-[25px] lg:text-[40px] text-center mt-10 max-custom-xmd:mt-[200px] max-custom-xsm:px-[2%] ">
        GET RICH OR DIE TRYIN&apos; IS OUT!!!
      </h1>
      <h2 className=" text-[18px] custom-xsm:text-[20px] sm:text-[25px] lg:text-[40px] text-center text-accent">
        limited edition
      </h2>
      <Link href="/apparel/all">
        <div className=" flex w-fit  ml-auto text-[12px] md:text-[16px] cursor-pointer mt-5 mr-6 group">
          <p>SEE ALL</p>
          <span className="group-hover:translate-x-2 transition  duration-200">
            →
          </span>
        </div>
      </Link>
    </div>
  );
}
