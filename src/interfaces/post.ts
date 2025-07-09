import { type Author } from "./author";

export type Post = {
  clickCount: number;
  slug: string;
  chapter: string;
  tags: string; // used for sorting
  title: string;
  date: string;
  coverImage: string;
  author: Author;
  excerpt: string;
  ogImage?: {
    url: string;
  };
  content: string;
  preview?: boolean;
};
