"use client";
import Link from "next/link";
import { useState } from "react";
import Menu from "./menu";

// flex flex-col w-[1000px] my-0 mx-auto

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {" "}
      <section
        className=" flex fixed bg-[#ffffff40] justify-around items-center  h-auto py-2 w-full my-0 px-28 shadow-md text-white"
        style={{ backdropFilter: "blur(10px)" }}
      >
        <div className="text-3xl  font-bold tracking-tighter leading-tight flex items-center">
          <Link
            href="/"
            className="hover:underline text-nowrap	 rounded-md hover:bg-slate-200 px-4 py-2  decoration-yellow-300"
          >
            Eugene Go Club
          </Link>
        </div>
        <ul className="flex space-x-2 px-8 items-center tracking-tighter leading-tight ">
          {/* <li className="cursor-pointer hover:underline rounded-md hover:bg-slate-200 px-4 py-2">
          <Link href="/contact">Contact</Link>
        </li> */}
          <li className="cursor-pointer hover:underline rounded-md hover:bg-slate-200 px-4 py-2">
            <Link href="https://discord.gg/qVCqJYyVUX" target="_blank">
              Discord
            </Link>
          </li>
          <li className="cursor-pointer hover:underline rounded-md hover:bg-slate-200 px-4 py-2">
            <Link
              href="https://www.meetup.com/eugene-go-players/events"
              target="_blank"
            >
              Meetup
            </Link>
          </li>
          <li className="cursor-pointer hover:underline rounded-md hover:bg-slate-200 px-4 py-2">
            <Link href="/faqs">FAQs</Link>
          </li>
          <li className="cursor-pointer hover:underline rounded-md hover:bg-slate-200 px-4 py-2">
            <Link href="/events">Events</Link>
          </li>
        </ul>
        <button
          className="flex-col justify-center items-center   "
          onClick={handleClick}
        >
          <span
            className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
            }`}
          ></span>
          <span
            className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
            }`}
          ></span>
        </button>
      </section>
      {isOpen ? <Menu /> : null}
    </>
  );
}
