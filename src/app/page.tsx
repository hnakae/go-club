import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { getAllPosts } from "@/lib/api";
import MeetUpInfo from "./_components/meetup-info";
// import JoinCommunity from "./contact/join-community";
import Grid from "./_components/grid";
import Quote from "./contact/quote";
import GoldenRule from "./_components/goldenRule";
import Articles from "./blog/articles";

export default function Index() {
  // const allPosts = getAllPosts();

  // const heroPost = allPosts[0];
  // console.log(heroPost);

  // const morePosts = allPosts.slice(3);
  // {morePosts.length > 0 && <GameReviews posts={morePosts} />}
  return (
    // bg-[#f0e7db]
    <main className="max-w-screen">
      <MeetUpInfo />
      <Container>
        {/* <Grid /> */}
        {/* {morePosts.length > 0 && <GameReviews posts={morePosts} />} */}
        {/* <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        /> */}
        <Articles />

        {/* <JoinCommunity /> */}
      </Container>
    </main>
  );
}
