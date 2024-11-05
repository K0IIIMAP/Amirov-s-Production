import Image from "next/image";
import React from "react";

export default function DesignItems() {
  return (
    <>
      <Image
        src="/main ellipse.png"
        width={400}
        height={555}
        alt="ellipse"
        className="absolute top-[190px]  right-[-240px] -z-10 select-none max-md:right-[-350px]"
      ></Image>

      <Image
        src="/ellipse top.png"
        width={200}
        height={150}
        alt="ellipse"
        className="absolute top-0 left-0 -z-10 max-xl:left-[-70px] max-md:left-[-105px]"
      ></Image>
      <Image
        src="/main ellipse.png"
        width={400}
        height={555}
        alt="ellipse"
        className="absolute top-[900px] rotate-45 left-[-380px] -z-10 "
      ></Image>
      <Image
        src="/ellipse top.png"
        width={200}
        height={150}
        alt="ellipse"
        className="absolute right-[-40px] rotate-180  bottom-0 -z-10  hidden xl:block"
      ></Image>
    </>
  );
}
