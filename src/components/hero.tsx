"use client"

import Image from "next/image"

export default function Hero() {
  return (
    <section className="w-full py-20 md:py-28 bg-gradient-to-br from-orange-100 via-white to-brand-light border border-stone-300 rounded-2xl shadow-sm overflow-hidden">
      <div className="grid md:grid-cols-2 items-center gap-10 max-w-6xl mx-auto px-6">
        
        {/* Left - Text */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
            Fresh picks for a happier kitchen
          </h1>
          <p className="mt-4 text-base md:text-lg text-stone-700 leading-relaxed">
            Tested tools and practical guides to save time, cut clutter, and make cooking easier.
          </p>
          <a
            href="#featured"
            className="inline-block mt-6 rounded-xl bg-brand px-6 py-3 font-semibold text-white hover:bg-brand-dark transition"
          >
            See Featured Products
          </a>
        </div>

        {/* Right - Image */}
        <div className="relative w-full aspect-[4/3] flex justify-center md:justify-end">
          <Image
            src="/kitchenware.png" // 👈 place your hero image in /public
            alt="Modern kitchen products"
            fill
            className="object-cover rounded-2xl shadow-lg"
            priority
            sizes="(max-width: 768px) 100vw,
                   (max-width: 1200px) 50vw,
                   600px"
          />
        </div>
      </div>
    </section>
  )
}
