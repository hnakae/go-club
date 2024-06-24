---
title: "The Strength of Stones"
excerpt: "Unified Go Theory"
coverImage: "/assets/blog/theory1/cat-origami.jpg"
tags: "Basics"
date: "2024-06-16"
author:
  name: Hiro Nakae
  picture: "/assets/blog/authors/hiro.png"
ogImage:
  url: "/assets/images/cover.jpg"
---

“So in war, the way is to avoid what is strong, and strike at what is weak.”
― Sun Tzu, The Art of War

---

## Basic Concepts of Go #1: The Strength of Stones

---

This one is crucial. If you read the basic concepts of Go (from 5 to 2), that's good, but you can forget them all. Just remember this one concept. The reason why this concept on the strength of stones is so important, is that when you really break down and get to the essence of each of the other four concepts, what you will find is that they are all connected by this one concept.

Just like when you checkmate the king in chess, and guarantee your victory, the moment you master this concept, it wouldn't be an exaggeration to say that you have a _comprehensive understanding of all the basic theories of go_. This is the basic theory that encompasses everything about Go.

---

So let's get on with the two key points:

1 Moves near alive stones are small.

2 Moves without the threat of a follow up are small.

---

These are the two. Burn these into your memory so that when you wake up from this simulation you still remember them.

The two points share a close relationship.
When it comes to living stones, they're obviously already alive so there's no threat that you can aim for. Basically there isn't much of a follow up against such a group. Thus, moves in this area are small.

---

We can rephrase these two key points like this as well:

1 Moves near stones that aren't alive are big.

2 Moves with the threat of a follow up are big.

---

When stones are not yet alive, we can expect to be able to threaten a follow up move. Thus, moves in this are are big.

---

Let's look at some examples, and along the way I'll show how this concept can be connected to the other basic concepts.

![image info](/assets/blog/theory1/1.PNG)

White has just played this knight's move to check black's group here on the bottom side. If you guessed that the jump from one of these two black stones was the right move, I think you have an understanding of the 5 concepts.

Direction of Play - Rule #1: Play from your weak groups. Since black's group here is checked on both sides and there is a 2nd line stone due to the Q3 kick, Black's two stones have little eye-space and is unstable. So, we want to move from these guys since they're not alive and consequently weak.

---

But did you notice, that rule #1 of Direction of Play stating play from your weak groups, is similar to rule #1 of strength of stones? Of course, we play from the weak group because moves near alive stones are small. I think you now understand that the strength of stones is saying the same thing as the direction of play.

Moving on from the review of direction of play, let's consider how black should continue from here.

![image info](/assets/blog/theory1/2.PNG)

Of course, the one space jump from one of these stones would be the most orthodox response, but the problem here is there are two options for where to jump from. So, this is the problem at hand for this example; take a look at the two options.

![image info](/assets/blog/theory1/comparison1.png)

remember,

1 moves near alive stones are small

2 moves with no follow up threat are small.

So which is the correct answer, A or B?

---

![image info](/assets/blog/theory1/a.PNG)

How did you do, did you get it right?
The correct answer was to jump from the right side.

Perhaps you think that they're both one space jumps from the same group and so they're the same, but the nuance between these two moves effect the win rate by 6%. If you play A, white has about a 56% chance to win the game. But if you play B, white has about a 62% chance to win the game, according to katago on my machine.

---

Using the two key points of the strength of stones, we'll analyze why jumping from the stone on the right is better.

![image info](/assets/blog/theory1/a.PNG)

First of all, stones near alive stones are small.
Between the knight's move enclosure on the bottom left corner and the three stones in the bottom right quadrant, which of these two white groups is not alive? The enclosure on the left side is stable. It's alive. but the group on the right side has no eye shape and is a weak group. Therefore, instead of playing near the alive enclosure, playing near the weak group has more value.

---
