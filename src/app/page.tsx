import { getPosts } from "@/lib/posts"
import HomeClient from "./HomeClient"

export default function Page() {
  const posts = getPosts() // ✅ runs server-side only
  return <HomeClient posts={posts} />
}
