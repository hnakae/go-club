import Link from "next/link";
import React from "react";

const Button = () => {
  return (
    <Link
      href="/about"
      className="relative py-2 px-8 rounded-lg hover:bg-primaryColor/5  mt-8 xs:mt-4 border border-primaryColor shadow-faded-2px select-none "
    >
      <span className="absolute inset-0 rounded-lg shadow-inner-white"></span>
      <span className="relative z-10 font-montserrat ">Meetup Info</span>
    </Link>
  );
};

export default Button;
