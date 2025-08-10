"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      // Scroll to the target element
      targetElement.scrollIntoView({ behavior: "smooth" })

      // Update URL hash without jumping
      window.history.pushState(null, "", href)
    }
  }

  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden min-h-screen">
      <div className="absolute inset-0 z-0">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b"></div>

        {/* Animated background paths - increased visibility */}
        <div className="absolute inset-0 z-[1]">
          {/* First set of paths */}
          <div className="absolute inset-0 pointer-events-none">
            <svg
              className="w-full h-full text-zinc-500"
              viewBox="0 0 1000 1000"
              preserveAspectRatio="xMidYMid slice"
              fill="none"
            >
            </svg>
          </div>

          {/* Second set of paths (reversed) */}
          <div className="absolute inset-0 pointer-events-none">
            <svg
              className="w-full h-full text-zinc-400"
              viewBox="0 0 1000 1000"
              preserveAspectRatio="xMidYMid slice"
              fill="none"
            >
            </svg>
          </div>
        </div>

        {/* Border lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent opacity-20 z-[2]"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent opacity-20 z-[2]"></div>
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl mb-6">
            <span className="text-white">Hochu Portfolio</span>
          </h1>

          <p className="max-w-[700px] mx-auto text-zinc-400 md:text-xl mb-8">
            Developer, AI enthusiast
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#projects" onClick={(e) => handleNavClick(e, "#projects")}>
              <Button className="bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-all min-w-[160px]">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>
              <Button
                variant="outline"
                className="border-zinc-800 bg-white text-black hover:bg-zinc-200 hover:text-black transition-all min-w-[160px]"
              >
                Contact Me
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

