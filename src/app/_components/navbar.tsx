import { CMS_NAME } from "@/lib/constants";
import Link from "next/link";

// flex flex-col w-[1000px] my-0 mx-auto

export function Navbar() {
  return (
    <section
      className=" flex fixed bg-[#ffffff40] justify-around  h-auto py-2 w-screen my-0 px-16 shadow-md rounded-md"
      style={{ backdropFilter: "blur(10px)" }}
    >
      <h1 className="text-5xl  font-bold tracking-tighter leading-tight flex items-center">
        <Link
          href="/"
          className="hover:underline rounded-md hover:bg-slate-200 px-4 py-2 underline decoration-yellow-300"
        >
          Eugene Go Club
        </Link>
      </h1>
      <ul className="flex space-x-4 px-8 items-center text-xl tracking-tighter leading-tight">
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
    </section>
  );
}
