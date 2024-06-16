import React from "react";

const Header = () => {
  return (
    <div className="relative   px-24 flex items-center justify-center  sm:flex-col xs:flex-col sm:mt-0 xs:mt-0 xs:bg-[#DFF8B4] sm:mb-6  bg-[#F5F5F7]">
      <div className="p-4 rounded-md flex flex-col justify-around w-full text-[#1D1D1F] max-w-[1128px] ">
        <div className="py-12 px-6    flex-col flex items-center justify-center rounded-md  text-center   z-20">
          {/* <div className="text-lg font-montserrat  ">Meetup Info</div> */}
          <div className="font-playfair text-4xl mb-4"> Contact</div>
          <div className="font-montserrat text-xl mb-4">
            From 5:30 pm - 9:00 pm.
          </div>
          <div className="font-montserrat text-xl ">
            {" "}
            @ 5th Street Alley near{" "}
            <a
              href="https://www.google.com/maps/place/Magpie+Coffeeshop/@44.0534091,-123.0906905,17z/data=!3m1!4b1!4m6!3m5!1s0x54c11f944e770925:0x5d79ed248cc805f2!8m2!3d44.0534091!4d-123.0906905!16s%2Fg%2F11rc73f_8q?entry=ttu"
              className="underline "
              target="_blank"
            >
              Magpie Coffee
            </a>
          </div>
          <a
            href="https://www.meetup.com/eugene-go-players/events/"
            target="_blank"
            className="py-2 px-4 rounded-full w-[100px] mt-6 border-2 text-white bg-[#0071E3]"
          >
            RSVP
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
