export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  content: string;
}

export const posts: BlogPost[] = [
  {
    slug: "hello-world",
    title: "Hello, World",
    date: "2026-03-13",
    summary: "The first post — a quick intro to what this blog will be about.",
    tags: ["general"],
    content: `Welcome to the blog. I plan to use this space to write about projects I'm working on, things I'm learning, and anything else I find worth sharing.

More posts coming soon.`,
  },
];
