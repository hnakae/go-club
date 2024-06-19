import Image from "next/image";
import React from "react";

const MeetUpInfo = () => {
  return (
    // bg-[#DDEAFC] blue
    // bg-gradient-to-b from-blue-500 to-sky-300
    // bg-[url('/assets/images/cover.jpg')]  image background
    // bg-[url(/assets/images/5thstreet.jpg)]
    // <div className="flex flex-col justify-start items-center mt-12 ">
    // bg-[#F5F5F7] apple light bg
    // text-[#1D1D1F] apple dark text
    // <div className="sticky top-14">
    <div className="relative h-[75vh]  flex items-center justify-center  sm:flex-col xs:flex-col sm:mt-0 xs:mt-0 xs:bg-[#DFF8B4] sm:mb-6  ">
      <div className="fixed z-0 top-0 h-full w-full text-[200px] font-sans font-bold text-gray-200 bg-[url(/assets/images/slatebg.png)]">
        {/* Eugene Go Club */}
      </div>
      <div className="max-w-[1128px] rounded-md flex justify-center w-full  text-neutralColor ">
        <div className="backdrop-blur-md   flex-col flex items-center justify-center rounded-md  text-neutralColor  opacity-95 p-8  z-20 border border-primaryColor shadow-md">
          <div className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl font-playfair">
            {" "}
            Wednesday Meetups
          </div>
          <div className="font-montserrat text-xl mt-4 opacity-60">
            From 5:30 pm - 9:00 pm.
          </div>
          <div className="font-montserrat text-xl font-semibold opacity-80 mt-4">
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

          <a
            href="https://www.meetup.com/eugene-go-players/events/"
            target="_blank"
            className="relative py-2 px-8 rounded-lg  mt-8 border border-primaryColor  shadow-faded-2px hover:-translate-y-1 "
          >
            <span className="absolute inset-0 rounded-lg shadow-inner-white"></span>
            <span className="relative z-10 font-montserrat">RSVP</span>
          </a>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default MeetUpInfo;
