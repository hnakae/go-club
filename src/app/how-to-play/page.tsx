import Container from "@/app/_components/container";
import { Navbar } from "../_components/Navbar.1";
import { Events } from "@/app/_components/events";

export default function Intro() {
  return (
    <main className="h-screen bg-orange1">
      <Navbar />
      <Container>{/* <div className="h-screen "></div> */}</Container>
    </main>
  );
}
