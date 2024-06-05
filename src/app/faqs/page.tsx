import Container from "@/app/_components/container";
import { Navbar } from "@/app/_components/navbar";
import { QA } from "@/app/_components/faqs";

export default function FAQs() {
  return (
    <main className=" h-screen">
      <Navbar />
      <Container>
        <QA />
      </Container>
    </main>
  );
}
