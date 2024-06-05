import React from "react";

const MeetUpInfo = () => {
  return (
    // bg-[#DDEAFC] blue
    // bg-[url('/assets/images/cover.jpg')]  image background
    <div className="flex flex-col justify-center items-center">
      <div className="underline border-black decoration-yellow-300 text-[40px] font-black  mt-36">
        Meetup Info
      </div>

      <div className="  mb-8  py-3 px-12 text-start mx-16 h-fit flex items-center justify-center rounded-md ">
        <div className="  my-8 p-3  h-fit flex-col flex items-center justify-center rounded-md shadow-sm  text-center bg-[#DDEAFC] mr-6">
          <div className="text-3xl mb-4"> Wednesdays</div>
          <div className="text-3xl mb-4"> 5:30 pm - 9:00 pm</div>
          <div className="text-3xl "> Wheel Apizza Pub, on Lincoln St.</div>
        </div>
        <div className="  my-8 p-3  h-fit flex-col flex items-center justify-center rounded-md  shadow-sm text-center bg-[#DDEAFC]">
          <div className="text-3xl mb-4"> Sundays</div>
          <div className="text-3xl mb-4"> 12:00 pm - 2:00 pm</div>
          <div className="text-3xl "> Espresso Roma, on 13th Ave Every</div>
        </div>
      </div>
    </div>
  );
};

export default MeetUpInfo;
