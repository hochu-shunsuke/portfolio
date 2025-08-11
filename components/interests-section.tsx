"use client"

import { SectionHeading } from "@/components/section-heading"
import { InterestsMusicCard } from "./interests-music-card"
import { ScrollButton } from "@/components/ui/scroll-button"
import { useRef, useState, useEffect } from "react"

// Spotify プレイリストの設定
const musicPlaylists = [
  {
    spotifyUrl: "https://open.spotify.com/embed/playlist/6BLQf0A5yzSJVAI5Wo1ECC?utm_source=generator&theme=0"
  },
  {
    spotifyUrl: "https://open.spotify.com/embed/playlist/6BLQf0A5yzSJVAI5Wo1ECC?utm_source=generator&theme=0"
  },
  {
    spotifyUrl: "https://open.spotify.com/embed/playlist/6BLQf0A5yzSJVAI5Wo1ECC?utm_source=generator&theme=0"
  },
  {
    spotifyUrl: "https://open.spotify.com/embed/playlist/6BLQf0A5yzSJVAI5Wo1ECC?utm_source=generator&theme=0"
  }
]

export function InterestsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  const checkArrows = () => {
    if (scrollRef.current) {
      const element = scrollRef.current
      const isAtStart = element.scrollLeft <= 5
      const isAtEnd = element.scrollLeft >= element.scrollWidth - element.clientWidth - 5
      
      setShowLeftArrow(!isAtStart)
      setShowRightArrow(!isAtEnd)
    }
  }

  useEffect(() => {
    checkArrows()
    window.addEventListener("resize", checkArrows)
    return () => window.removeEventListener("resize", checkArrows)
  }, [])

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' })
      setTimeout(checkArrows, 300)
    }
  }

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' })
      setTimeout(checkArrows, 300)
    }
  }

  return (
    <section id="interests" className="py-16 md:py-28">
      <div className="container px-4 md:px-6">
        <SectionHeading title="Interests" subtitle="Music & Personal tastes" />
        
        <div className="relative mt-12">
          <ScrollButton direction="left" onClick={scrollLeft} show={showLeftArrow} />
          
          <div 
            ref={scrollRef}
            className="overflow-x-auto pb-6 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onScroll={checkArrows}
          >
            <div className="flex gap-4 md:gap-6 px-4 md:px-6" style={{ width: 'max-content' }}>
              {musicPlaylists.map((playlist, index) => (
                <div key={index} className="w-[300px] md:w-[350px] flex-shrink-0">
                  <InterestsMusicCard
                    spotifyUrl={playlist.spotifyUrl}
                  />
                </div>
              ))}
            </div>
          </div>
          
          <ScrollButton direction="right" onClick={scrollRight} show={showRightArrow} />
        </div>
      </div>
    </section>
  )
}
