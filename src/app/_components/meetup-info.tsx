import React from "react";

const MeetUpInfo = () => {
  return (
    // bg-[#DDEAFC] blue
    // bg-[url('/assets/images/cover.jpg')]  image background
    <div className="w-flex justify-center items-center">
      <div className=" mt-36 mb-8 bg-[#DDEAFC] py-3 px-12 text-start mx-16 h-fit flex-col flex items-center justify-center rounded-md ">
        <div className="  my-8 p-3 mx-16 h-fit flex-col flex items-center justify-center rounded-md ">
          <div className="underline border-black decoration-yellow-300 text-[40px] font-black mb-8">
            Meetup Info
          </div>
          <div className="text-3xl mb-4"> Wednesdays</div>
          <div className="text-3xl mb-4"> 5:30 pm - 9:00 pm</div>
          <div className="text-3xl "> Wheel Apizza Pub</div>
        </div>
      </div>
    </div>
  );
};

export default MeetUpInfo;
