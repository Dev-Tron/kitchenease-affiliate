import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { Post } from "@/types"

export function getPosts(): Post[] {
  const postsDir = path.join(process.cwd(), "posts")
  const files = fs.readdirSync(postsDir)

  return files.map((filename) => {
    const slug = filename.replace(".md", "")
    const raw = fs.readFileSync(path.join(postsDir, filename), "utf-8")
    const { data } = matter(raw)
    return {
      slug,
      title: data.title,
      excerpt: data.excerpt,
      affiliateLink: data.affiliateLink || "",
    }
  })
}
