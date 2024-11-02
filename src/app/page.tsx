import Image from "next/image";
import HeroSection from "./hero-section";

export default function Home() {
  return (
    <div>
      {/** DESIGN DETAILS */}

      <Image
        src="/main ellipse.png"
        width={400}
        height={555}
        alt="ellipse"
        className="absolute top-[190px]  right-[-240px] -z-10 select-none"
      ></Image>

      <Image
        src="/ellipse top.png"
        width={200}
        height={150}
        alt="ellipse"
        className="absolute top-0 left-0 -z-10 select-none"
      ></Image>
      <Image
        src="/main ellipse.png"
        width={400}
        height={555}
        alt="ellipse"
        className="absolute top-[900px] rotate-45 left-[-380px] -z-10 select-none"
      ></Image>
      <Image
        src="/ellipse top.png"
        width={200}
        height={150}
        alt="ellipse"
        className="absolute right-[-40px] rotate-180  bottom-0 -z-10 select-none"
      ></Image>
      {/** DESIGN DETAILS */}

      <HeroSection />

      {/** NEW COLLECTION SECTOn */}
      <section id="new-collection" className="h-screen flex flex-col">
        <div>
          <h1 className="text-[40px] text-center mt-10">
            GET RICH OR DIE TRYIN&apos; IS OUT!!!
          </h1>
          <h2 className="text-[40px] text-center text-accent">
            limited edition
          </h2>
          <div className=" flex w-fit  ml-auto text-14 cursor-pointer mt-5 mr-6 group">
            <p>SEE ALL</p>
            <span className="group-hover:translate-x-2 transition  duration-200">
              →
            </span>
          </div>
        </div>

        <section className="grid max-sm:grid-cols-2 sm:grid-cols-2 custom-md:grid-cols-3 custom-lg:grid-cols-4  gap-y-[100px] mt-6 place-items-center sm:px-[5%] xl:px-0">
          <div>
            <Image
              src="/testcardimg.png"
              width={255}
              height={337}
              alt="prod img"
              className=" w-[150px] h-[150px] sm:w-[255px] sm:h-[300px] object-cover"
            ></Image>
            <div>
              <div className="flex justify-between">
                <p>Crop Top</p>
                <p>20$</p>
              </div>
              <div className="flex justify-between mt-1">
                <p>Women</p>
                <button className="bg-accent w-[60px] h-[25px]">BUY</button>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/testcardimg.png"
              width={255}
              height={337}
              alt="prod img"
              className=" w-[150px] h-[150px] sm:w-[255px] sm:h-[300px] object-cover"
            ></Image>
            <div>
              <div className="flex justify-between">
                <p>Crop Top</p>
                <p>20$</p>
              </div>
              <div className="flex justify-between mt-1">
                <p>Women</p>
                <button className="bg-accent w-[60px] h-[25px]">BUY</button>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/testcardimg.png"
              width={255}
              height={337}
              alt="prod img"
              className=" w-[150px] h-[150px] sm:w-[255px] sm:h-[300px] object-cover"
            ></Image>
            <div>
              <div className="flex justify-between">
                <p>Crop Top</p>
                <p>20$</p>
              </div>
              <div className="flex justify-between mt-1">
                <p>Women</p>
                <button className="bg-accent w-[60px] h-[25px]">BUY</button>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/testcardimg.png"
              width={255}
              height={337}
              alt="prod img"
              className=" w-[150px] h-[150px] sm:w-[255px] sm:h-[300px] object-cover"
            ></Image>
            <div>
              <div className="flex justify-between">
                <p>Crop Top</p>
                <p>20$</p>
              </div>
              <div className="flex justify-between mt-1">
                <p>Women</p>
                <button className="bg-accent w-[60px] h-[25px]">BUY</button>
              </div>
            </div>
          </div>
        </section>
        <footer className="flex justify-between mt-auto mb-2">
          <p className="">© 2024 Amirov&apos;s Prod. All rights reserved.</p>
          <a
            href="https://wa.me/380965360759"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-500 transition"
          >
            Connect with Me
          </a>
        </footer>
      </section>

      {/** FOOTER */}
    </div>
  );
}
