"use client";
import Container from "@/app/_components/container";
// import { Events } from "@/app/_components/events";
import JoinCommunity from "./join-community";
import Header from "./header";
import Link from "next/link";
import Image from "next/image";

export default function Contact() {
  return (
    <main className=" ">
      <Container>
        <Header />
        <div className="w-full flex justify-center items-start z-10 mb-4 text-neutralColor ">
          <div className=" max-w-[1128px]  px-14 py-10 justify-around flex items-center rounded-md  border border-primaryColor  shadow-md   backdrop-blur-md w-full ">
            <ul>
              <Link
                href="https://discord.com/channels/1164649557687275703/1164649557687275706"
                className="text-blue-500 underline flex mb-3"
                target="_blank"
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
                className="text-blue-500 underline flex mb-3"
                target="_blank"
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
                className="text-blue-500 underline flex mb-3"
                target="_blank"
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
                href="https://online-go.com/group/6435"
                className="text-blue-500 underline flex mb-3"
                target="_blank"
              >
                OGS - Online Go Server
              </Link>
            </ul>
            <ul>
              <div>Daniel Pono Takamori</div>
              <div className="mb-3">971-533-7727</div>
              <div>contact@eugenego.club</div>
              <div>eugenego.contact@gmail.com</div>
            </ul>
          </div>
        </div>
      </Container>
    </main>
  );
}
