"use client"
import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    // Check saved theme
    if (localStorage.theme === "dark" ||
        (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark")
      setDarkMode(true)
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [])

  const toggleTheme = () => {
    const html = document.documentElement
    if (html.classList.contains("dark")) {
      html.classList.remove("dark")
      localStorage.theme = "light"
      setDarkMode(false)
    } else {
      html.classList.add("dark")
      localStorage.theme = "dark"
      setDarkMode(true)
    }
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
