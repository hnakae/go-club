import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";
import { QA } from "@/app/_components/faqs";

export default function FAQs() {
  return (
    <main className="outline w-full  ">
      <Container>
        <Intro />
        <QA />
      </Container>
    </main>
  );
}
