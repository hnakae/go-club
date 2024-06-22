import { type Author } from "./author";

export type Post = {
  clickCount: number;
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  author: Author;
  // author2: Author;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
  preview?: boolean;
};
