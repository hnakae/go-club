import React from "react";
import Button from "./ui/cta-button";

const MeetupInfo = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full  z-30">
      <div className=" text-6xl md:text-5xl sm:text-4xl xs:text-3xl xs:mt-6 sm:mt-8 font-extrabold tracking-tight  font-playfair">
        {" "}
        Wednesday Meetups
      </div>
      <div className="font-montserrat text-2xl md:text-xl sm:text-lg xs:text-base opacity-80 my-3 ">
        {" "}
        5th Street Alley near{" "}
        <a
          href="https://www.google.com/maps/place/Magpie+Coffeeshop/@44.0534091,-123.0906905,17z/data=!3m1!4b1!4m6!3m5!1s0x54c11f944e770925:0x5d79ed248cc805f2!8m2!3d44.0534091!4d-123.0906905!16s%2Fg%2F11rc73f_8q?entry=ttu"
          className="underline font-montserrat text-2xl  md:text-xl sm:text-lg xs:text-base"
          target="_blank"
        >
          Magpie Coffee
        </a>
      </div>{" "}
      <div className="font-montserrat text-2xl md:text-xl sm:text-lg xs:text-base opacity-60 my-2 ">
        5:00 pm - 9:00 pm.
      </div>
    </div>
  );
};

export default MeetupInfo;
