import React from "react";

const Button = () => {
  return (
    <a
      href="https://www.meetup.com/eugene-go-players/events/"
      target="_blank"
      className="relative py-2 px-8 rounded-lg hover:animate-bounce  mt-8 xs:mt-4 border border-primaryColor shadow-faded-2px select-none "
    >
      <span className="absolute inset-0 rounded-lg shadow-inner-white"></span>
      <span className="relative z-10 font-montserrat ">RSVP</span>
    </a>
  );
};

export default Button;
