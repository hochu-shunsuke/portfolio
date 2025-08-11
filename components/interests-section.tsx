"use client"

import { SectionHeading } from "@/components/section-heading"
import { InterestsMusicCard } from "./interests-music-card"
import { ScrollableSection } from "@/components/ui/scrollable-section"

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
  return (
    <section id="interests" className="py-16 md:py-28">
      <div className="container px-4 md:px-6">
        <SectionHeading title="Interests" subtitle="Music & Personal tastes" />
        
        <div className="mt-12">
          <ScrollableSection
            itemCount={musicPlaylists.length}
            itemWidth={370} // カード幅 + ギャップ
            scrollAmount={300}
            enableDrag={false}
            showIndicator={true}
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
          </ScrollableSection>
        </div>
      </div>
    </section>
  )
}
