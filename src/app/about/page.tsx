import Container from "@/app/_components/container";

import Header from "./header";
import Image from "next/image";
import Quote from "../contact/quote";
// import { QA } from "./faqs";

export default function About() {
  return (
    <main className=" ">
      <Container>
        <Header />

        {/* faq */}
        <section className="w-full flex justify-center items-start z-10 text-neutralColor mb-4">
          <div className=" max-w-[1128px]  px-14 py-10  flex-col flex items-start justify-start rounded-md  border border-primaryColor  shadow-md   backdrop-blur-md w-full  ">
            <p className="mb-3 text-xl ">FAQs</p>

            <p className="text-lg mb-3">Are beginners welcome?</p>
            <p className="mb-6">
              Beginners are absolutely welcome! Beginners can find similar level
              opponents, or play teaching games equalized with handicap stones.{" "}
            </p>

            <p className="text-lg mb-3">How can we get in contact?</p>
            <p className="mb-6">
              Discord is always up to date and will be the best place to reach
              either the host or any of the regulars who can help with any
              questions you may have. The Discord link is in the Contact Page.
            </p>

            {/* <div>Event Calendar coming soon</div> */}
            <div>
              Updated {new Date().getMonth() + 1}/{new Date().getDate()}/
              {new Date().getFullYear()}
            </div>
          </div>
        </section>
        {/* images */}
        <section className="flex items-center w-full max-w-[1128px] xs:hidden sm:hidden  md:hidden">
          <div className="h-full w-[350px] max-h-[320px] flex justify-center items-center border overflow-hidden border-primaryColor mr-4 mb-4 rounded-md">
            <Image
              src="/assets/images/5thstreetalley.jpg"
              width={300}
              height={400}
              alt="daniel"
              className="object-fill"
            />
          </div>
          <Quote />
        </section>
      </Container>
    </main>
  );
}
