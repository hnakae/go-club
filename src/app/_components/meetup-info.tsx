import Image from "next/image";
import React from "react";

const MeetUpInfo = () => {
  return (
    // bg-[#DDEAFC] blue
    // bg-gradient-to-b from-blue-500 to-sky-300
    // bg-[url('/assets/images/cover.jpg')]  image background
    // bg-[url(/assets/images/background-flipped.png)]
    <div className="flex flex-col justify-start items-center mt-6 ">
      {/* <div className=" border-black text-[55px] font-black ">Meetup Info</div> */}

      <div className="   text-start h-fit flex items-center justify-center rounded-md ">
        <div className="py-12  h-fit flex-col flex items-center justify-center rounded-md  text-center  ">
          <div className="font-playfair text-[55px] mb-4"> Wednesdays</div>
          <div className="font-montserrat text-2xl mb-4">
            {" "}
            5:30 pm - 9:00 pm
          </div>
          <div className="font-montserrat text-2xl ">
            {" "}
            5th Street Alley near{" "}
            <a
              href="https://www.google.com/maps/place/Magpie+Coffeeshop/@44.0534091,-123.0906905,17z/data=!3m1!4b1!4m6!3m5!1s0x54c11f944e770925:0x5d79ed248cc805f2!8m2!3d44.0534091!4d-123.0906905!16s%2Fg%2F11rc73f_8q?entry=ttu"
              className="underline"
            >
              Magpie Coffee
            </a>
          </div>
        </div>
        <div className="  ml-6 ">
          <a href="https://www.openstreetmap.org/way/1012479109">
            <Image
              src="/assets/images/map.png"
              alt="map"
              width={450}
              height={250}
              className=" rounded-md "
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MeetUpInfo;
