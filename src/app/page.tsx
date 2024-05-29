import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";
import MeetUpInfo from "./_components/meetup-info";
import JoinCommunity from "./_components/join-community";

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <main className=" ">
      <Container>
        <Intro />
        <MeetUpInfo />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
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
