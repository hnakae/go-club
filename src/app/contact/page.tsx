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
          <div className=" max-w-[1128px]  px-14 py-10  flex-col flex items-center justify-start rounded-md  border border-primaryColor  shadow-md   backdrop-blur-md w-full ">
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

            <div>Daniel Pono Takamori</div>

            <div className="mb-3">971-533-7727</div>

            <div>contact@eugenego.club</div>
          </div>
        </div>
      </Container>
    </main>
  );
}
