import Container from "@/app/_components/container";
import { Navbar } from "@/app/_components/navbar";
import { QA } from "@/app/_components/faqs";
import Header from "./header";

export default function FAQs() {
  return (
    <main className=" bg-[#F5F5F7]">
      <Navbar />
      <Header />
      <Container>
        <QA />
      </Container>
    </main>
  );
}
