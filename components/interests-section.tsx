"use client"

import { SectionHeading } from "@/components/section-heading"
import { InterestsMusicCard } from "./interests-music-card"
import { ScrollableSection } from "@/components/ui/scrollable-section"
import { musicPlaylists } from "@/lib/data"

export function InterestsSection() {
  return (
    <section id="interests" className="py-16 md:py-28">
      <div className="container px-4 md:px-6">
        <SectionHeading title="Interests" subtitle="Music & Personal tastes" />
        
        <div className="mt-12 w-screen relative left-1/2 right-1/2 -mx-[50vw]">
          <ScrollableSection
            itemCount={musicPlaylists.length}
            itemWidth={374} // デスクトップ: カード350px + ギャップ24px
            scrollAmount={300}
            enableDrag={false}
            showIndicator={true}
          >
            <div className="flex gap-4 md:gap-6 px-4 md:px-6 max-w-[1400px] mx-auto" style={{ width: 'max-content' }}>
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

