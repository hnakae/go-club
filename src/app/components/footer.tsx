"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MeetupInfo from "./meetup-info";
import Container from "./container";

import { Post } from "@/interfaces/post";

export function Footer({ allPosts }: { allPosts: Post[] }) {
  const pathname = usePathname();

  

  const scrollToTop = () => {{
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }};

  return (
    <footer className="bg-darkNav text-white backdrop-blur-xl shadow-md">
      <div className="container mx-auto px-6 xl:px-12">
        <div className="py-12 flex flex-col md:flex-row items-start md:justify-start gap-8">
         
          {/* Navigate */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="font-bold text-xl font-montserrat tracking-tighter">Navigate</div>
            <Link
              className={`link font-montserrat tracking-tighter leading-tight ${
                pathname === "/" ? "text-primaryColor underline" : ""
              } hover:text-primaryColor transition-colors`}
              href="/"
              aria-label="Home"
              draggable={false}
            >
              Home
            </Link>
            <Link
              className={`link font-montserrat tracking-tighter leading-tight ${
                pathname === "/about" ? "text-primaryColor underline" : ""
              } hover:text-primaryColor transition-colors`}
              href="/about"
              aria-label="About"
              draggable={false}
            >
              About
            </Link>
            <Link
              className={`link font-montserrat tracking-tighter leading-tight ${
                pathname === "/contact" ? "text-primaryColor underline" : ""
              } hover:text-primaryColor transition-colors`}
              href="/contact"
              aria-label="Contact"
              draggable={false}
            >
              Contact
            </Link>
          </div>

          {/* Featured Posts */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="font-bold text-xl font-montserrat tracking-tighter">Featured Posts</div>
            {allPosts
              .filter(
                (post) =>
                  post.title === "The Surrounding Game" ||
                  post.title === "The Strength of Stones" ||
                  post.title === "Direction of Play"
              )
              .reverse()
              .map((post) => (
              <Link
                key={post.slug}
                href={`/posts/${post.slug}`}
                className={`link font-montserrat tracking-tighter leading-tight ${
                  pathname === `/posts/${post.slug}` ? "text-primaryColor underline" : ""
                } hover:text-primaryColor transition-colors`}
              >
                {post.title}
              </Link>
            ))}
          </div>

            {/* Contacts */}
          {/* <div className="flex flex-col items-center md:items-start gap-4">
            <div className="font-bold text-xl font-montserrat tracking-tighter">Contacts</div>
            <Link
              href="https://discord.com/channels/1164649557687275703/1164649557687275706"
              className="link font-montserrat tracking-tighter leading-tight hover:text-primaryColor transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discord
            </Link>
          </div> */}


        </div>

        <div className="py-6 flex flex-col sm:flex-row justify-between items-center border-t border-primaryColor/10">
          <div className="text-sm text-white/60 font-montserrat">
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
          </div>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-full hover:bg-primaryColor/10 transition-colors"
            aria-label="Scroll to top"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-up"
            >
              <path d="m5 12 7-7 7 7" />
              <path d="M12 19V5" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;