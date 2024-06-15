import Image from "next/image";
import React from "react";
import Avatar from "./avatar";

const Quote = () => {
  return (
    <section className=" px-6 rounded-md w-full sm:mb-6 mb-36">
      <div className="max-w-[1000px] flex justify-center space-x-24 items-center   sm:flex-col-reverse  xs:space-y-3 sm:space-y-3 ">
        <div className="flex flex-col ">
          {/* <div className="font-playfair leading-[1.06] tracking-wide xs:tracking-tighter sm:tracking-tight font-semibold mb-12 xs:mb-6 text-center text-4xl xs:text-3xl">
            How To Find Us
          </div> */}
          <div className="px-6 w-[310px] flex flex-col  justify-center items-start  py-6   rounded-lg ml-3 sm:ml-0 border-2 border-black relative">
            <div className="absolute top-[-16px] left-4 bg-beige1">
              <Image src="/icons/quote.png" alt="icon" width={30} height={30} />
            </div>
            {/* style={{ textIndent: "2em" }} */}
            <p className="font-lora mb-4">
              Look for the gobans and listen for the clacking of slate and
              shell. We'll be on the west side near Magpie Coffee.
            </p>
            <div className="font-montserrat text-xl font-bold">
              Daniel Takamori
            </div>
          </div>
        </div>{" "}
        <div className="relative flex justify-center items-end h-[450px]">
          <div className="absolute bottom-0 w-full h-[280px] bg-[url(/assets/images/greenSquiggles.jpg)]"></div>
          <Image
            src="/assets/images/daniel-edited.png"
            width={300}
            height={300}
            alt="daniel"
            className="z-20 mb-0" // Set margin-bottom to 0 to align properly
          />
        </div>
      </div>
    </section>
  );
};

export default Quote;
