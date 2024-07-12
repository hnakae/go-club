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
              *We will endeavor to post updates about meeting times/places in
              our Discord Server, and will also try to update the facebook page
              and meetup page, but the Discord will always be up to date and is
              the best place to get in contact with us
            </p>
          </div>
        </section>
        {/* faq */}
        <section className="w-full flex justify-center items-start z-10 text-neutralColor mb-4">
          <div className=" max-w-[1128px]  px-14 py-10  flex-col flex items-start justify-start rounded-md  border border-primaryColor  shadow-md   backdrop-blur-md w-full  ">
            <p className="mb-3 text-xl ">FAQs</p>
            <br />
            <p className="text-lg mb-3">Are beginners welcome?</p>
            <p className="mb-6">
              Beginners are absolutely welcome! Beginners can find similar level
              opponents, or play teaching games equalized with handicap stones.{" "}
            </p>

            <p className="text-lg mb-3">How can we get in contact?</p>
            <p className="mb-6">
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
        <section className="flex items-center w-full max-w-[1128px]  mb-4">
          <Quote />
        </section>
        {/* <section className="w-full  flex justify-center mb-4">
          <MyCalendar />
        </section> */}
      </Container>
    </main>
  );
}
