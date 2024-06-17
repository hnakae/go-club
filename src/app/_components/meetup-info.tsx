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

    <div className="relative   flex items-center justify-center  sm:flex-col xs:flex-col sm:mt-0 xs:mt-0 xs:bg-[#DFF8B4] sm:mb-6  ">
      <div className="max-w-[1128px] rounded-md flex justify-start w-full   ">
        <div className="py-12 px-3   flex-col flex items-start justify-center rounded-md  text-center   z-20">
          {/* <div className="text-lg font-montserrat  ">Meetup Info</div> */}
          <div className="font-playfair text-4xl mb-4"> Wednesday Meetups</div>
          <div className="font-montserrat text-xl mb-4">
            From 5:30 pm - 9:00 pm.
          </div>
          <div className="font-montserrat text-xl ">
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
            className="py-2 px-4 rounded-full w-[100px] mt-6 border-2 text-white bg-[#0071E3]"
          >
            RSVP
          </a>
          {/* <div className=" mt-12 p-4 rounded-md   bg-[#3a506b]">Primary</div>
          <div className=" mt-12 p-4 rounded-md   bg-[#5bc0be]">Secondary</div>
          <div className=" mt-12 p-4 rounded-md   bg-[#f25f5c]">Accent</div>
          <div className=" mt-12 p-4 rounded-md   bg-[#ff7f11]">Brand</div>
          <div className=" mt-12 p-4 rounded-md border-2 border-[#cccccc]  bg-[#ffffff]">
            <div className="text-[#4a4a4a]">Card</div>
          </div> */}
        </div>
        <div className="absolute right-1/4 top-10 flex justify-center items-center  sm:ml-0 xs:ml-0 xs:absolute z-10 sm:hidden">
          <a
            href="https://www.openstreetmap.org/way/1012479109"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/magpie.png"
              alt="map"
              width={450}
              height={250}
              className=" rounded-md shadow-lg"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MeetUpInfo;
