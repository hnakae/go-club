import Container from "@/app/_components/container";
import { Navbar } from "@/app/_components/navbar";
import { Events } from "@/app/_components/events";
import Squares from "../_components/squares";
import MeetUpInfo from "../_components/meetup-info";
import Header from "./header";

export default function Blog() {
  return (
    <main className="h-screen bg-[#F5F5F7]">
      <Navbar />
      <Header />
      <Container>
        <Squares />
      </Container>
    </main>
  );
}
