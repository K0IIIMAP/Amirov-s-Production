import Image from "next/image";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
export default function ProductPage() {
  return (
    <>
      <Image
        src="/main ellipse.png"
        width={400}
        height={555}
        alt="ellipse"
        className="absolute top-[50px]  right-[-240px] -z-10 select-none"
      ></Image>

      <main className="flex w-full  ">
        <div className="flex w-full mt-20 flex-col lg:flex-row ">
          <section className=" lg:basis-[550px]  h-full  flex  flex-col lg:flex-row lg:justify-normal items-center ">
            <div className="basis-[170px] h-full  flex flex-row lg:flex-col items-center gap-y-4 order-1 lg:order-[0] max-lg:mt-[20px]  gap-x-10 lg:gap-x-0 px-[5%] lg:px-0 max-custom-xsm:hidden ">
              <Image
                width={110}
                height={110}
                src="/testcardimg.png"
                alt="main img"
                className="w-[110px] h-[110px]"
              />
              <Image
                width={110}
                height={110}
                src="/testcardimg.png"
                alt="main img"
                className="w-[110px] h-[110px]"
              />
              <Image
                width={110}
                height={110}
                src="/testcardimg.png"
                alt="main img"
                className="w-[110px] h-[110px]"
              />
            </div>

            <Carousel className="w-[375px] h-[500px] max-custom-xsm:w-[300px] max-custom-xsm:h-[400px]  ">
              <CarouselContent>
                <CarouselItem>
                  <div className="flex-1  ">
                    <Image
                      width={375}
                      height={500}
                      src="/manhome.jpg"
                      alt="main img"
                      className="w-[375px] h-[500px] max-custom-xsm:w-[300px] max-custom-xsm:h-[400px]"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="flex-1  ">
                    <Image
                      width={375}
                      height={500}
                      src="/manhome.jpg"
                      alt="main img"
                      className="w-[375px] h-[500px] max-custom-xsm:w-[300px] max-custom-xsm:h-[400px]"
                    />
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="left-0 top-[50%] translate-y-[-50%] hover:bg-white/30 disabled:hidden" />
              <CarouselNext className="right-0 top-[50%] translate-y-[-50%] hover:bg-white/30 disabled:hidden" />
            </Carousel>
          </section>

          <section className="flex-1 h-full  pt-[10px] lg:pt-[40px] pl-[40px]  ">
            <p className="text-15">WOMEN</p>
            <p className="text-18  ">CROP TOP</p>
            <div className="flex items-center mt-2">
              <div className="w-[70px] h-[29px] bg-[#d9d9d9] rounded-[50] flex items-center justify-center">
                <p className="text-18">4.2★</p>
              </div>
              <p className="ml-1"> 12 reviews</p>
            </div>
            <p className="text-[18px] mt-[20px]">$200</p>
            <p className="text-[16px] mt-1">Free shipping 2-4 days</p>
            <button className="w-[122px] h-[29px] text-[14px] bg-accent mt-[10px]">
              Add to cart
            </button>
            <p className="text-[14px] max-w-[500px] mt-[30px] pr-10">
              Featuring a flattering, midriff-baring cut, this crop top is
              designed to sit comfortably above the waist, making it the perfect
              pairing with high-waisted jeans or skirts. Available in a variety
              of fabrics —from soft cotton to luxe satin—it offers a stylish
              blend of comfort and trend-forward appeal. Ideal for warm weather
              or layered looks, a crop top can add versatility to any wardrobe.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
