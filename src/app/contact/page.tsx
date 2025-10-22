"use client"

import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("submitting")

    try {
      // 👇 replace this URL with your own Formspree endpoint
      const response = await fetch("https://formspree.io/f/xzbogjve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus("success")
        setFormData({ name: "", email: "", message: "" })
      } else {
        throw new Error("Form submission failed")
      }
    } catch (error) {
      console.error(error)
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <section className="max-w-xl mx-auto px-6 py-20 text-center">
        <h1 className="text-3xl font-bold text-[#5A8F60] mb-4">Thank You!</h1>
        <p className="text-stone-700">
          Your message has been sent successfully. We’ll get back to you soon.
        </p>
        <a
          href="/"
          className="inline-block mt-6 bg-[#5A8F60] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#4a7852] transition"
        >
          Back to Home
        </a>
      </section>
    )
  }

  return (
    <section className="max-w-2xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold text-white mb-4">Contact Us</h1>
      <p className="text-white mb-10">
        Have a question, partnership idea, or feedback about KitchenEase? We’d love to hear from you.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-[#1a1a1a] p-8 rounded-2xl shadow-md border border-stone-200 dark:border-stone-700">
        
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-1">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-stone-300 dark:border-stone-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#5A8F60] bg-background text-foreground"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-stone-300 dark:border-stone-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#5A8F60] bg-background text-foreground"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full border border-stone-300 dark:border-stone-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#5A8F60] bg-background text-foreground"
          ></textarea>
        </div>

        <input type="text" name="_gotcha" style={{ display: "none" }} />

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full bg-[#5A8F60] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#4a7852] transition disabled:opacity-60"
        >
          {status === "submitting" ? "Sending..." : "Send Message"}
        </button>

        {status === "error" && (
          <p className="text-red-500 text-sm mt-2">Something went wrong. Please try again.</p>
        )}
      </form>
    </section>
  )
}
