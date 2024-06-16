import Image from "next/image";
import React from "react";

const MeetUpInfo = () => {
  return (
    // bg-[#DDEAFC] blue
    // bg-gradient-to-b from-blue-500 to-sky-300
    // bg-[url('/assets/images/cover.jpg')]  image background
    // bg-[url(/assets/images/5thstreet.jpg)]
    // <div className="flex flex-col justify-start items-center mt-12 ">

    <div className="relative  px-24 flex items-center justify-center py-24 sm:flex-col xs:flex-col sm:mt-0 xs:mt-0 xs:bg-[#DFF8B4] sm:mb-6 mb-24 bg-dark">
      <div className="p-4 rounded-md flex justify-around w-full text-white max-w-[1000px] ">
        <div className="py-12 px-6    flex-col flex items-start justify-center rounded-md  text-center   z-20">
          <div className="text-lg font-montserrat  ">Meetup Info</div>
          <div className="font-playfair text-4xl mb-4"> Wednesdays</div>
          <div className="font-montserrat text-xl mb-4"> 5:30 pm - 9:00 pm</div>
          <div className="font-montserrat text-xl ">
            {" "}
            5th Street Alley near{" "}
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
            className="py-2 px-4 rounded-full w-[100px] mt-6 border-2"
          >
            RSVP
          </a>
        </div>
        <div className="  sm:ml-0 xs:ml-0 xs:absolute z-10 sm:hidden">
          <a
            href="https://www.openstreetmap.org/way/1012479109"
            target="_blank"
          >
            <Image
              src="/assets/images/5thstreetalley.jpg"
              alt="map"
              width={250}
              height={250}
              className=" rounded-md shadow-lg"
            />
          </a>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default MeetUpInfo;
