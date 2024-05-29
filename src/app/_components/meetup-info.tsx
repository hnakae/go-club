import React from "react";

const MeetUpInfo = () => {
  return (
    // bg-[#DDEAFC] blue
    // bg-[url('/assets/images/cover.jpg')]  image background
    <div className="mt-24 mb-8 bg-[#DDEAFC] py-6 mx-16 h-fit flex-col flex items-center justify-center rounded-md ">
      <div className="underline decoration-yellow-300 text-[40px] font-semibold mb-8">
        Meetup Info
      </div>
      <div className="text-3xl mb-4"> Wednesdays 5:30pm</div>
      <div className="text-3xl "> Wheel Apizza Pub</div>
    </div>
  );
};

export default MeetUpInfo;
