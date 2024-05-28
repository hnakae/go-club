import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";
import { Events } from "@/app/_components/events";

export default function FAQs() {
  return (
    <main className="outline w-full  ">
      <Container>
        <Intro />
        <Events />
      </Container>
    </main>
  );
}
