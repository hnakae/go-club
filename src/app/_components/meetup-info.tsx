import { useState } from "react";
import Button from "./ui/cta-button";

const MeetupInfo = () => {
  type Day = "Wednesday" | "Sunday";

  const [selectedDay, setSelectedDay] = useState<Day>("Wednesday");
  const handleDayClick = (): void => {
    setSelectedDay((prevDay) =>
      prevDay === "Wednesday" ? "Sunday" : "Wednesday"
    );
  };

  const WEDNESDAY = "The Wheel Apizza Pub";
  const SUNDAY = "New Day Bakery";
  /*
    wrap Wednesdays text in button
      if clicked, setSelected day & modify css

    wrap Sundays text in button
      

  
  */

  return (
    <div className="flex flex-col items-center justify-center h-full  z-30">
      <div className=" text-6xl md:text-5xl sm:text-4xl xs:text-3xl xs:mt-6 sm:mt-8 font-extrabold tracking-tight  font-playfair">
        {" "}
        <button
          onClick={() => handleDayClick()}
          className={selectedDay === "Wednesday" ? "underline" : ""}
        >
          Wednesday
        </button>{" "}
        {" / "}{" "}
        <button
          onClick={() => handleDayClick()}
          className={selectedDay === "Sunday" ? "underline" : ""}
        >
          Sunday
        </button>
      </div>
      {selectedDay === "Wednesday" ? (
        <div className="flex flex-col items-center">
          <div className="font-montserrat text-2xl md:text-xl sm:text-lg xs:text-base opacity-80 my-3 ">
            <a
              href="https://www.google.com/maps/place/The+Wheel+Apizza+Pub/@44.0557582,-123.1000482,17z/data=!4m14!1m7!3m6!1s0x54c11e0d72a0a967:0xf477d5fb21b6bc28!2sThe+Wheel+Apizza+Pub!8m2!3d44.0557582!4d-123.0974733!16s%2Fg%2F11ggwbmgbh!3m5!1s0x54c11e0d72a0a967:0xf477d5fb21b6bc28!8m2!3d44.0557582!4d-123.0974733!16s%2Fg%2F11ggwbmgbh?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D"
              className="underline font-montserrat text-2xl  md:text-xl sm:text-lg xs:text-base hover:cursor-pointer"
              target="_blank"
            >
              {WEDNESDAY}
            </a>
            {/* <a
          href="https://www.google.com/maps/place/Magpie+Coffeeshop/@44.0534091,-123.0906905,17z/data=!3m1!4b1!4m6!3m5!1s0x54c11f944e770925:0x5d79ed248cc805f2!8m2!3d44.0534091!4d-123.0906905!16s%2Fg%2F11rc73f_8q?entry=ttu"
          className="underline font-montserrat text-2xl  md:text-xl sm:text-lg xs:text-base"
          target="_blank"
        >
          Magpie Coffee
        </a> */}
          </div>{" "}
          <div className="font-montserrat text-2xl md:text-xl sm:text-lg xs:text-base opacity-60 my-2 ">
            5:30 - 9:00 pm
          </div>
        </div>
      ) : (
        <div className={`flex flex-col items-center`}>
          <div className="font-montserrat text-2xl md:text-xl sm:text-lg xs:text-base opacity-80 my-3 ">
            <a
              href="https://www.google.com/maps/place/New+Day+Bakery/@44.0549823,-123.1110014,17z/data=!3m1!4b1!4m6!3m5!1s0x54c11e715f5e96e5:0x7dd72a7928d6b996!8m2!3d44.0549823!4d-123.1084265!16s%2Fg%2F1tdprd2x?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D"
              className="underline font-montserrat text-2xl  md:text-xl sm:text-lg xs:text-base hover:cursor-pointer"
              target="_blank"
            >
              {SUNDAY}
            </a>
            {/* <a
          href="https://www.google.com/maps/place/Magpie+Coffeeshop/@44.0534091,-123.0906905,17z/data=!3m1!4b1!4m6!3m5!1s0x54c11f944e770925:0x5d79ed248cc805f2!8m2!3d44.0534091!4d-123.0906905!16s%2Fg%2F11rc73f_8q?entry=ttu"
          className="underline font-montserrat text-2xl  md:text-xl sm:text-lg xs:text-base"
          target="_blank"
        >
          Magpie Coffee
        </a> */}
          </div>{" "}
          <div className="font-montserrat text-2xl md:text-xl sm:text-lg xs:text-base opacity-60 my-2 ">
            12:00 - 3:00 pm.
          </div>
        </div>
      )}
    </div>
  );
};

export default MeetupInfo;
