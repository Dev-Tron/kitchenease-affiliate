import fs from "fs"
import path from "path"
import matter from "gray-matter"
import Link from "next/link"
import { Post } from "@/types"

export default function ArchivePage() {
  const files = fs.readdirSync(path.join("posts"))

  const posts: Post[] = files
    .map((filename) => {
      const fileContent = fs.readFileSync(path.join("posts", filename), "utf-8")
      const { data: fm } = matter(fileContent)

      return {
        slug: filename.replace(".md", ""),
        title: fm.title,
        excerpt: fm.excerpt || "",
        affiliateLink: fm.affiliateLink || "",
        date: new Date(fm.date), // 👈 convert to Date object
      } satisfies Post
    })
    .sort((a, b) => b.date.getTime() - a.date.getTime())
    .slice(6)

  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-8 text-white">Post Archive</h1>
      <p className="text-white mb-10">
        Posts older than the most recent six.
      </p>

      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.slug} className="border-b border-stone-200 pb-3">
            <Link
              href={`/posts/${post.slug}`}
              className="text-lg font-semibold text-[#5A8F60] hover:text-[#4a7852] transition"
            >
              {post.title}
            </Link>
            {post.date && (
              <p className="text-sm text-stone-500 mt-1">
                {post.date.toLocaleDateString()}
              </p>
            )}
          </li>
        ))}
      </ul>

      <div className="mt-12">
        <Link
          href="/"
          className="inline-block text-[#5A8F60] hover:text-[#4a7852] font-semibold"
        >
          ← Back to Home
        </Link>
      </div>
    </section>
  )
}
