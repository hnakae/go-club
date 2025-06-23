"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import MeetupInfo from "./meetup-info";

const HomeHeader = () => {
  const WEDNESDAY = "The Wheel Apizza Pub";
  const SUNDAY = "New Day Bakery";
  
  const wheelMapUrl = "https://www.google.com/maps/place/The+Wheel+Apizza+Pub/@44.0557582,-123.1000482,17z/data=!4m14!1m7!3m6!1s0x54c11e0d72a0a967:0xf477d5fb21b6bc28!2sThe+Wheel+Apizza+Pub!8m2!3d44.0557582!4d-123.0974733!16s%2Fg%2F11ggwbmgbh!3m5!1s0x54c11e0d72a0a967:0xf477d5fb21b6bc28!8m2!3d44.0557582!4d-123.0974733!16s%2Fg%2F11ggwbmgbh?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D";
  const newDayMapUrl = "https://www.google.com/maps/place/New+Day+Bakery/@44.0549823,-123.1110014,17z/data=!3m1!4b1!4m6!3m5!1s0x54c11e715f5e96e5:0x7dd72a7928d6b996!8m2!3d44.0549823!4d-123.1084265!16s%2Fg%2F1tdprd2x?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D";

  return (
    <>
      <div className="flex justify-center items-center z-10 w-full">
        <div className="relative py-10 my-4 max-w-[1128px] rounded-md flex justify-center items-center w-full xs:border-none xs:my-0 text-neutralColor z-20 border border-primaryColor overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/assets/images/cover.jpg"
              alt="Background"
              fill
              className="object-cover opacity-30"
              priority={true}
            />
            <div className="absolute inset-0 backdrop-blur-md bg-baseColor/50"></div>
          </div>
          
          {/* Content */}
          <div className="w-full flex sm:flex-col-reverse xs:flex-col-reverse items-center justify-around rounded-md text-neutralColor z-20 relative px-6">
            <div className="flex flex-col items-center w-full">
              <div className="text-6xl md:text-5xl sm:text-4xl xs:text-3xl xs:mt-6 sm:mt-8 font-extrabold tracking-tight mb-6 font-playfair">
                Our Meetups
              </div>
              
              <div className="flex md:flex-row sm:flex-col xs:flex-col w-full justify-center gap-6">
                {/* Wednesday Info - With enhanced pop effect and entire box clickable */}
                <a 
                  href={wheelMapUrl}
                  target="_blank"
                  className="flex flex-col items-center justify-center md:w-1/2 w-full p-8 md:p-10 backdrop-blur-sm bg-baseColor/20 border border-slate-400/50 rounded-lg shadow-md hover:border-primaryColor/80 hover:shadow-lg transition-all duration-200 group cursor-pointer"
                >
                  <div className="text-4xl md:text-3xl sm:text-2xl xs:text-xl font-bold mb-4 font-playfair underline group-hover:text-primaryColor transition-colors duration-200">
                    Wednesday
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="font-montserrat text-2xl md:text-xl sm:text-lg xs:text-base opacity-80 my-3 group-hover:text-primaryColor transition-colors duration-200">
                      {WEDNESDAY}
                    </div>
                    <div className="font-montserrat text-2xl md:text-xl sm:text-lg xs:text-base opacity-80 my-2 group-hover:text-primaryColor transition-colors duration-200">
                      5:30 - 9:00 pm
                    </div>
                  </div>
                </a>
                
                {/* Sunday Info - With enhanced pop effect and entire box clickable */}
                <a 
                  href={newDayMapUrl}
                  target="_blank"
                  className="flex flex-col items-center justify-center md:w-1/2 w-full p-8 md:p-10 backdrop-blur-sm bg-baseColor/20 border border-slate-400/50 rounded-lg shadow-md hover:border-primaryColor/80 hover:shadow-lg transition-all duration-200 group cursor-pointer"
                >
                  <div className="text-4xl md:text-3xl sm:text-2xl xs:text-xl font-bold mb-4 font-playfair underline group-hover:text-primaryColor transition-colors duration-200">
                    Sunday
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="font-montserrat text-2xl md:text-xl sm:text-lg xs:text-base opacity-80 my-3 group-hover:text-primaryColor transition-colors duration-200">
                      {SUNDAY}
                    </div>
                    <div className="font-montserrat text-2xl md:text-xl sm:text-lg xs:text-base opacity-80 my-2 group-hover:text-primaryColor transition-colors duration-200">
                      12:00 - 2:30 pm.
                    </div>
                  </div>
                </a>
              </div>
              
              <Link
                href="/contact"
                className="relative py-2 px-8 rounded-lg hover:bg-primaryColor/5 mt-8 xs:mt-4 border border-primaryColor shadow-faded-2px select-none"
              >
                <span className="absolute inset-0 rounded-lg shadow-inner-white opacity-30"></span>
                <span className="relative z-10 font-montserrat">Join Our Discord</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHeader;
