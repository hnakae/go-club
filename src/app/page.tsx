import Container from "@/app/components/container";
import { getAllPosts } from "@/lib/api";
import MeetUpInfo from "./components/site-header";
import Articles from "./blog/articles";

export default function Index() {
  const allPosts = getAllPosts();

  return (
    <main className="max-w-screen">
      <Container>
        <MeetUpInfo />
        <Articles initialPosts={allPosts} />
      </Container>
    </main>
  );
}
