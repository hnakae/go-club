import Container from "@/app/_components/container";
import { Navbar } from "../_components/Navbar.1";
import { Events } from "@/app/_components/events";
import Squares from "./articles";
import MeetUpInfo from "../_components/meetup-info";
import Header from "./header";

export default function Blog() {
  return (
    <main className="min-h-screen bg-[#F5F5F7]">
      <Navbar />
      <Header />
      <Container>
        <Squares />
      </Container>
    </main>
  );
}
