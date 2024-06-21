import Container from "@/app/_components/container";
// import { Events } from "@/app/_components/events";
import JoinCommunity from "./join-community";
import Header from "./header";

export default function Contact() {
  return (
    <main className=" h-screen ">
      <Header />
      <Container>
        <div className="w-full flex justify-center items-start z-10 text-neutralColor h-screen">
          <div className=" max-w-[1128px] mx-6 px-14 py-10  flex-col flex items-start justify-start rounded-md  border border-primaryColor  shadow-md   backdrop-blur-md w-full ">
            {/* <JoinCommunity /> */}
          </div>
        </div>
      </Container>
    </main>
  );
}
