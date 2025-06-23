import Container from "@/app/_components/container";
import { getAllPosts } from "@/lib/api";
import MeetUpInfo from "./_components/site-header";
import Articles from "./blog/articles";
// import SGFViewer from "@/app/_components/custom/SGFViewer";

export default function Index() {
  const allPosts = getAllPosts();

  return (
    <main className="max-w-screen">
      {/* Add a clear description that's visible but can be styled to fit your design */}
      <div className="sr-only">
        Eugene Go Club is the official Go/Baduk/Weiqi club in Eugene, Oregon. Join our weekly meetups at The Wheel Apizza Pub on Wednesdays and New Day Bakery on Sundays for games, lessons, and community.
      </div>
      <Container>
        <MeetUpInfo />
        <Articles initialPosts={allPosts} />
      </Container>
    </main>
  );
}
