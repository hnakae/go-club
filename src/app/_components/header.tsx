import Link from "next/link";

const Header = () => {
  return (
    <section className=" flex  justify-around h-24 bg-slate-200 w-full">
      {" "}
      <h1 className="text-5xl  font-bold tracking-tighter leading-tight flex items-center">
        <Link
          href="/"
          className="hover:underline rounded-md hover:bg-slate-200 px-4 py-2 "
        >
          Blog
        </Link>
      </h1>
      <ul className="flex space-x-4 px-8 items-center text-xl">
        <li className="cursor-pointer hover:underline rounded-md hover:bg-slate-200 px-4 py-2">
          Mailing List
        </li>
        <li className="cursor-pointer hover:underline rounded-md hover:bg-slate-200 px-4 py-2">
          Discord
        </li>
        <li className="cursor-pointer hover:underline rounded-md hover:bg-slate-200 px-4 py-2">
          Meetup
        </li>
        <li className="cursor-pointer hover:underline rounded-md hover:bg-slate-200 px-4 py-2">
          FAQs
        </li>
        <li className="cursor-pointer hover:underline rounded-md hover:bg-slate-200 px-4 py-2">
          Events
        </li>
      </ul>
    </section>
  );
};

export default Header;
