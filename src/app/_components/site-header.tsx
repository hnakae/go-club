"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Button from "./ui/cta-button";
import Head from "next/head";
import MeetupInfo from "./meetup-info";

const HomeHeader = () => {
  // const [resultFromRouteHandler, setResultFromRouteHandler] = useState();
  // useEffect(() => {
  //   const getResult = async () => {
  //     const response = await fetch("../api/routeHandler");
  //     const data = await response.json();

  //     setResultFromRouteHandler(data.message);
  //   };
  //   getResult();
  // }, []);

  return (
    <>
      <div className="flex justify-center items-center  z-10 w-full   ">
        <div className="    py-10 my-4 max-w-[1128px]  rounded-md flex  justify-center items-center   w-full xs:border-none xs:my-0  text-neutralColor z-20 border border-primaryColor backdrop-blur-md">
          <div className=" w-full px-10  flex sm:flex-col-reverse xs:flex-col-reverse items-center justify-around rounded-md  text-neutralColor    z-20  border-primaryColor ">
            {/* {resultFromRouteHandler} */}
            <div className="flex flex-col items-center">
              {" "}
              <MeetupInfo />
              <Button />
            </div>

            <Image
              width={400}
              height={400}
              src="/assets/images/stones.jpg"
              alt="search icon"
              className=" rounded-full w-[340px] h-[340px] object-cover md:w-[250px] md:h-[250px] sm:w-[200px] sm:h-[200px] xs:w-[200px] xs:h-[200px] select-none"
              priority={true}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHeader;
