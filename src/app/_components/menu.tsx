import Link from "next/link";
import React from "react";

type NavbarProps = {
  // Define the type of handleClick explicitly
  handleClick: () => void;
};

const Menu = ({ handleClick }: NavbarProps) => {
  return (
    <div className="z-50 min-w-[70vw]  flex justify-around items-center fixed top-72 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90  rounded-lg backdrop-blur-md py-32">
      <nav className="flex items-center flex-col justify-center space-y-4">
        <Link href="/" onClick={handleClick} className="text-light">
          Home
        </Link>
        <Link href="/about" onClick={handleClick} className="text-light">
          About
        </Link>
        <Link href="/contact" onClick={handleClick} className="text-light">
          Contact
        </Link>
      </nav>

      <nav className="flex flex-col items-center justify-center flex-wrap mt-2">
        <div className="text-light/50 dark:text-dark/50">Follow us</div>
        <Link
          href="https://www.meetup.com/eugene-go-players/"
          className="text-light"
          target="_blank"
        >
          Meetup
        </Link>
        <div className="text-light/50 dark:text-dark/50 mt-8">Get in touch</div>
        <Link
          href="https://discord.com/channels/1164649557687275703/1164649557687275706"
          className="text-light"
          target="_blank"
        >
          Discord
        </Link>
        <div></div>
      </nav>
    </div>
  );
};

export default Menu;
