import Container from "@/app/_components/container";

import Header from "./header";
import Image from "next/image";
import Quote from "../contact/quote";
import MyCalendar from "../_components/calendar/MyCalendar";

// import dynamic from "next/dynamic";

// const MyCalendar = dynamic(() => import("../_components/calendar/MyCalendar"), {
//   ssr: false,
// });
// import { QA } from "./faqs";

export default function About() {
  return (
    <main className=" ">
      <Container>
        <Header />
        {/* <section className="flex sm:flex-col justify-between items-center mb-4  w-full max-w-[1128px]   rounded-md ">
          <Image
            src="/assets/images/5thstreetalley.jpg"
            width={247}
            height={300}
            alt="daniel"
            className="z-20  rounded-md border border-primaryColor backdrop-blur-md bg-primaryColor/20 shadow-md mr-4 "
          />
          <div className=" border border-primaryColor w-full min-w-[310px] backdrop-blur-md text-white rounded-md h-full flex flex-col justify-center items-center px-4 py-10 overflow-hidden">
            <p className="font-montserrat tracking-tighter  mb-4 max-w-[400px] px-12 text-xl">
              Look for the gobans and listen for the clacking of slate and
              shell. We'll be on the west side near Magpie Coffee.
            </p>
            <div className="font-montserrat text-lg font-bold flex items-start w-full px-12 max-w-[400px]">
              <p className="opacity-80">Daniel Takamori</p>
              <Image
                src="/icons/w-quote.png"
                alt="icon"
                width={30}
                height={30}
                className="ml-3 rotate-180 -translate-y-3 translate-x-16"
              />
            </div>
          </div>
        </section> */}

        {/* about */}
        <section className="w-full flex justify-center items-start z-10 text-neutralColor mb-4">
          <div className=" max-w-[1128px]  px-14 py-10  flex-col flex items-start justify-start rounded-md  border border-primaryColor  shadow-md   backdrop-blur-md w-full  ">
            <p className="mb-3 text-xl ">About us</p>
            <br />
            {/* <p className="text-lg mb-3">Are beginners welcome?</p> */}
            <p className="mb-6">
              Open to players of all skill levels and complete beginners who
              want to learn! (Feel free to bring a board if you have one!)
            </p>
            <p className="mb-6">
              We will endeavor to post updates about meeting times/places in our
              Discord server, and will also try to update the Facebook page and
              Meetup page, but the Discord will always be up to date and is the
              best place to get in contact with us.
            </p>
          </div>
        </section>

        {/* faq */}
        <section className="w-full flex justify-center items-start z-10 text-neutralColor mb-4">
          <div className=" max-w-[1128px]  px-14 py-10  flex-col flex items-start justify-start rounded-md  border border-primaryColor  shadow-md   backdrop-blur-md w-full  ">
            {/* <p className="mb-3 text-xl ">FAQs</p>
            <br /> */}
            <div className="font-playfair  py-6 h-fit  text-[24px] flex flex-col items-center justify-center border-b-2 ">
              Q: What is Go?
            </div>
            <div className="font-lora  py-6 h-fit    flex flex-col items-center justify-center mb-6 text-[18px]">
              Hmm. In Go, players place stones on a grid, and the goal is to
              surround territory. The key rules involve capturing stones by
              surrounding them, ensuring liberties (empty adjacent points), and
              preventing suicide moves. Ko rule is also important to prevent
              infinite loops.
            </div>
            <p className="font-playfair  py-6 h-fit  text-[24px] flex flex-col items-center justify-center border-b-2">
              Q: Are beginners welcome?
            </p>
            <p className="font-lora  py-6 h-fit    flex flex-col items-center justify-center mb-6 text-[18px]">
              Beginners are absolutely welcome! Beginners can find similar level
              opponents, or play teaching games equalized with handicap stones.{" "}
            </p>

            <p className="font-playfair  py-6 h-fit  text-[24px] flex flex-col items-center justify-center border-b-2">
              Q: How can we get in contact?
            </p>
            <p className="font-lora  py-6 h-fit    flex flex-col items-center justify-center mb-6 text-[18px]">
              Discord is always up to date and will be the best place to reach
              someone who can help with any questions. The Discord link is in
              the Contact Page.
            </p>

            {/* <div>Event Calendar coming soon</div> */}
            <div>
              Updated {new Date().getMonth() + 1}/{new Date().getDate()}/
              {new Date().getFullYear()}
            </div>
          </div>
        </section>
        {/* images */}
        {/* images */}
        {/* images */}
        {/* images */}
        <section className="w-full flex justify-center mb-4">
          <div className="w-full max-w-[1128px] ">
            <Quote />
          </div>
        </section>
        {/* <section className="w-full  flex justify-center mb-4">
          <MyCalendar />
        </section> */}
      </Container>
    </main>
  );
}
