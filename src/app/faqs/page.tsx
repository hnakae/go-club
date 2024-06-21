import Container from "@/app/_components/container";
import { Navbar } from "../_components/Navbar.1";

import Header from "./header";
import { QA } from "./faqs";

export default function FAQs() {
  return (
    <main className=" ">
      <Header />
      <Container>
        <QA />
      </Container>
    </main>
  );
}
