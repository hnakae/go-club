import Container from "@/app/_components/container";
// import { Events } from "@/app/_components/events";
import JoinCommunity from "./join-community";
import Header from "./header";
import Link from "next/link";

export default function Contact() {
  return (
    <main className=" ">
      <Container>
        <Header />
        <div className="w-full flex justify-center items-start z-10 mb-4 text-neutralColor ">
          <div className=" max-w-[1128px]  px-14 py-10  flex-col flex items-start justify-start rounded-md  border border-primaryColor  shadow-md   backdrop-blur-md w-full ">
            {/* <JoinCommunity /> */}
            <Link
              href="https://discord.com/channels/1164649557687275703/1164649557687275706"
              className="text-blue-500 underline"
              target="_blank"
            >
              Discord
            </Link>
            {/* <div>contact@info.com</div>
            <div>541-000-0000</div> */}
          </div>
        </div>
      </Container>
    </main>
  );
}
