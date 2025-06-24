import Image from "next/image";
import React from "react";

const Quote = () => {
  return (
    <section className="flex justify-evenly items-center w-full h-[320px]  rounded-md ">
      <div className=" border border-primaryColor w-full backdrop-blur-md text-white rounded-md  mr-4 flex flex-col justify-center items-center px-4 py-10 h-full">
        <p className="font-montserrat tracking-tighter  mb-4 max-w-[400px] text-clip px-12 sm:px-0 xs:px-0 text-xl md:text-lg sm:text-base xs:text-base">
          Look for the gobans and listen for the clacking of slate and shell.
          We'll be on the west side near Magpie Coffee.
        </p>
        <div className="font-montserrat text-lg font-bold flex items-start w-full px-12 sm:px-0 max-w-[400px]">
          <p className="opacity-80">Daniel Takamori</p>
          <Image
            src="/icons/w-quote.png"
            alt="icon"
            width={30}
            height={30}
            draggable={false}
            className="ml-3 rotate-180 -translate-y-3 translate-x-16 sm:translate-x-0 xs:translate-x-0"
          />
        </div>
      </div>
      <Image
        src="/assets/images/daniel-edited.png"
        width={247}
        height={300}
        alt="daniel"
        draggable={false}
        className="z-20  rounded-md border border-primaryColor backdrop-blur-md bg-primaryColor/20 shadow-md h-full"
      />
    </section>
  );
};

export default Quote;
