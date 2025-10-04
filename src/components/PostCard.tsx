import Link from "next/link"
import { Post } from "@/types"

interface Props {
  post: Post
}

export default function PostCard({ post }: Props) {
  return (
    <div className="border rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition">
      <h2 className="text-xl font-semibold mb-2 text-black">
        <Link href={`/posts/${post.slug}`}>{post.title}</Link>
      </h2>
      <p className="text-gray-600 mb-4">{post.excerpt}</p>
      <Link href={`/posts/${post.slug}`} className="text-blue-600 hover:underline">
        Read More →
      </Link>
    </div>
  )
}
