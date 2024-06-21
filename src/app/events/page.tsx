import Container from "@/app/_components/container";
import { Navbar } from "../_components/Navbar.1";
import { Events } from "@/app/_components/events";

export default function FAQs() {
  return (
    <main className="h-screen">
      <Navbar />
      <Container>
        <Events />
      </Container>
    </main>
  );
}
