"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const HomeHeader = () => {
  const WEDNESDAY = "The Wheel Apizza Pub";
  const SUNDAY = "New Day Bakery";

  const wheelMapUrl =
    "https://www.google.com/maps/place/The+Wheel+Apizza+Pub/@44.0557582,-123.1000482,17z/data=!4m14!1m7!3m6!1s0x54c11e0d72a0a967:0xf477d5fb21b6bc28!2sThe+Wheel+Apizza+Pub!8m2!3d44.0557582!4d-123.0974733!16s%2Fg%2F11ggwbmgbh!3m5!1s0x54c11e0d72a0a967:0xf477d5fb21b6bc28!8m2!3d44.0557582!4d-123.0974733!16s%2Fg%2F11ggwbmgbh?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D";
  const newDayMapUrl =
    "https://www.google.com/maps/place/New+Day+Bakery/@44.0549823,-123.1110014,17z/data=!3m1!4b1!4m6!3m5!1s0x54c11e715f5e96e5:0x7dd72a7928d6b996!8m2!3d44.0549823!4d-123.1084265!16s%2Fg%2F1tdprd2x?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D";

  return (
    <div className="flex justify-center items-center z-10 w-full">
      <div className="relative py-10 my-4 max-w-[1128px] rounded-md flex justify-center items-center w-full xs:border-none xs:my-0 text-neutralColor z-20 border border-primaryColor overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/assets/images/cover.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority={true}
          />
          <div className="absolute inset-0 backdrop-blur-0 bg-baseColor/80"></div>
        </div>

        {/* Content */}
        <div className="w-full flex sm:flex-col-reverse xs:flex-col-reverse items-center justify-around rounded-md text-neutralColor z-20 relative px-6">
          <div className="flex flex-col items-center w-full">
            <div className="text-6xl md:text-5xl sm:text-4xl xs:text-3xl xs:mt-6 sm:mt-8 font-extrabold tracking-tight mb-6 font-playfair text-white drop-shadow-md select-none">
              Welcome to the Club! 
            </div>

            <div className="flex md:flex-row sm:flex-col xs:flex-col w-full justify-center gap-6">
              {/* Wednesday */}
              <a
                href={wheelMapUrl}
                draggable={false}
                target="_blank"
                className="flex flex-col items-center justify-center md:w-1/2 w-full p-8 md:p-10 rounded-2xl cursor-pointer
                  bg-black/30 border border-white/10 ring-1 ring-primaryColor/30 backdrop-blur-xl 
                  shadow-[0_4px_20px_rgba(255,255,255,0.05)] 
                  hover:shadow-[0_6px_30px_rgba(255,255,255,0.08)] 
                  hover:ring-primaryColor/30 transition-all duration-200 group"
              >
                <div className="text-4xl md:text-3xl sm:text-2xl xs:text-xl font-bold mb-4 font-playfair underline text-primaryColor  group-hover:text-primaryColor transition ">
                  Wednesday
                </div>
                <div className="flex flex-col items-center text-primaryColor">
                  <div className="font-montserrat text-xl  my-1 text-white drop-shadow-md transition  ">
                    {WEDNESDAY}
                  </div>
                  <div className="font-montserrat text-xl  my-1 text-white drop-shadow-md transition  ">
                    5:30 - 9:00 pm
                  </div>
                </div>
              </a>

              {/* Sunday */}
              <a
                href={newDayMapUrl}
                target="_blank"
                draggable={false}
                className="flex flex-col items-center justify-center md:w-1/2 w-full p-8 md:p-10 rounded-2xl cursor-pointer
                  bg-black/30 border border-white/10 ring-1 ring-primaryColor/30 backdrop-blur-xl 
                  shadow-[0_4px_20px_rgba(255,255,255,0.05)] 
                  hover:shadow-[0_6px_30px_rgba(255,255,255,0.08)] 
                  hover:ring-primaryColor/30 transition-all duration-200 group"
              >
                <div className="text-4xl md:text-3xl sm:text-2xl xs:text-xl font-bold mb-4 font-playfair underline text-primaryColor group-hover:text-primaryColor transition ">
                  Sunday
                </div>
                <div className="flex flex-col items-center text-white">
                  <div className="font-montserrat text-xl  my-1 text-white drop-shadow-md transition  ">
                    {SUNDAY}
                  </div>
                  <div className="font-montserrat text-xl  my-1 text-white drop-shadow-md transition ">
                    12:00 - 2:30 pm
                  </div>
                </div>
              </a>
            </div>

            {/* Join Discord */}
            <Link
              href="/contact"
              draggable={false}
              className="
                relative 
                mt-10 px-7 py-3 
                rounded-full 
                text-white text-base font-medium 
                backdrop-blur-xl 
                bg-black/30 
                border border-white/10 
                ring-1 ring-white/10 
                shadow-[0_4px_20px_rgba(255,255,255,0.05)] 
                transition-all duration-200 
                hover:shadow-[0_6px_30px_rgba(255,255,255,0.08)] 
                hover:ring-primaryColor/30 
                hover:text-primaryColor group
              "
            >
              <span className="relative z-10 text-white drop-shadow-md transition-all duration-200 font-semibold group-hover:text-primaryColor ">
                Join Our Discord
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
