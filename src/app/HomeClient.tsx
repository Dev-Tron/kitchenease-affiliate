"use client"

import Hero from "@/components/hero"
import PostCard from "@/components/PostCard"
import { Post } from "@/types"

export default function HomeClient({ posts }: { posts: Post[] }) {
  return (
    <div className="space-y-16 pt-16">
      {/* Hero */}
      <Hero />

      {/* Blog Posts */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Latest Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </div>
  )
}
