"use client"

import { ScrollableSection } from "@/components/ui/scrollable-section"
import { musicPlaylists } from "@/lib/data"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

interface InterestsMusicCardProps {
    spotifyUrl: string
}

// 音楽カードコンポーネント
function InterestsMusicCard({ spotifyUrl }: InterestsMusicCardProps) {
    const [isVisible, setIsVisible] = useState(false)
    const iframeRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true)
                        observer.disconnect()
                    }
                })
            },
            { rootMargin: "1000px" } // Load well before user reaches the section
        )

        if (iframeRef.current) {
            observer.observe(iframeRef.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <div ref={iframeRef} className="w-full h-[450px] transition-transform duration-300 hover:scale-[1.02] group">
            {isVisible ? (
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
                    tabIndex={-1}
                    className="border-none transition-all duration-300 group-hover:shadow-lg group-hover:shadow-zinc-900/20"
                />
            ) : (
                <div className="w-full h-full bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center">
                    <div className="text-zinc-500">Loading...</div>
                </div>
            )}
        </div>
    )
}

// メインの興味セクション
export function Interests() {
    return (
        <section id="interests" className="py-16 md:py-28">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight">Interests</h2>
                            <p className="text-zinc-400">Music & Personal tastes</p>
                        </div>
                        <div className="h-px flex-1 md:block" />
                    </div>
                </motion.div>

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
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="w-[300px] md:w-[350px] flex-shrink-0"
                                >
                                    <InterestsMusicCard
                                        spotifyUrl={playlist.spotifyUrl}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </ScrollableSection>
                </div>
            </div>
        </section>
    )
}
