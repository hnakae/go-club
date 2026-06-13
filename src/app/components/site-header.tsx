import Image from "next/image";
import React from "react";
import Link from "next/link";
import { MEETINGS } from "@/lib/meetings";

const HomeHeader = () => {

  return (
    <div className="flex justify-center items-center z-10 w-full">
      <div className="relative mb-4 py-4 max-w-[1128px] rounded-md flex justify-center items-center w-full xs:border-none xs:my-0 text-neutralColor z-20 border border-primaryColor overflow-hidden">
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
            <div className="text-5xl md:text-5xl sm:text-4xl xs:text-3xl my-8 font-extrabold tracking-tight font-playfair text-white drop-shadow-md select-none">
              Welcome to the Club!
            </div>

            
            <div className="flex md:flex-row sm:flex-col xs:flex-col w-full justify-center items-center gap-2">
              {/* Wednesday */}
              <a
                href={MEETINGS.wednesday.mapUrl}
                draggable={false}
                target="_blank"
                className="max-w-[400px] flex flex-col items-center justify-center md:w-1/2 w-full p-6 md:p-10 rounded-2xl cursor-pointer
                  bg-black/30  border border-primaryColor/5 ring-1 ring-primaryColor/30 backdrop-blur-xl 
                  shadow-[0_4px_20px_rgba(255,255,255,0.05)] 
                  hover:shadow-[0_6px_30px_rgba(255,255,255,0.08)] 
                  hover:ring-primaryColor/50 transition-all duration-150 group"
              >
                <div className="text-2xl md:text-2xl sm:text-2xl xs:text-xl font-bold mb-2 font-playfair underline text-primaryColor  group-hover:text-primaryColor transition ">
                  Wednesday
                </div>
                <div className="flex flex-col items-center text-primaryColor">
                  <div className="font-montserrat text-xl  my-1 text-white drop-shadow-md transition tracking-tight ">
                    {MEETINGS.wednesday.place}
                  </div>
                  <div className="font-montserrat text-lg  my-1 text-white drop-shadow-md transition  ">
                    {MEETINGS.wednesday.time}
                  </div>
                </div>
              </a>

              {/* Sunday */}
              <a
                href={MEETINGS.sunday.mapUrl}
                target="_blank"
                draggable={false}
                className="max-w-[400px] flex flex-col items-center justify-center md:w-1/2 w-full p-6 md:p-10 rounded-2xl cursor-pointer
                  bg-black/30  border border-primaryColor/5 ring-1 ring-primaryColor/30 backdrop-blur-xl 
                  shadow-[0_4px_20px_rgba(255,255,255,0.05)] 
                  hover:shadow-[0_6px_30px_rgba(255,255,255,0.08)] 
                  hover:ring-primaryColor/50 transition-all duration-150 group"
              >
                <div className="text-2xl md:text-2xl sm:text-2xl xs:text-xl font-bold mb-2 font-playfair underline text-primaryColor group-hover:text-primaryColor transition ">
                  Sunday
                </div>
                <div className="flex flex-col items-center text-white">
                  <div className="font-montserrat text-xl  my-1 text-white drop-shadow-md transition tracking-tight">
                    {MEETINGS.sunday.place}
                  </div>
                  <div className="font-montserrat text-lg  my-1 text-white drop-shadow-md transition ">
                    {MEETINGS.sunday.time}
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
    my-6 px-7 py-3 
    rounded-full 
    text-white text-base font-medium 
    backdrop-blur-xl 
    bg-black/30 
    border border-primaryColor/5 
    ring-1 ring-primaryColor/30 
    shadow-[0_4px_20px_rgba(255,255,255,0.05)] 
    hover:shadow-[0_6px_30px_rgba(255,255,255,0.08)] 
    hover:ring-primaryColor/50 
    transition-all duration-150 
    group
  "
>
  <span className="relative z-10 text-white drop-shadow-md transition-all duration-150 font-semibold ">
    Join Our <span className="text-[#5865F2]  transition-all duration-150 drop-shadow-md font-semibold">Discord</span>
  </span>
</Link>


            {/* <Link
              href="/contact"
              draggable={false}
              className="
                relative 
                mt-9 px-7 py-3 
                rounded-full 
                text-white text-base font-medium 
                backdrop-blur-xl 
                bg-black/30 
                hover:bg-primaryColor/5
                border border-primaryColor/5 
                ring-1 
                shadow-[0_4px_20px_rgba(255,255,255,0.05)] 
                transition-all duration-150 
                hover:shadow-[0_6px_30px_rgba(255,255,255,0.08)] 
                ring-primaryColor/30 
                 group
              "
            >
              <span className="relative z-10 text-white  drop-shadow-md transition-all duration-150 font-semibold  ">
                Join Our Discord
              </span>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
