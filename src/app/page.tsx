import { getAllPosts } from "@/lib/posts";
import HomeClient from "./HomeClient";

export default function Page() {
  // ✅ use the correct function name
  const posts = getAllPosts(); // runs server-side only
  return <HomeClient posts={posts} />;
}
