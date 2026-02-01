"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"

interface ScrollButtonProps {
  direction: "left" | "right"
  onClick: () => void
  show: boolean
}

export function ScrollButton({ direction, onClick, show }: ScrollButtonProps) {
  if (!show) return null

  return (
    <button
      onClick={onClick}
      className={`absolute top-1/2 -translate-y-1/2 ${direction === "left" ? "left-4 md:left-12" : "right-4 md:right-12"
        } z-10 bg-zinc-900/80 p-2 rounded-full shadow-md hover:bg-zinc-800 transition-all hidden md:flex items-center justify-center text-zinc-400 hover:text-white`}
      aria-label={`Scroll ${direction}`}
    >
      {direction === "left" ? (
        <ChevronLeft className="h-6 w-6" />
      ) : (
        <ChevronRight className="h-6 w-6" />
      )}
    </button>
  )
}
