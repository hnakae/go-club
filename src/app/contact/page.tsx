"use client";
import Container from "@/app/components/container";
// import { Events } from "@/app/components/events";
import JoinCommunity from "./join-community";
import Header from "./header";
import Link from "next/link";
import Image from "next/image";

export default function Contact() {
  return (
    <main className="select-none">
      <Container>
        <Header />
        <div className="w-full flex justify-center items-start z-10 mb-4 text-neutralColor ">
          <div className="text-neutralColor max-w-[1128px]  px-14 py-10 justify-around flex items-center rounded-md  border border-primaryColor  shadow-md   backdrop-blur-md w-full ">
            <ul>
              <Link
                href="https://discord.com/channels/1164649557687275703/1164649557687275706"
                className="hover:underline hover:text-primaryColor flex mb-3"
                target="_blank"
                draggable={false}
              >
                <Image
                  src="/icons/discord.png"
                  alt="discord icon"
                  width={25}
                  height={25}
                  className="pointer-events-none mr-2"
                />{" "}
                Discord
              </Link>
              <Link
                href="https://www.meetup.com/eugene-go-players/?eventOrigin=event_home_page"
                className="hover:text-primaryColor  hover:underline flex mb-3"
                target="_blank"
                draggable={false}
              >
                <Image
                  src="/icons/meetup.png"
                  alt="meetup icon"
                  width={25}
                  height={25}
                  className="pointer-events-none mr-2"
                />{" "}
                Meetup
              </Link>
              <Link
                href="https://www.facebook.com/groups/EugeneGoClub"
                className="hover:text-primaryColor  hover:underline flex mb-3"
                target="_blank"
                draggable={false}
              >
                <Image
                  src="/icons/facebook.png"
                  alt="facebok icon"
                  width={25}
                  height={25}
                  className="pointer-events-none mr-2"
                />{" "}
                Facebook
              </Link>
              <Link
                href="https://baduk.club/club/eugene"
                className="hover:text-primaryColor  hover:underline flex mb-3"
                target="_blank"
                draggable={false}
              >
                <Image
                  src="/icons/badukclub.png"
                  alt="facebok icon"
                  width={25}
                  height={25}
                  className="pointer-events-none mr-2"
                />
                Baduk.club
              </Link>
              <Link
                href="https://online-go.com/group/6435"
                className="hover:text-primaryColor  hover:underline flex mb-3"
                target="_blank"
                draggable={false}
              >
                <Image
                  src="/icons/ogs.png"
                  alt="facebok icon"
                  width={25}
                  height={25}
                  className="pointer-events-none mr-2"
                />
                OGS
              </Link>
            </ul>
            <ul>
              <div>Daniel Pono Takamori</div>
              <div className="">971-533-7727</div>
              <div>contact@eugenego.club</div>
            </ul>
          </div>
        </div>
      </Container>
    </main>
  );
}
