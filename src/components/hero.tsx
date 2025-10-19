"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const heroImages = [
  { src: "/kitchenware.png", alt: "Modern kitchen products" },
  { src: "/airfryer.jpg", alt: "Air Fryer cooking" },
  { src: "/blender.jpg", alt: "Blender making smoothie" },
  { src: "/kettle.jpg", alt: "Electric kettle boiling water" },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const prevSlide = () =>
    setCurrent((current - 1 + heroImages.length) % heroImages.length)
  const nextSlide = () => setCurrent((current + 1) % heroImages.length)

  return (
    <section className="w-full py-20 md:py-28 bg-gradient-to-br from-orange-100 via-white to-brand-light border border-stone-300 rounded-2xl shadow-sm overflow-hidden relative">
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
            className="inline-block mt-6 rounded-xl bg-[#5A8F60] px-6 py-3 font-semibold text-white hover:bg-brand-dark transition"
          >
            See Featured Products
          </a>
        </div>

        {/* Right - Carousel */}
        <div className="relative w-full aspect-[4/3] flex justify-center md:justify-end overflow-hidden rounded-2xl shadow-lg">
          {heroImages.map((img, index) => (
            <Image
              key={index}
              src={img.src}
              alt={img.alt}
              fill
              className={`object-cover transition-opacity duration-1000 ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
              priority={index === current}
            />
          ))}

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-black rounded-full p-2 shadow"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-black rounded-full p-2 shadow"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 w-full flex justify-center gap-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  current === index ? "bg-brand" : "bg-stone-300 hover:bg-stone-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
