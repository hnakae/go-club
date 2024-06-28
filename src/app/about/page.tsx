import Container from "@/app/_components/container";

import Header from "./header";
import Image from "next/image";
// import { QA } from "./faqs";

export default function About() {
  return (
    <main className=" ">
      <Container>
        <Header />{" "}
        <div className=" flex space-x-4 items-center max-w-[1128px]">
          <div className=" flex justify-center items-start z-10 text-neutralColor mb-4">
            <div className=" max-w-[1128px] overflow-hidden flex-col flex items-start justify-start rounded-md  border border-primaryColor  shadow-md   backdrop-blur-md w-full space-y-6 ">
              {" "}
              <Image
                src="/assets/images/daniel-edited.png"
                width={200}
                height={200}
                alt="daniel"
                className="z-20 mb-0 rounded-md border border-primaryColor bg-primaryColor/5 shadow-md" // Set margin-bottom to 0 to align properly
              />
            </div>
          </div>
          <div className="w-full flex justify-center items-start z-10 text-neutralColor mb-4">
            <div className=" max-w-[1128px]  px-14 py-10  flex-col flex items-start justify-start rounded-md  border border-primaryColor  shadow-md   backdrop-blur-md w-full space-y-6 ">
              {" "}
              <div className="max-w-[550px] flex justify-around items-center">
                <div className="flex flex-col">
                  {" "}
                  <p>
                    {" "}
                    "Look for the gobans and listen for the clacking of slate
                    and shell. We'll be on the west side near Magpie Coffee."
                  </p>
                  <p>-Daniel Takamori</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-start z-10 text-neutralColor mb-4">
          <div className=" max-w-[1128px]  px-14 py-10  flex-col flex items-start justify-start rounded-md  border border-primaryColor  shadow-md   backdrop-blur-md w-full space-y-6 ">
            <div>
              <p className="mb-6 text-xl underline">FAQs</p>

              <p>Are beginners welcome?</p>
              <p className="mb-6">
                We welcome everyone. Beginners can find similar level opponents,
                or play teaching games equalized with handicap stones.{" "}
              </p>

              <p>Who hosts these meetups?</p>
              <p className="mb-6">Daniel hosts the wednesday meetups.</p>

              <p>How strong are the members?</p>
              <p className="mb-6">
                We have a good mix of players, from double digit kyus to single
                digit kyus to dan level players. And we can equalize any level
                gaps with handicap stones if you'd like.
              </p>

              <p>Is there parking nearby?</p>
              <p className="mb-6">
                There is free parking right in front of the alley.
              </p>

              <p>Are there amenities nearby?</p>
              <p className="mb-6">
                There's a cafe, a boba-drink spot, an ice cream store, a food
                court across the street, and apparently key lime pie.
              </p>

              <p>How can we get in contact with the host?</p>
              <p className="mb-6">
                Discord is always up to date and will be the best place to reach
                either the host or any of the regulars who can help with any
                questions you may have. The Discord link is in the Contact Page.
              </p>
              {/* <p>...</p> */}
            </div>
            <div className="flex flex-col">
              <div className="text-xl">coming soon</div>
              <div>Event Calendar</div>
              <div>
                Updated {new Date().getMonth() + 1}/{new Date().getDate()}/
                {new Date().getFullYear()}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
