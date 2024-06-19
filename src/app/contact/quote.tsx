import Image from "next/image";
import React from "react";
import Avatar from "../_components/avatar";

const Quote = () => {
  return (
    <section className="   sm:mb-6  flex justify-center items-center">
      <div className="max-w-[1128px]  rounded-md py-4 w-full flex  justify-center  space-x-12 items-end   sm:flex-col-reverse  xs:space-y-3 sm:space-y-3 ">
        <div className="px-6 w-[310px] flex flex-col  justify-center items-start  py-6 backdrop-blur-sm opacity-95  rounded-lg ml-3 sm:ml-0 border border-primaryColor bg-primaryColor/5 shadow-md">
          {/* <div className="absolute top-[-16px] left-4 bg-baseColor">
              <Image src="/icons/quote.png" alt="icon" width={30} height={30} />
            </div> */}
          {/* style={{ textIndent: "2em" }} */}
          <p className="font-lora mb-4">
            Look for the gobans and listen for the clacking of slate and shell.
            We'll be on the west side near Magpie Coffee.
          </p>
          <div className="font-montserrat text-xl font-bold flex">
            Daniel Takamori
            <Image
              src="/icons/quote.png"
              alt="icon"
              width={30}
              height={30}
              className="ml-12 rotate-180 "
            />
          </div>
        </div>
        <div className="relative flex justify-center items-end   ">
          {/* <div className="absolute bottom-0 w-full h-[180px] rounded-b-md bg-[url(/assets/images/greenSquiggles.jpg)]"></div> */}
          <Image
            src="/assets/images/daniel-edited.png"
            width={200}
            height={200}
            alt="daniel"
            className="z-20 mb-0 rounded-md border border-primaryColor bg-primaryColor/5 shadow-md" // Set margin-bottom to 0 to align properly
          />
        </div>
      </div>
    </section>
  );
};

export default Quote;
