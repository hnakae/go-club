import Image from "next/image";
import React from "react";
import Quote from "../contact/quote";
import Button from "./ui/cta-button";
import Head from "next/head";

const MeetUpInfo = () => {
  return (
    <>
      <div className="flex justify-center items-center  z-10 w-full   ">
        <div className="    py-10 my-4 max-w-[1128px]  rounded-md flex  justify-center items-center  w-full xs:border-none xs:my-0  text-neutralColor z-20 border border-primaryColor backdrop-blur-md">
          <div className=" w-full px-10  flex sm:flex-col-reverse xs:flex-col-reverse items-center justify-around rounded-md  text-neutralColor    z-20  border-primaryColor ">
            <div className="flex flex-col items-center justify-center">
              <div className="mb-2 text-6xl md:text-5xl sm:text-4xl xs:text-3xl xs:mt-6 sm:mt-8 font-extrabold tracking-tight  font-playfair">
                {" "}
                Wednesday Meetups
              </div>
              <div className="font-montserrat text-2xl md:text-xl sm:text-lg xs:text-base opacity-60 mb-4 xs:mb-2">
                5:30 pm - 9:00 pm.
              </div>
              <div className="font-montserrat text-2xl md:text-xl sm:text-lg xs:text-base opacity-80 mb-3 ">
                {" "}
                @ 5th Street Alley near{" "}
                <a
                  href="https://www.google.com/maps/place/Magpie+Coffeeshop/@44.0534091,-123.0906905,17z/data=!3m1!4b1!4m6!3m5!1s0x54c11f944e770925:0x5d79ed248cc805f2!8m2!3d44.0534091!4d-123.0906905!16s%2Fg%2F11rc73f_8q?entry=ttu"
                  className="underline "
                  target="_blank"
                >
                  Magpie Coffee
                </a>
              </div>

              <Button />
            </div>
            <Image
              width={400}
              height={400}
              src="/assets/images/stones.jpg"
              alt="search icon"
              className=" rounded-full w-[340px] h-[340px] object-cover md:w-[250px] md:h-[250px] sm:w-[200px] sm:h-[200px] xs:w-[200px] xs:h-[200px]"
              priority={true}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MeetUpInfo;
