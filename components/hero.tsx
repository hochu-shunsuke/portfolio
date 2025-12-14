"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function Hero() {
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl mb-6"
          >
            <span className="text-white">Hochu Portfolio</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-[700px] mx-auto text-zinc-400 md:text-xl mb-8"
          >
            Web Developer, Experience Design

          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="#projects" onClick={(e) => handleNavClick(e, "#projects")}>
              <Button className="bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-all min-w-[160px]">
                View Projects
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
