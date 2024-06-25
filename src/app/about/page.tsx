import Container from "@/app/_components/container";

import Header from "./header";
// import { QA } from "./faqs";

export default function About() {
  return (
    <main className=" ">
      <Container>
        <Header />{" "}
        <div className="w-full flex justify-center items-start z-10 text-neutralColor mb-4">
          <div className=" max-w-[1128px]  px-14 py-10  flex-col flex items-start justify-start rounded-md  border border-primaryColor  shadow-md   backdrop-blur-md w-full ">
            Welcome to the Eugene Go Club!
          </div>
        </div>
      </Container>
    </main>
  );
}
