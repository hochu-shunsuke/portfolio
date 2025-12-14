"use client"

import { ScrollableSection } from "@/components/ui/scrollable-section"
import { musicPlaylists } from "@/lib/data"

interface InterestsMusicCardProps {
    spotifyUrl: string
}

// 音楽カードコンポーネント
function InterestsMusicCard({ spotifyUrl }: InterestsMusicCardProps) {
    return (
        <div className="w-full h-[450px] transition-transform duration-300 hover:scale-[1.02] group">
            <iframe
                title="Spotify Playlist"
                data-testid="embed-iframe"
                style={{ borderRadius: '12px' }}
                src={spotifyUrl}
                width="100%"
                height="450"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                loading="lazy"
                className="border-none transition-all duration-300 group-hover:shadow-lg group-hover:shadow-zinc-900/20"
            />
        </div>
    )
}

// メインの興味セクション
export function Interests() {
    return (
        <section id="interests" className="py-16 md:py-28">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight">Interests</h2>
                        <p className="text-zinc-400">Music & Personal tastes</p>
                    </div>
                    <div className="h-px flex-1 md:block" />
                </div>

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
