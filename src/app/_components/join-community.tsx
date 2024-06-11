import Image from "next/image";
import Link from "next/link";
import React from "react";

const JoinCommunity = () => {
  return (
    // bg-[#DDEAFC]
    <div className=" mx-16 mb-8 flex justify-center px-8  items-center  rounded-md h-[480px] ">
      <div className="message flex flex-col space-y-8   w-[500px]">
        <h1 className="text-[28px] font-semibold underline decoration-yellow-300">
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
          className="text-[14px]  w-40 flex justify-center items-center rounded-md py-2 px-2 bg-[#2D2D2D] text-white cursor-pointer transition-opacity hover:bg-black"
        >
          JOIN COMMUNITY
        </a> */}
        <div className="socials flex pt-4 space-x-4">
          <Link
            href="/https://www.facebook.com/groups/EugeneGoClub"
            target="_blank"
          >
            <Image
              src="/icons/facebook.png"
              alt="facebook icon"
              width={25}
              height={25}
            />
          </Link>
          <Link
            href="https://discord.com/channels/1164649557687275703/1174766988787208345"
            target="_blank"
          >
            <Image
              src="/icons/discord.png"
              alt="facebook icon"
              width={25}
              height={25}
            />
          </Link>{" "}
          <Link
            href="/https://www.meetup.com/eugene-go-players/"
            target="_blank"
          >
            <Image
              src="/icons/meetup.png"
              alt="facebook icon"
              width={25}
              height={25}
            />
          </Link>{" "}
          <Link href="https://online-go.com/group/6435" target="_blank">
            <Image
              className="rounded-full"
              src="/icons/ogs-icon.png"
              alt="facebook icon"
              width={25}
              height={25}
            />
          </Link>
        </div>
      </div>
      <div className="images  w-[400px] h-[400px] pl-8 flex justify-center items-center">
        <Image
          src="/assets/images/cat.jpg"
          alt="placeholder"
          width={400}
          height={400}
          className="rounded-md"
        />
      </div>
    </div>
  );
};

export default JoinCommunity;
