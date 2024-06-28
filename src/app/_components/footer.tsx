"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Quote from "../contact/quote";
import Grid from "./grid";
import Head from "next/head";
import Button from "./ui/cta-button";
import Location from "./svgs/location";
import Email from "./svgs/email";
import Call from "./svgs/call";
import MeetupInfo from "./meetup-info";
import Container from "./container";
// import UpArrow from "../../../public/svgs/up-arrow";
// import { EXAMPLE_PATH } from "@/lib/constants";

export function Footer() {
  const pathname = usePathname();
  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // };
  return (
    <Container>
      {/* <footer className="relative mb-4 w-full  font-normal text-sm text-white   sm:text-base  z-20  min-h-[80vh] flex flex-col justify-center items-center ">
        <MeetupInfo />
        
         <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        width="30"
        height="30"
        className="  hover:cursor-pointer z-10 "
        onClick={scrollToTop}
      >
        <g
          transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
          fill="#DAB16D"
          stroke="none"
        >
          <path
            d="M2320 4810 c-520 -65 -966 -274 -1329 -624 -361 -349 -584 -780 -668
-1291 -22 -136 -25 -504 -5 -635 81 -527 301 -963 664 -1316 260 -253 538
-421 882 -533 1132 -369 2363 212 2800 1322 111 281 163 586 153 897 -12 346
-87 643 -238 943 -328 650 -931 1094 -1654 1218 -137 23 -480 34 -605 19z
m485 -261 c369 -43 750 -208 1045 -454 320 -266 563 -661 661 -1071 70 -293
67 -651 -6 -944 -147 -585 -545 -1073 -1086 -1329 -278 -132 -548 -192 -859
-192 -326 0 -587 60 -875 201 -418 204 -726 512 -926 925 -140 290 -200 549
-201 870 -2 779 435 1476 1136 1810 358 171 711 230 1111 184z"
          />
          <path
            d="M2525 3066 c-16 -8 -220 -205 -452 -437 -437 -440 -446 -451 -427
-511 13 -42 44 -76 80 -88 75 -25 82 -20 371 273 148 150 312 317 365 372 l97
100 351 -357 c392 -399 389 -397 473 -360 64 29 95 107 66 165 -16 31 -808
825 -841 843 -33 17 -44 17 -83 0z"
          />
        </g>
      </svg>
       
      </footer> */}
      <div className="flex justify-center items-center  z-10 w-full   ">
        <div className="    py-10 mb-4 max-w-[1128px]  rounded-md flex  justify-center items-center  w-full xs:border-none xs:my-0  text-neutralColor z-20 border border-primaryColor backdrop-blur-md">
          <div className=" w-full px-10  flex sm:flex-col-reverse xs:flex-col-reverse items-center justify-around rounded-md  text-neutralColor    z-20  border-primaryColor ">
            <MeetupInfo />
            <div className="flex sm:flex-col md:flex-col lg:flex-col xl:flex-col 2xl:flex-col items-center gap-4 z-10">
              <div className="font-bold text-2xl xs:hidden">Browse</div>
              <Link
                className={`link ${
                  pathname === "/" ? "active" : ""
                } hover:text-primaryColor`}
                href="/"
                aria-label="Home"
              >
                Home
              </Link>

              <Link
                className={`link ${
                  pathname === "/about" ? "active" : ""
                } hover:text-primaryColor`}
                href="/about"
                aria-label="About"
              >
                Meetup Info
              </Link>
              <Link
                className={`link ${
                  pathname === "/contact" ? "active" : ""
                } hover:text-primaryColor`}
                href="/contact"
                aria-label="Contact"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="text-white  flex items-center justify-center py-4 px-12 w-full max-w-[1128px] ">
        <span className="z-10 opacity-60">
          {new Date().getFullYear()} &copy; All Rights Reserved.
        </span>
      </div>
    </Container>
  );
}

export default Footer;
