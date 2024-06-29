import Image from "next/image";
import Link from "next/link";
import React from "react";
import Head from "next/head";
import Quotation from "../_components/svgs/quotation";

const JoinCommunity = () => {
  return (
    <div className="select-none overflow-visible  flex  justify-center items-center w-full">
      <Head>
        {/* Preload images */}
        <link
          rel="preload"
          href="/assets/images/daniel-edited.png"
          as="image"
        />
        <link rel="preload" href="/icons/facebook.png" as="image" />
        <link rel="preload" href="/icons/discord.png" as="image" />
        <link rel="preload" href="/icons/meetup.png" as="image" />
        <link rel="preload" href="/icons/ogs-icon.png" as="image" />
      </Head>
      <div className=" max-w-[1128px]  rounded-md text-white flex justify-around items-center    w-full h-full overflow-hidden">
        <div className=" message flex flex-col h-full  justify-center items-start  ">
          {/* <h1 className="font-playfair text-4xl xs:text-2xl leading-[1.06] tracking-wide font-semibold mb-4">
            Become A Part Of Our Community!
          </h1>
          <p className="font-lora text-md pr-8 xs:pr-0 mb-6 tracking-wide">
            Join the conversation and meet other folks like you!
          </p> */}
          <div className="px-6 w-[310px] flex flex-col  justify-center items-start  py-6 backdrop-blur-sm opacity-95  rounded-lg ml-3 sm:ml-0 border border-primaryColor bg-primaryColor/5 shadow-md">
            {/* <div className="absolute top-[-16px] left-4 bg-baseColor">
              <Image src="/icons/quote.png" alt="icon" width={30} height={30} />
            </div> */}
            {/* style={{ textIndent: "2em" }} */}
            <p className="font-lora mb-4">
              Look for the gobans and listen for the clacking of slate and
              shell. We'll be on the west side near Magpie Coffee.
            </p>
            <div className="font-montserrat  font-bold flex">
              <div className="mr-12 opacity-80"> Daniel Takamori</div>

              <Quotation />
              {/* <Image
                src="/icons/quote.png"
                alt="icon"
                width={30}
                height={30}
                className="ml-12 rotate-180 "
              /> */}
            </div>
          </div>
        </div>
        <Image
          src="/assets/images/daniel-edited.png"
          width={200}
          height={200}
          alt="daniel"
          className="z-20 mb-0 rounded-md border border-primaryColor bg-primaryColor/5 shadow-md" // Set margin-bottom to 0 to align properly
        />
        <div className="bg-primaryColor/5 flex flex-col space-y-4 border h-full border-primaryColor rounded-md shadow-md p-8  items-center">
          <Link
            href="https://www.facebook.com/groups/EugeneGoClub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/facebook.png"
              alt="facebook icon"
              width={25}
              height={25}
              className="pointer-events-none"
            />
          </Link>
          <Link
            href="https://discord.com/channels/1164649557687275703/1174766988787208345"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/discord.png"
              alt="discord icon"
              width={25}
              height={25}
              className="pointer-events-none"
            />
          </Link>
          <Link
            href="https://www.meetup.com/eugene-go-players/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/meetup.png"
              alt="meetup icon"
              width={25}
              height={25}
              className="pointer-events-none"
            />
          </Link>
          <Link
            href="https://online-go.com/group/6435"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/ogs-icon.png"
              alt="ogs icon"
              width={25}
              height={25}
              className="rounded-full pointer-events-none"
            />
          </Link>
        </div>
      </div>
      {/* <Quote /> */}
    </div>
  );
};

export default JoinCommunity;
