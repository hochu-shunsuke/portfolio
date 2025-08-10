"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ScrollButton } from "@/components/ui/scroll-button"
import { useMouseDrag } from "@/hooks/use-mouse-drag"

interface TechItem {
  name: string
  logo: string
}

interface TechStackProps {
  items: TechItem[]
}

export function TechStack({ items }: TechStackProps) {
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  const checkArrows = () => {
    if (ref.current) {
      const element = ref.current
      const isAtStart = element.scrollLeft <= 5
      const isAtEnd = element.scrollLeft >= element.scrollWidth - element.clientWidth - 5
      
      setShowLeftArrow(!isAtStart)
      setShowRightArrow(!isAtEnd)
    }
  }

  const { ref, isGrabbing, scrollTo } = useMouseDrag({
    onScroll: checkArrows
  })

  useEffect(() => {
    checkArrows()
    window.addEventListener("resize", checkArrows)
    return () => window.removeEventListener("resize", checkArrows)
  }, [])

  const scroll = (direction: "left" | "right") => {
    scrollTo(direction)
  }

  return (
    <div className="relative w-full">
      <ScrollButton direction="left" onClick={() => scroll("left")} show={showLeftArrow} />

      <div 
        ref={ref}
        className={`overflow-x-auto py-6 scrollbar-hide ${isGrabbing ? 'select-none' : ''}`}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="flex gap-4 md:gap-6 px-4 md:px-6" style={{ width: 'max-content' }}>
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center min-w-[100px] md:min-w-[120px] h-[100px] md:h-[120px] rounded-lg bg-zinc-900 border border-zinc-800 p-3 md:p-4 hover:border-zinc-700 transition-colors flex-shrink-0"
            >
              <div className="relative w-8 h-8 md:w-12 md:h-12 mb-2">
                <Image src={item.logo || "/placeholder.svg"} alt={item.name} fill className="object-contain" />
              </div>
              <span className="text-xs text-zinc-400 text-center">{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      <ScrollButton direction="right" onClick={() => scroll("right")} show={showRightArrow} />
    </div>
  )
}
