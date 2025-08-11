"use client"

import { SectionHeading } from "@/components/section-heading"
import { InterestsMusicCard } from "./interests-music-card"
import { ScrollButton } from "@/components/ui/scroll-button"
import { ScrollIndicator } from "@/components/ui/scroll-indicator"
import { useScrollSection } from "@/hooks/use-scroll-section"

// Spotify プレイリストの設定
const musicPlaylists = [
  {
    spotifyUrl: "https://open.spotify.com/embed/playlist/6BLQf0A5yzSJVAI5Wo1ECC?utm_source=generator&theme=0"
  },
  {
    spotifyUrl: "https://open.spotify.com/embed/playlist/6qeI7Fjsyrhet1ba8x3B0F?utm_source=generator&theme=0"
  },
  {
    spotifyUrl: "https://open.spotify.com/embed/playlist/1eNiVtQ6RWz2XqDDOYmTyW?utm_source=generator&theme=0"
  },
  {
    spotifyUrl: "https://open.spotify.com/embed/playlist/4jjhdyoD1NymbcLZBMCVkE?utm_source=generator&theme=0"
  }
]


export function InterestsSection() {
  const {
    scrollRef,
    showLeftArrow,
    showRightArrow,
    currentIndex,
    scrollLeft,
    scrollRight,
    checkArrows
  } = useScrollSection({
    itemCount: musicPlaylists.length,
    itemWidth: 320 // カード幅300px + ギャップ20px
  })

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

        {/* スクロールインジケーター - モバイルのみ表示 */}
        <ScrollIndicator 
          itemCount={musicPlaylists.length}
          currentIndex={currentIndex}
        />
      </div>
    </section>
  )
}
