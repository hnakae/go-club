import React from "react";

const Header = () => {
  return (
    <div className="max-w-[1128px]  rounded-md flex my-4 justify-center items-center  w-full  text-neutralColor z-10 select-none">
      {/* <Quote /> */}
      <div className="backdrop-blur-md w-full py-10 flex-col flex items-center justify-center rounded-md  text-neutralColor  opacity-95  z-20 border border-primaryColor shadow-md">
        <div className="font-playfair font-semibold  tracking-tighter      text-[32px]     border-neutralColor border-b ">
          About
        </div>
      </div>
    </div>
  );
};

export default Header;
