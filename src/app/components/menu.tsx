"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type NavbarProps = {
  closeMenu: () => void;
  show: boolean;
};

const Menu = ({ closeMenu, show }: NavbarProps) => {
  const pathname = usePathname();

  return (
    <div
      className={`
        fixed top-0 left-0 w-full h-full bg-[#141E26] text-neutralColor
        flex flex-col pt-0
        
        ${show ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        z-40
      `}
    >
      
      <nav className="flex flex-col items-start gap-12 px-6 pt-[120px] w-full">
        <Link
          className={`text-lg font-montserrat tracking-tight hover:text-primaryColor transition-colors duration-300 pl-6 ${
            pathname === "/" ? "text-primaryColor" : ""
          }`}
          href="/"
          onClick={closeMenu}
          draggable={false}
        >
          Home
        </Link>
        <Link
          className={`text-lg font-montserrat tracking-tight hover:text-primaryColor transition-colors duration-300 pl-6 ${
            pathname === "/about" ? "text-primaryColor" : ""
          }`}
          href="/about"
          onClick={closeMenu}
          draggable={false}
        >
          About
        </Link>
        <Link
          className={`text-lg font-montserrat tracking-tight hover:text-primaryColor transition-colors duration-300 pl-6 ${
            pathname === "/contact" ? "text-primaryColor" : ""
          }`}
          href="/contact"
          onClick={closeMenu}
          draggable={false}
        >
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default Menu;
