"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

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
      {showLeftArrow && (
        <Button
          variant="outline"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/80 border-zinc-800 text-white hover:bg-zinc-900 hover:text-white"
          onClick={() => scroll("left")}
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Scroll left</span>
        </Button>
      )}

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

      {showRightArrow && (
        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/80 border-zinc-800 text-white hover:bg-zinc-900 hover:text-white"
          onClick={() => scroll("right")}
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Scroll right</span>
        </Button>
      )}
    </div>
  )
}

