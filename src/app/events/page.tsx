import Container from "@/app/_components/container";
import { Navbar } from "@/app/_components/navbar";
import { Events } from "@/app/_components/events";

export default function FAQs() {
  return (
    <main className="bg-blue-100 h-screen">
      <Navbar />
      <Container>
        <Events />
      </Container>
    </main>
  );
}
