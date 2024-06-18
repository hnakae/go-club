"use server";

import { getAllPosts } from "../lib/api";
import { Post } from "@/interfaces/post";

export async function fetchPosts(): Promise<Post[]> {
  return getAllPosts();
}
