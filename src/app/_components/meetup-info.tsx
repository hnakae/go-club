import React from "react";

const MeetUpInfo = () => {
  return (
    // bg-[#DDEAFC] blue
    // bg-gradient-to-b from-blue-500 to-sky-300
    // bg-[url('/assets/images/cover.jpg')]  image background
    <div className="flex  mb-6 flex-col justify-start items-center bg-[url(/assets/images/background-flipped.png)] bg-no-repeat text-white  h-[55vh]">
      {/* <div className=" border-black text-[55px] font-black ">Meetup Info</div> */}

      <div className="  mt-28  text-start h-fit flex items-center justify-center rounded-md ">
        <div className="py-12  h-fit flex-col flex items-center justify-center rounded-md  text-center  ">
          <div className="text-[55px] mb-4"> Wednesdays</div>
          <div className="text-2xl mb-4"> 5:30 pm - 9:00 pm</div>
          <div className="text-2xl "> Wheel Apizza Pub, on Lincoln St.</div>
        </div>
        {/* <div className="  my-8 p-3  h-fit flex-col flex items-center justify-center rounded-md   text-center ">
          <div className="text-3xl mb-4"> Sundays</div>
          <div className="text-2xl mb-4"> 12:00 pm - 2:00 pm</div>
          <div className="text-2xl "> Espresso Roma, on 13th Ave Every</div>
        </div> */}
      </div>
    </div>
  );
};

export default MeetUpInfo;
