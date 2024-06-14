import Image from "next/image";
import Link from "next/link";
import React from "react";

const JoinCommunity = () => {
  return (
    // bg-[#DDEAFC]
    <div className="select-none  shadow-lg rounded-xl overflow-visible  mt-6">
      <div className=" flex xs:flex-col-reverse sm:flex-col-reverse justify-center items-center shadow-lg rounded-xl h-[480px] overflow-hidden">
        <div className="bg-white message flex flex-col h-full w-full justify-center items-start md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 p-8">
          <h1 className="font-playfair text-[28px] leading-[1.06] tracking-wide font-semibold">
            Become A Part Of Our Community!
          </h1>
          <p className="font-lora text-[16px] pr-8 mb-3">
            Join the conversation and meet other folks like you!
          </p>
          {/* <a
          href="https://discord.com/channels/1164649557687275703/1164649557687275706"
          target="_blank"
          className="text-[14px] w-40 flex justify-center items-center rounded-md py-2 px-2 bg-[#2D2D2D] text-white cursor-pointer transition-opacity hover:bg-black"
        >
          JOIN COMMUNITY
        </a> */}
          <div className="socials flex space-x-4">
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
        {/* bg-gradient-to-br from-teal-400 to-sky-400 */}
        <div className="relative xs:rounded-t-xl md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 h-full w-full bg-white flex justify-center items-center overflow-visible">
          <Image
            src="/assets/images/social.png"
            alt="placeholder"
            width={400}
            height={400}
            className="absolute min-w-[150px] min-h-[150px] w-auto h-auto pointer-events-none rounded-r-xl "
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              maxWidth: "100%",
              maxHeight: "100%",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default JoinCommunity;
