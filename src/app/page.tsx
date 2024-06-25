import Container from "@/app/_components/container";
import { getAllPosts } from "@/lib/api";
import MeetUpInfo from "./_components/meetup-info";
import Articles from "./blog/articles";

export default function Index() {
  const allPosts = getAllPosts();

  // const heroPost = allPosts[0];
  // console.log(heroPost);

  // const morePosts = allPosts.slice(3);
  // {morePosts.length > 0 && <GameReviews posts={morePosts} />}
  return (
    <main className="max-w-screen">
      <Container>
        <MeetUpInfo />
        <Articles initialPosts={allPosts} />
      </Container>
    </main>
  );
}
