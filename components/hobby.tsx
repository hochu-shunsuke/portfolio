"use client"

import { ScrollableSection } from "@/components/ui/scrollable-section"
import { musicPlaylists, travelLocations } from "@/lib/data"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

interface HobbyMusicCardProps {
    spotifyUrl: string
}

// 音楽カードコンポーネント
function HobbyMusicCard({ spotifyUrl }: HobbyMusicCardProps) {
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
            { rootMargin: "200px" }
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
                    style={{ borderRadius: '12px' }}
                    src={spotifyUrl}
                    width="100%"
                    height="100%"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                    loading="lazy"
                    tabIndex={-1}
                    className="border-none h-full w-full transition-all duration-300 group-hover:shadow-lg group-hover:shadow-zinc-900/20"
                />
            ) : (
                <div className="w-full h-full bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center">
                    <div className="text-zinc-500">Loading...</div>
                </div>
            )}
        </div>
    )
}

// マップカードコンポーネント (Updated for larger display)
function HobbyMapCard({ googleMapUrl }: { googleMapUrl: string }) {
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
            { rootMargin: "200px" }
        )

        if (iframeRef.current) {
            observer.observe(iframeRef.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <div ref={iframeRef} className="w-full group flex flex-col gap-3">
            <div className="h-[480px] w-full relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 group-hover:border-emerald-500/50 transition-colors duration-300">
                {isVisible ? (
                    <iframe
                        title="Google Map"
                        src={googleMapUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                    />
                ) : (
                    <div className="flex items-center justify-center h-full w-full">
                        <div className="text-zinc-500 flex flex-col items-center gap-2">
                            <span>Loading Map...</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

// メインのホビーセクション
export function Hobby() {
    return (
        <section id="hobby" className="py-16 md:py-28 overflow-hidden">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight">Hobby</h2>
                            <p className="text-zinc-400">Travel and Music</p>
                        </div>
                    </div>
                </motion.div>

                {/* Travel/Map Section - Not Scrollable, Full Width Feature */}
                <div>
                    <h3 className="text-xl font-semibold mb-6 text-zinc-300 flex items-center gap-2">
                        <span className="w-1 h-6 rounded-full inline-block"></span>
                        Travel
                    </h3>
                    <div className="max-w-5xl mx-auto grid grid-cols-1 gap-8">
                        {travelLocations.map((location, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <HobbyMapCard
                                    googleMapUrl={location.googleMapUrl}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Music Section */}
                <div className="mb-24 mt-24">
                    <h3 className="text-xl font-semibold mb-6 text-zinc-300 flex items-center gap-2">
                        <span className="w-1 h-6 rounded-full inline-block"></span>
                        Music Playlists
                    </h3>
                    <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw]">
                        <ScrollableSection
                            itemCount={musicPlaylists.length}
                            itemWidth={374}
                            scrollAmount={300}
                            enableDrag={true}
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
                                        <HobbyMusicCard
                                            spotifyUrl={playlist.spotifyUrl}
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        </ScrollableSection>
                    </div>
                </div>
            </div>
        </section>
    )
}
