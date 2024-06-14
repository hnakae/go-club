import Image from "next/image";
import React from "react";
import Avatar from "./avatar";

const Quote = () => {
  return (
    <section className=" px-6 rounded-md w-full ">
      <div className="font-playfair leading-[1.06] tracking-wide xs:tracking-tighter sm:tracking-tight font-semibold mb-12 text-center text-[40px]">
        How To Find Us
      </div>
      <div className="max-w-[1000px] flex justify-center items-center xs:flex-col sm:flex-col xs:space-y-3 sm:space-y-3  ">
        <div className=" flex-grow flex-shrink-0 xs:w-full sm:w-full">
          <Image
            src="/assets/blog/authors/daniel.webp"
            width={300}
            height={300}
            alt="daniel"
            className="rounded-md shadow-md"
          />
        </div>
        <div className="px-6 flex flex-col w-full justify-center items-start xs:px-0 sm:px-0">
          {/* style={{ textIndent: "2em" }} */}
          <p className="font-lora mb-4">
            "Look for the gobans and listen for the clacking of slate and shell.
            We'll be on the west side near Magpie Coffee."
          </p>
          <div className="font-montserrat text-xl font-bold">
            -Daniel Takamori
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;
