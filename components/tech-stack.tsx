"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { ScrollButton } from "@/components/ui/scroll-button"

interface TechItem {
  name: string
  logo: string
}

interface TechStackProps {
  items: TechItem[]
}

export function TechStack({ items }: TechStackProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  const checkArrows = () => {
    if (scrollRef.current) {
      const { current } = scrollRef
      setShowLeftArrow(current.scrollLeft > 0)
      setShowRightArrow(current.scrollLeft < current.scrollWidth - current.clientWidth - 10)
    }
  }

  useEffect(() => {
    checkArrows()
    window.addEventListener("resize", checkArrows)
    return () => window.removeEventListener("resize", checkArrows)
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { current } = scrollRef
      const scrollAmount = 300

      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" })
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" })
      }

      setTimeout(checkArrows, 300)
    }
  }

  return (
    <div className="relative w-full">
      <ScrollButton direction="left" onClick={() => scroll("left")} show={showLeftArrow} />

      <div
        ref={scrollRef}
        className="flex overflow-x-auto scrollbar-hide gap-6 px-4 py-6"
        onScroll={checkArrows}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center min-w-[120px] h-[120px] rounded-lg bg-zinc-900 border border-zinc-800 p-4 hover:border-zinc-700 transition-colors"
          >
            <div className="relative w-12 h-12 mb-2">
              <Image src={item.logo || "/placeholder.svg"} alt={item.name} fill className="object-contain" />
            </div>
            <span className="text-xs text-zinc-400 text-center">{item.name}</span>
          </div>
        ))}
      </div>

      <ScrollButton direction="right" onClick={() => scroll("right")} show={showRightArrow} />
    </div>
  )
}
