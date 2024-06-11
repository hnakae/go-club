import Image from "next/image";
import Link from "next/link";
import React from "react";

const JoinCommunity = () => {
  return (
    // bg-[#DDEAFC]
    <div className="select-none mx-16 mb-8 flex justify-center  items-center shadow-lg rounded-xl h-[480px] overflow-hidden">
      <div className="message flex flex-col space-y-8 w-1/2 px-8">
        <h1 className="text-[28px] font-semibold decoration-yellow-300">
          Become A Part Of Our Community!
        </h1>
        <p className="text-[16px] pr-8">
          Join the conversation and meet other folks like you! Get feedback and
          quick help with your games in our online communities, or attend a
          meetup to learn. You can find cool resources, get notifications, chat,
          share, and learn.
        </p>
        {/* <a
          href="https://discord.com/channels/1164649557687275703/1164649557687275706"
          target="_blank"
          className="text-[14px] w-40 flex justify-center items-center rounded-md py-2 px-2 bg-[#2D2D2D] text-white cursor-pointer transition-opacity hover:bg-black"
        >
          JOIN COMMUNITY
        </a> */}
        <div className="socials flex pt-4 space-x-4">
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
      <div className="w-1/2 h-full  bg-gradient-to-br from-teal-400 to-sky-400 flex justify-center items-center ">
        <Image
          src="/assets/images/social.png"
          alt="placeholder"
          width={400}
          height={400}
          className="pointer-events-none  rounded-r-xl "
        />
      </div>
    </div>
  );
};

export default JoinCommunity;
