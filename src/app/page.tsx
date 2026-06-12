import Container from "@/app/components/container";
import { getAllPosts } from "@/lib/api";
import MeetUpInfo from "./components/site-header";
import Articles from "./blog/articles";
import { MEETINGS } from "@/lib/meetings";
// import SGFViewer from "@/app/components/custom/SGFViewer";

export default function Index() {
  const allPosts = getAllPosts();

  return (
    <main className="max-w-screen">
      {/* Add a clear description that's visible but can be styled to fit your design */}
      <div className="sr-only">
        Eugene Go Club is the official Go/Baduk/Weiqi club in Eugene, Oregon. Join our weekly meetups at {MEETINGS.wednesday.place} on Wednesdays and {MEETINGS.sunday.place} on Sundays for games, lessons, and community.
      </div>
      <Container>
        <MeetUpInfo />
        <Articles initialPosts={allPosts} />
      </Container>
    </main>
  );
}
