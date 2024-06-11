import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Navbar } from "@/app/_components/navbar";
import { GameReviews } from "@/app/_components/game-reviews";
import { getAllPosts } from "@/lib/api";
import MeetUpInfo from "./_components/meetup-info";
import JoinCommunity from "./_components/join-community";

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];
  // console.log(heroPost);

  const morePosts = allPosts.slice(1);

  return (
    // bg-[#f0e7db]
    <main className="bg-[url('/assets/images/background-flipped.png')] bg-no-repeat bg-rotate-180  ">
      <Navbar />
      <Container>
        <MeetUpInfo />
        {/* {morePosts.length > 0 && <GameReviews posts={morePosts} />} */}
        <JoinCommunity />
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
      </Container>
    </main>
  );
}
