"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Quote from "../contact/quote";
import Grid from "./grid";
import Head from "next/head";
// import UpArrow from "../../../public/svgs/up-arrow";
// import { EXAMPLE_PATH } from "@/lib/constants";

export function Footer() {
  const pathname = usePathname();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="relative  w-full      font-normal text-sm text-white   sm:text-base  ">
      <Head>
        {/* Preload images and SVGs */}
        <link rel="preload" href="/icons/location.png" as="image" />
        <link rel="preload" href="/icons/email.png" as="image" />
        <link rel="preload" href="/icons/call.png" as="image" />
        <link rel="preload" href="/svgs/up-arrow.svg" as="image" />
      </Head>
      <div className="flex flex-col justify-around h-screen max-w-[1128px] mx-auto">
        {/* <Quote /> */}
        {/* <UpArrow /> */}
        <div className="absolute bottom-1/4  text-[140px] font-sans font-bold text-gray-300 z-0 "></div>
        <div className="flex justify-around items-start  py-12 ">
          <div className="flex flex-col gap-4">
            <div className=" px-5   flex-col flex items-center justify-center rounded-md  text-center z-10  ">
              {/* <div className="text-lg font-montserrat  ">Meetup Info</div> */}
              <div className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl font-playfair">
                {" "}
                Wednesday Meetups
              </div>
              <div className="font-montserrat text-xl my-4">
                From 5:30 pm - 9:00 pm.
              </div>
              <div className="font-montserrat text-xl font-semibold">
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
                className="relative py-2 px-8 rounded-lg  mt-8 border border-primaryColor  shadow-faded-2px hover:-translate-y-1 "
              >
                <span className="absolute inset-0 rounded-lg shadow-inner-white"></span>
                <span className="relative z-10 font-montserrat">RSVP</span>
              </a>
              {/* <div className=" mt-12 p-4 rounded-md   bg-[#3a506b]">Primary</div>
          <div className=" mt-12 p-4 rounded-md   bg-[#5bc0be]">Secondary</div>
          <div className=" mt-12 p-4 rounded-md   bg-[#f25f5c]">Accent</div>
          <div className=" mt-12 p-4 rounded-md   bg-[#ff7f11]">Brand</div>
          <div className=" mt-12 p-4 rounded-md border-2 border-[#cccccc]  bg-[#ffffff]">
            <div className="text-[#4a4a4a]">Card</div>
          </div> */}
            </div>
            <div className="flex  gap-5">
              {/* <LinkedInIcon className="lg:w-[30px]" />
              <DribbbleIcon className="lg:w-[30px]" />
              <PinterestIcon className="lg:w-[30px]" />
              <GithubIcon className="lg:w-[30px]" /> */}
            </div>
          </div>
          <div className="flex flex-col gap-4 z-10">
            <div className="font-bold text-2xl">Browse</div>

            <Link
              className={`link ${pathname === "/" ? "active" : ""}`}
              href="/"
              aria-label="Home"
            >
              Home
            </Link>
            <Link
              className={`link ${pathname === "/how-to-play" ? "active" : ""}`}
              href="/"
              aria-label="How-to-Play"
            >
              How to Play
            </Link>
            <Link
              className={`link ${pathname === "/articles" ? "active" : ""}`}
              href="/"
              aria-label="Articles"
            >
              Articles
            </Link>
            <Link
              className={`link ${pathname === "/faqs" ? "active" : ""}`}
              href="/faqs"
              aria-label="FAQs"
            >
              FAQs
            </Link>
            <Link
              className={`link ${pathname === "/events" ? "active" : ""}`}
              href="/events"
              aria-label="Events"
            >
              Events
            </Link>
          </div>
          <div className="flex flex-col gap-4 z-10">
            <div className="font-bold text-2xl">Activities</div>
            <div>Play Games</div>
            <div>Study Pro Games</div>
            <div>Solve Puzzles</div>
            <div>Discuss Strategy</div>
            <div>Tournaments</div>
          </div>
          <div className="flex flex-col gap-4 z-10">
            <div className="font-bold text-2xl relative">
              <div>Contact</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="30"
                height="30"
                className="absolute top-0 right-0 hover:cursor-pointer"
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
            </div>
            <div className="flex ">
              <Image
                src="/icons/location.png"
                alt="icon"
                width={20}
                height={20}
                className="mr-1"
              />
              Hogwarts Castle, Narnia
            </div>
            <div className="flex">
              <Image
                src="/icons/email.png"
                alt="icon"
                width={20}
                height={20}
                className="mr-1"
              />
              yourmom@myhouse.com
            </div>
            <div className="flex">
              <Image
                src="/icons/call.png"
                alt="icon"
                width={20}
                height={20}
                className="mr-1"
              />
              541-123-4567
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 flex items-center justify-between py-4 px-12 w-full max-w-[1128px] ">
          {/* <Logo /> */}
          <span className="z-10">
            {new Date().getFullYear()} &copy; All Rights Reserved.
          </span>
          <div className="flex items-center lg:py-2 z-10">
            Built With
            <span className="text-brand text-2xl px-1 dark:text-primaryDark">
              &#9825;
            </span>
            by&nbsp; Hiro Nakae
          </div>
        </div>
        {/* <Grid /> */}
      </div>
    </footer>
  );
}

export default Footer;
