import React from "react";

const Header = () => {
  return (
    <div className="relative my-12 mx-6 flex items-center justify-center  sm:flex-col xs:flex-col sm:mt-0 xs:mt-0 xs:bg-[#DFF8B4] sm:mb-6  ">
      <div className="fixed z-0 top-0 h-full w-full text-[200px] font-sans font-bold text-gray-200 bg-[url(/assets/images/slatebg.png)]">
        {/* Eugene Go Club */}
      </div>

      <div className="max-w-[1128px] rounded-md flex  justify-center items-center  w-full  text-neutralColor z-10">
        {/* <Quote /> */}
        <div className="backdrop-blur-md w-full p-24 flex-col flex items-center justify-center rounded-md  text-neutralColor  opacity-95  z-20 border border-primaryColor shadow-md">
          <div className="font-playfair font-semibold  tracking-tighter      text-[32px]     border-neutralColor border-b ">
            Contacts
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
