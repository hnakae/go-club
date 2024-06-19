import Container from "@/app/_components/container";
import { Navbar } from "@/app/_components/navbar";

import Header from "./header";
import { QA } from "./faqs";

export default function FAQs() {
  return (
    <main className=" ">
      <div className="fixed z-0 top-0 h-full w-full text-[200px] font-sans font-bold text-gray-200 bg-[url(/assets/images/slatebg.png)]">
        {/* Eugene Go Club */}
      </div>
      <Navbar />
      <Header />
      <Container>
        <QA />
      </Container>
    </main>
  );
}
