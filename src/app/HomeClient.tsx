"use client";

import Hero from "@/components/hero";
import PostCard from "@/components/PostCard";
import BuyButton from "@/components/BuyButton";
import Image from "next/image";
import { Post } from "@/types";

const featuredProducts = [
  {
    name: "Air Fryer XL",
    image: "/airfryer.jpg",
    url: "https://www.amazon.com/dp/B07Y2ZZX5F",
    price: "$89.99",
  },
  {
    name: "Cast Iron Skillet",
    image: "/skillet.jpg",
    url: "https://www.amazon.com/dp/B08H7ZNNZP",
    price: "$34.99",
  },
  {
    name: "Blender Pro 5000",
    image: "/blender.jpg",
    url: "https://www.amazon.com/dp/B01N6E66RN",
    price: "$129.99",
  },
  {
    name: "Electric Kettle Glass 1.7L",
    image: "/kettle.jpg",
    url: "https://www.amazon.com/dp/B09Q7QF3FV",
    price: "$39.99",
  },
];

export default function HomeClient({ posts }: { posts: Post[] }) {
  return (
    <div className="space-y-20 pt-16">
      {/* Hero */}
      <Hero />

      {/* Featured Products */}
      <section id="featured" className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Featured Products
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-8 text-black">
          {featuredProducts.map((product) => (
            <div
              key={product.name}
              className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition"
            >
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <p className="text-stone-600">{product.price}</p>
              <BuyButton url={product.url} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <a
            href="/featured"
            className="inline-block bg-[#5A8F60] text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            View All Featured Products
          </a>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Latest Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.slice(0, 6).map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
        <div className="text-center mt-10">
          <a href="/archive" className="inline-block bg-[#5A8F60] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#4a7852] transition">
            View Older Posts
          </a>
        </div>

      </section>
    </div>
  );
}
