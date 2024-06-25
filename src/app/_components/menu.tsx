import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type NavbarProps = {
  // Define the type of handleClick explicitly
  closeMenu: () => void;
};

const Menu = ({ closeMenu }: NavbarProps) => {
  const pathname = usePathname();
  return (
    <div className="z-50  transition-all duration-300 linear  bg-darkNav	shadow-md min-w-[70vw] max-w-[767px] w-screen flex justify-around items-center fixed top-[120px] left-1/2 -translate-x-1/2 -translate-y-1/2   rounded-lg backdrop-blur-3xl py-6">
      <nav className="flex flex-col items-center justify-center flex-wrap  mt-2">
        {/* <div className="text-light/50 dark:text-dark/50"></div>
        <Link
          href="https://www.meetup.com/eugene-go-players/"
          className="text-light"
          target="_blank"
        >
          Meetup
        </Link> */}
        <div className="text-light/50 dark:text-dark/50 ">Get in touch</div>
        <Link
          href="https://discord.com/channels/1164649557687275703/1164649557687275706"
          className="text-light"
          target="_blank"
        >
          Discord
        </Link>
      </nav>
      <nav className="flex items-center flex-col justify-center space-y-4 ">
        <Link
          className={`link ${
            pathname === "/" ? "active" : ""
          } hover:text-primaryColor font-montserrat tracking-tighter text-light leading-tight `}
          href="/"
          aria-label="Home"
          onClick={closeMenu}
        >
          Home
        </Link>
        <Link
          className={`link ${
            pathname === "/about" ? "active" : ""
          } hover:text-primaryColor font-montserrat tracking-tighter text-light leading-tight `}
          href="/about"
          aria-label="About"
          onClick={closeMenu}
        >
          About
        </Link>
        <Link
          className={`link ${
            pathname === "/contact" ? "active" : ""
          } hover:text-primaryColor font-montserrat tracking-tighter text-light leading-tight `}
          href="/contact"
          aria-label="Contact"
          onClick={closeMenu}
        >
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default Menu;
