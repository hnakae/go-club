"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Menu from "./menu";
// import { NavLink } from "react-router-dom";
import { usePathname } from "next/navigation";

// flex flex-col w-[1000px] my-0 mx-auto
// bg-[#ffffff40]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  // const [scrollDirection, setScrollDirection] = useState("up");
  const pathname = usePathname();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // useEffect(() => {
  //   let lastScrollY = window.pageYOffset;
  //   const handleScroll = () => {
  //     const currentScrollY = window.pageYOffset;

  //     if (currentScrollY > lastScrollY + 10) {
  //       // Scrolling down, hide navbar
  //       setScrollDirection("down");
  //     } else if (currentScrollY < lastScrollY - 10) {
  //       // Scrolling up, show navbar
  //       setScrollDirection("up");
  //     }

  //     lastScrollY = currentScrollY > 0 ? currentScrollY : 0;
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  // ${
  //   scrollDirection === "down"
  //     ? "-translate-y-full z-0"
  //     : "translate-y-0 z-0"
  // }

  return (
    <>
      {/**/}
      <section
        className={` z-50  transition-all duration-300 linear backdrop-blur-xl  bg-darkNav	shadow-md sticky top-0 flex justify-center items-center  py-2 w-full mx-0 px-6  select-none`}
      >
        <div className="w-full  flex justify-between items-center">
          <Link
            href="/"
            className="font-montserrat  text-white text-nowrap	 rounded-md text-3xl  font-bold tracking-tighter leading-tight flex items-center "
          >
            Eugene Go Club
          </Link>
          <nav aria-label="primary menu">
            <ul className=" text-white flex space-x-2  items-center   xs:hidden sm:hidden ">
              <li
                className="cursor-pointer rounded-md  px-4 py-2  "
                aria-current="page"
              >
                <Link
                  className={`link ${
                    pathname === "/" ? "active" : ""
                  } hover:text-primaryColor font-montserrat tracking-tighter leading-tight `}
                  href="/"
                  aria-label="Home"
                >
                  Home
                </Link>
              </li>
              <li
                className="cursor-pointer rounded-md  px-4 py-2  "
                aria-current="page"
              >
                <Link
                  className={`link ${
                    pathname === "/about" ? "active" : ""
                  } hover:text-primaryColor  font-montserrat tracking-tighter leading-tight`}
                  href="/about"
                  aria-label="About"
                >
                  About
                </Link>
              </li>
              {/* <li className="cursor-pointer rounded-md  px-4 py-2">
                <Link
                  className={`link ${
                    pathname === "/faqs" ? "active" : ""
                  } hover:text-primaryColor  font-montserrat tracking-tighter leading-tight`}
                  href="/faqs"
                  aria-label="FAQs"
                >
                  FAQs
                </Link>
              </li> */}
              <li className="cursor-pointer rounded-md  px-4 py-2">
                <Link
                  className={`link ${
                    pathname === "/contact" ? "active" : ""
                  } hover:text-primaryColor  font-montserrat tracking-tighter leading-tight`}
                  href="/contact"
                  aria-label="contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <button
            className="flex-col justify-center items-center md:hidden  lg:hidden xl:hidden 2xl:hidden "
            onClick={handleClick}
          >
            <span
              className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
              }`}
            ></span>
            <span
              className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
              }`}
            ></span>
          </button>
        </div>
      </section>
      {isOpen ? <Menu /> : null}
    </>
  );
}
