// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import React from "react";

// type NavbarProps = {
//   // Define the type of handleClick explicitly
//   closeMenu: () => void;
// };

// const Menu = ({ closeMenu }: NavbarProps) => {
//   const pathname = usePathname();
//   return (
//     <div className="z-50  transition-all duration-300 linear  bg-darkNav	shadow-md min-w-[70vw] max-w-[767px] w-screen flex justify-around items-center fixed top-[120px] left-1/2 -translate-x-1/2 -translate-y-1/2   rounded-lg backdrop-blur-3xl py-6">
//       <nav className="flex flex-col items-center justify-center flex-wrap  mt-2">
//         {/* <div className="text-light/50 dark:text-dark/50"></div>
//         <Link
//           href="https://www.meetup.com/eugene-go-players/"
//           className="text-light"
//           target="_blank"
//         >
//           Meetup
//         </Link> */}
//         <div className="">Get in touch</div>
//         <Link
//           href="https://discord.com/channels/1164649557687275703/1164649557687275706"
//           className="text-blue-500 underline flex "
//           target="_blank"
//         >
//           Discord
//         </Link>
//         <div>contact@eugenego.club</div>
//       </nav>
//       <nav className="flex items-center flex-col justify-center space-y-4 ">
//         <Link
//           className={`link ${
//             pathname === "/" ? "active" : ""
//           } hover:text-primaryColor font-montserrat tracking-tighter text-light leading-tight `}
//           href="/"
//           aria-label="Home"
//           onClick={closeMenu}
//         >
//           Home
//         </Link>
//         <Link
//           className={`link ${
//             pathname === "/about" ? "active" : ""
//           } hover:text-primaryColor font-montserrat tracking-tighter text-light leading-tight `}
//           href="/about"
//           aria-label="About"
//           onClick={closeMenu}
//         >
//           Meetup Info
//         </Link>
//         <Link
//           className={`link ${
//             pathname === "/contact" ? "active" : ""
//           } hover:text-primaryColor font-montserrat tracking-tighter text-light leading-tight `}
//           href="/contact"
//           aria-label="Contact"
//           onClick={closeMenu}
//         >
//           Contact
//         </Link>
//       </nav>
//     </div>
//   );
// };

// export default Menu;
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
        fixed
 left-1/2 -translate-x-1/2 z-50
        w-screen max-w-[767px] min-w-[70vw] px-6 py-6
        bg-darkNav text-white rounded-xl shadow-lg backdrop-blur-2xl

        transition-all duration-300 ease-in-out
        ${show
          ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
          : "opacity-0 scale-95 -translate-y-4 pointer-events-none"}
      `}
    >
      <div className="flex flex-col sm:flex-row justify-around items-center gap-6">
        {/* <nav className="flex flex-col items-start">
          <div className="text-sm text-light/80">Get in touch</div>
          <Link
            href="https://discord.com/channels/1164649557687275703/1164649557687275706"
            className="text-blue-400 underline text-sm"
            target="_blank"
          >
            Discord
          </Link>
          <div className="text-xs mt-1 text-light/60">
            contact@eugenego.club
          </div>
        </nav> */}

        <nav className="flex flex-col items-center gap-3">
          <Link
            className={`font-montserrat tracking-tight p-2 hover:outline text-light hover:text-primaryColor transition ${
              pathname === "/" ? "text-primaryColor underline" : ""
            }`}
            href="/"
            onClick={closeMenu}
            draggable={false}
          >
            Home
          </Link>
          <Link
            className={`font-montserrat tracking-tight text-light p-2 hover:outline hover:text-primaryColor transition ${
              pathname === "/about" ? "text-primaryColor underline" : ""
            }`}
            href="/about"
            onClick={closeMenu}
            draggable={false}
          >
            About
          </Link>
          <Link
            className={`font-montserrat tracking-tight text-light p-2 hover:outline hover:text-primaryColor transition ${
              pathname === "/contact" ? "text-primaryColor underline" : ""
            }`}
            href="/contact"
            onClick={closeMenu}
            draggable={false}
          >
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
