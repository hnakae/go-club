import Container from "@/app/_components/container";
import Image from "next/image";
import Link from "next/link";
// import { EXAMPLE_PATH } from "@/lib/constants";

export function Footer() {
  return (
    // #A69EF5", to: "#DCC9FE" bg-gradient-to-tr from-[#A69EF5] to-[#DCC9FE]
    // <footer className="select-none max-w-screen mx-0 bg-slate-600 flex justify-center px-6">
    //   {/* <Container> */}
    //   {/* <div className="w-full max-w-[1000px] flex justify-between items-center "> */}
    //   <div className="w-full max-w-[1000px] py-28 flex flex-col items-start text-white ">
    //     <h3 className="font-playfair text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2 ">
    //       Eugene Go Club
    //     </h3>

    //     <h1 className="font-montserrat">
    //       Eugene Go Club is a free weekly club for go enthusiasts.
    //     </h1>

    //     <div className="socials flex pt-4  space-x-4">
    //       <ul className="font-montserrat text-white  flex space-x-2  items-center tracking-tighter leading-tight xs:hidden  ">
    //         <li className="cursor-pointer rounded-md  px-4 py-2">
    //           <Link href="/faqs">FAQs</Link>
    //         </li>
    //         <li className="cursor-pointer rounded-md  px-4 py-2">
    //           <Link href="/events">Events</Link>
    //         </li>
    //       </ul>
    //       <Link
    //         href="/https://www.facebook.com/groups/EugeneGoClub"
    //         target="_blank"
    //       >
    //         <Image
    //           src="/icons/facebook.png"
    //           alt="facebook icon"
    //           width={25}
    //           height={25}
    //         />
    //       </Link>
    //       <Link
    //         href="https://discord.com/channels/1164649557687275703/1174766988787208345"
    //         target="_blank"
    //       >
    //         <Image
    //           src="/icons/discord.png"
    //           alt="facebook icon"
    //           width={25}
    //           height={25}
    //         />
    //       </Link>{" "}
    //       <Link
    //         href="/https://www.meetup.com/eugene-go-players/"
    //         target="_blank"
    //       >
    //         <Image
    //           src="/icons/meetup.png"
    //           alt="facebook icon"
    //           width={25}
    //           height={25}
    //         />
    //       </Link>{" "}
    //       <Link href="/https://online-go.com/group/6435" target="_blank">
    //         <Image
    //           className="rounded-full"
    //           src="/icons/ogs-icon.png"
    //           alt="facebook icon"
    //           width={25}
    //           height={25}
    //         />
    //       </Link>
    //     </div>
    //   </div>
    //   {/* </Container> */}
    // </footer>
    <footer className=" w-full px-12 font-normal text-sm text-black bg-light sm:text-base  ">
      <div className="h-[455px]  w-full ">
        <div className="flex justify-around p-12">
          <div className="flex flex-col gap-4">
            <div className="font-bold text-2xl">Eugene Go Club</div>
            <div className="mb-24">USA, Eugene Oregon</div>
            <div className="flex  gap-5">
              {/* <LinkedInIcon className="lg:w-[30px]" />
              <DribbbleIcon className="lg:w-[30px]" />
              <PinterestIcon className="lg:w-[30px]" />
              <GithubIcon className="lg:w-[30px]" /> */}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="font-bold text-2xl">Company</div>
            <div>Works</div>
            <div>Services</div>
            <div>Industries</div>
            <div>About</div>
            <div>Blog</div>
            <div>Contact Us</div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="font-bold text-2xl">Services</div>
            <div>Product Strategy</div>
            <div>Business Analysis</div>
            <div>UX Audit</div>
            <div>UI/UX Design</div>
            <div>Web Design</div>
            <div>Brand identity</div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="font-bold text-2xl">Solutions</div>
            <div>For Business</div>
            <div>For Startups</div>
          </div>
        </div>
      </div>
      <div className=" flex items-center justify-between py-4 px-12  ">
        {/* <Logo /> */}
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center lg:py-2">
          Built With
          <span className="text-brand text-2xl px-1 dark:text-primaryDark">
            &#9825;
          </span>
          by&nbsp;
          <Link
            href="/"
            target={"_blank"}
            className="underline underline-offset-2 "
          >
            Hiro Nakae
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
