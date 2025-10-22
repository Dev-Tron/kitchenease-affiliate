"use client"
import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false)
  const [mounted, setMounted] = useState(false) // ✅ prevents hydration mismatch

  // Run only on client after mount
  useEffect(() => {
    setMounted(true)

    // Load saved theme or system preference
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const storedTheme = localStorage.getItem("theme")

    const isDark = storedTheme === "dark" || (!storedTheme && prefersDark)

    if (isDark) {
      document.documentElement.classList.add("dark")
      setDarkMode(true)
    } else {
      document.documentElement.classList.remove("dark")
      setDarkMode(false)
    }
  }, [])

  const toggleTheme = () => {
    const html = document.documentElement
    const newMode = !darkMode
    setDarkMode(newMode)

    if (newMode) {
      html.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      html.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  // ✅ Prevent rendering until mounted (fixes hydration error)
  if (!mounted) {
    return (
      <button
        className="rounded-lg border border-stone-300 px-4 py-2 text-sm font-semibold opacity-0"
        aria-hidden="true"
      >
        …
      </button>
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className="rounded-lg border border-stone-300 px-4 py-2 text-sm font-semibold hover:bg-stone-100 dark:hover:bg-stone-700 transition"
    >
      {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  )
}
