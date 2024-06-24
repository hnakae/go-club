import Link from "next/link";
import React from "react";

const Menu = () => {
  return (
    <div className="z-50 min-w-[70vw]  flex justify-around items-center fixed top-72 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90  rounded-lg backdrop-blur-md py-32">
      <nav className="flex items-center flex-col justify-center space-y-4">
        <Link href="/" className="text-light">
          Home
        </Link>
        <Link href="/dashboard" className="text-light">
          About
        </Link>
        <Link href="/guides" className="text-light">
          Contact
        </Link>
      </nav>

      <nav className="flex flex-col items-center justify-center flex-wrap mt-2">
        {/* <button
      onClick={() => setMode(mode === "light" ? "dark" : "light")}
      className={`w-6 sm:mx-1 ml-3 flex items-center justify-center rounded-full p-1 mb-8
${mode === "dark" ? "bg-dark text-light" : "bg-light text-dark"}`}
    >
      {mode === "dark" ? (
        <SunIcon className={"fill-dark"} />
      ) : (
        <MoonIcon className={"fill-dark"} />
      )}
    </button> */}
        <div className="text-light/50 dark:text-dark/50">Follow us</div>
        <Link href="/" className="text-light">
          Meetup
        </Link>
        <div className="text-light/50 dark:text-dark/50 mt-8">Get in touch</div>
        <Link href="/" className="text-light">
          Discord
        </Link>
        <div></div>
      </nav>
    </div>
  );
};

export default Menu;
