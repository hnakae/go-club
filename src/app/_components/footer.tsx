"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Quote from "../contact/quote";
import Grid from "./grid";
// import { EXAMPLE_PATH } from "@/lib/constants";

export function Footer() {
  const pathname = usePathname();
  return (
    <footer className="relative  w-full      font-normal text-sm text-white   sm:text-base  ">
      <div className="flex flex-col justify-around h-screen max-w-[1128px] mx-auto">
        {/* <Quote /> */}

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
            <div className="font-bold text-2xl">Contact</div>
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
