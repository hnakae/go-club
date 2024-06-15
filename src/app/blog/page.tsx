import Container from "@/app/_components/container";
import { Navbar } from "@/app/_components/navbar";
import { Events } from "@/app/_components/events";

export default function Blog() {
  return (
    <main className="h-screen bg-orange1">
      <Navbar />
      <Container>{/* <div className="h-screen "></div> */}</Container>
    </main>
  );
}
