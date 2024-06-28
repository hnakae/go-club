import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-center items-center  z-10 w-full   ">
      <div className=" p-4   my-4 max-w-[1128px] xs:px-4 sm:px-6 md:px-20 lg:px-44 xl:px-44 2xl:px-48 rounded-md flex  justify-center  items-center  w-full xs:border-none xs:my-0  text-neutralColor z-20 border border-primaryColor backdrop-blur-md">
        <div className=" w-full  flex sm:flex-col-reverse xs:flex-col-reverse  items-center justify-between rounded-md  text-neutralColor    z-20  border-primaryColor ">
          <div className="font-playfair font-semibold  tracking-tighter      text-[32px]     border-neutralColor border-b ">
            Meetup Info
          </div>

          <Image
            src="/assets/images/5thstreetalley.jpg"
            alt="5thstreet"
            width={200}
            height={200}
            className="max-h-[250px] rounded-md "
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
