import Container from "@/app/_components/container";
import { getAllPosts } from "@/lib/api";
import MeetUpInfo from "./_components/site-header";
import Articles from "./blog/articles";
// import SGFViewer from "@/app/_components/custom/SGFViewer";

export default function Index() {
  const allPosts = getAllPosts();

  // const heroPost = allPosts[0];
  // console.log(heroPost);

  // const morePosts = allPosts.slice(3);
  // {morePosts.length > 0 && <GameReviews posts={morePosts} />}

  //  sgfString="(;GM[1]FF[4]CA[UTF-8]AP[Sabaki:0.52.2]KM[7.5]SZ[19]DT[2023-05-30];B[dd];W[pd];B[dp];W[pp];B[fc];W[pj];B[jj])"
  return (
    <main className="max-w-screen">
      {/* <SGFViewer /> */}
      <Container>
        <MeetUpInfo />
        <Articles initialPosts={allPosts} />
      </Container>
    </main>
  );
}
