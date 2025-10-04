import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post } from "@/types";

const POSTS_DIR = path.join(process.cwd(), "posts");

export function getAllPosts(): Post[] {
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".md"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const raw = fs.readFileSync(path.join(POSTS_DIR, filename), "utf-8");
    const { data } = matter(raw);

    return {
      slug,
      title: data.title,
      excerpt: data.excerpt,
      affiliateLink: data.affiliateLink || "",
      date: data.date ? new Date(data.date) : new Date(0), // fallback if missing
    };
  });

  // 🔽 Sort newest to oldest
  return posts.sort((a, b) => b.date.getTime() - a.date.getTime());
}
