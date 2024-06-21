import Image from "next/image";
import React from "react";
import Quote from "../contact/quote";
import Button from "./ui/cta-button";
import Head from "next/head";

const MeetUpInfo = () => {
  return (
    <>
      <Head>
        {/* Preload images */}
        <link rel="preload" href="/assets/images/stones.jpg" as="image" />
      </Head>
      <div className="relative my-12  mx-6 flex items-center justify-center  sm:flex-col xs:flex-col sm:mt-0 xs:mt-0 xs:bg-[#DFF8B4] sm:mb-6  ">
        {/* <div className="fixed z-0 top-0 h-full w-full text-[200px] font-sans font-bold text-gray-200 bg-[url(/assets/images/slatebg.png)]" /> */}

        <div className="max-w-[1128px] rounded-md flex  justify-center items-center  w-full  text-neutralColor z-10 border border-primaryColor backdrop-blur-md">
          {/* <Quote /> */}
          <div className=" w-full p-10  flex items-center justify-around rounded-md  text-neutralColor    z-20  border-primaryColor ">
            <div className="flex flex-col items-center justify-center">
              <div className="mb-11 text-4xl font-extrabold tracking-tight lg:text-6xl font-playfair">
                {" "}
                Wednesday Meetups
              </div>
              <div className="font-montserrat text-xl opacity-60 mb-2">
                5:30 pm - 9:00 pm.
              </div>
              <div className="font-montserrat text-xl opacity-80 mb-3 ">
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
              className=" rounded-full w-[360px] h-[360px] object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MeetUpInfo;
