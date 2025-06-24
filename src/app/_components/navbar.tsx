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

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)"); // md size

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        closeMenu();
      }
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <>
      <section
        className={`z-50  transition-all duration-300 linear backdrop-blur-xl  bg-darkNav	shadow-md sticky top-0 left-0 flex justify-center items-center  py-2 w-full mx-0 px-6  select-none`}
      >
        <div className="w-full  flex justify-between items-center">
          <Link
            href="/"
            className="font-montserrat  text-white hover:text-primaryColor text-nowrap	 rounded-md text-3xl  font-bold tracking-tighter leading-tight flex items-center "
            draggable={false}
          >
            Eugene Go Club
          </Link>
          <nav aria-label="primary menu">
            <ul className=" text-white flex space-x-2  items-center  xs:hidden sm:hidden  ">
              <li
                className="cursor-pointer rounded-md    "
                aria-current="page"
              >
                <Link
                  className={`link px-4 py-2 block ${
                    pathname === "/" ? "active" : ""
                  } hover:text-primaryColor font-montserrat tracking-tighter leading-tight `}
                  href="/"
                  aria-label="Home"
                  draggable={false}
                >
                  Home
                </Link>
              </li>
              <li
                className="cursor-pointer rounded-md    "
                aria-current="page"
              >
                <Link
                  className={`link  px-4 py-2 block ${
                    pathname === "/about" ? "active" : ""
                  } hover:text-primaryColor  font-montserrat tracking-tighter leading-tight`}
                  href="/about"
                  aria-label="About"
                  draggable={false}
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
              <li className="cursor-pointer rounded-md  ">
                <Link
                  className={`link  px-4 py-2 block ${
                    pathname === "/contact" ? "active" : ""
                  } hover:text-primaryColor  font-montserrat tracking-tighter leading-tight`}
                  href="/contact"
                  aria-label="contact"
                  draggable={false}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <button
            className="flex-col justify-center items-center  md:hidden  lg:hidden xl:hidden 2xl:hidden "
            onClick={handleClick}
          >
            <span
              className={`bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
              }`}
            ></span>
            <span
              className={`bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
              }`}
            ></span>
          </button>
        </div>
      </section>
      {isOpen ? <Menu closeMenu={closeMenu} /> : null}
    </>
  );
}
