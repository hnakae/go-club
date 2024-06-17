import Container from "@/app/_components/container";
import { Navbar } from "@/app/_components/navbar";
import { Events } from "@/app/_components/events";
import JoinCommunity from "./join-community";
import Header from "./header";

export default function Contact() {
  return (
    <main className="h-screen bg-[#F5F5F7]">
      <Navbar />
      <Header />
      <Container>
        <JoinCommunity />
      </Container>
    </main>
  );
}
