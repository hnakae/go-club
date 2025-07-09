import Container from "@/app/components/container";

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
