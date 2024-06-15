import Image from "next/image";
import React from "react";

const MeetUpInfo = () => {
  return (
    // bg-[#DDEAFC] blue
    // bg-gradient-to-b from-blue-500 to-sky-300
    // bg-[url('/assets/images/cover.jpg')]  image background
    // bg-[url(/assets/images/5thstreet.jpg)]
    // <div className="flex flex-col justify-start items-center mt-12 ">

    <div className="relative    text-start  flex items-center justify-center py-24 sm:flex-col xs:flex-col sm:mt-0 xs:mt-0 xs:bg-[#DFF8B4] sm:mb-6 mb-36">
      {/* <Image
        src="/assets/images/cloud1.png"
        alt="image"
        width={300}
        height={100}
        className="absolute top-4 left-12"
      />
      <Image
        src="/assets/images/cloud2.png"
        alt="image"
        width={300}
        height={100}
        className="absolute bottom-0 left-2"
      />
      <Image
        src="/assets/images/cloud2.png"
        alt="image"
        width={300}
        height={100}
        className="absolute bottom-10 right-0 translate-x-52"
      />
      <Image
        src="/assets/images/decoration.png"
        alt="image"
        width={615}
        height={100}
        className="absolute "
      /> */}
      <div className="py-12  h-fit flex-col flex items-center justify-center rounded-md  text-center  z-20">
        <div>Meetup Info</div>
        <div className="font-playfair text-[55px] mb-4"> Wednesdays</div>
        <div className="font-montserrat text-2xl mb-4"> 5:30 pm - 9:00 pm</div>
        <div className="font-montserrat text-2xl ">
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
        {/* <Image
          src="/assets/images/5thstreet.jpg"
          alt="map"
          width={450}
          height={250}
          className=" rounded-md shadow-lg"
        /> */}
      </div>
      <div className="  ml-8 sm:ml-0 xs:ml-0 xs:absolute z-10 sm:hidden">
        <a href="https://www.openstreetmap.org/way/1012479109" target="_blank">
          <Image
            src="/assets/images/5thstreetalley.jpg"
            alt="map"
            width={350}
            height={250}
            className=" rounded-md shadow-lg"
          />
        </a>
      </div>
    </div>
    // </div>
  );
};

export default MeetUpInfo;
