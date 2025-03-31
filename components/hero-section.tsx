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
    <section className="relative flex flex-col items-center justify-center overflow-hidden py-24 md:py-32 lg:py-40">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-zinc-900"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent opacity-20"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent opacity-20"></div>
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl mb-6">
            <span className="text-white">Hochu_Portfolio</span>
          </h1>

          <p className="max-w-[700px] mx-auto text-zinc-400 md:text-xl mb-8">
          Full-stack Developer, network engineer, AI enthusiast
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

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  )
}

