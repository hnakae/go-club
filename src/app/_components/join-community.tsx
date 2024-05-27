import React from "react";

const JoinCommunity = () => {
  return (
    <div className="bg-[#FFFBF2]">
      <div className="flex justify-center  my-28 items-center bg-[#EDF3FD] mx-16 rounded-md h-[480px] p-16 ">
        <div className="message flex flex-col space-y-8   w-[500px]">
          <h1 className="text-[28px] font-semibold underline decoration-yellow-300">
            Become A Part Of Our Community!
          </h1>
          <p className="text-[16px] pr-8">
            Join the conversation and meet other folks like you! Get feedback
            and quick help with your games in our online communities, or attend
            a meetup to learn. You can find cool resources, get notifications,
            chat, share, and learn.
          </p>
          <div className="text-[14px]  w-40 flex justify-center items-center rounded-md py-2 px-2 bg-[#2D2D2D] text-white cursor-pointer transition-opacity hover:bg-black">
            JOIN COMMUNITY
          </div>
        </div>
        <div className="images  w-[400px] h-[400px] pl-8">imgs</div>
      </div>{" "}
    </div>
  );
};

export default JoinCommunity;
