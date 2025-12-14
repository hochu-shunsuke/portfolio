"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ScrollButton } from "@/components/ui/scroll-button"
import { useUnifiedScroll } from "@/hooks/use-unified-scroll"
import { techStackItems } from "@/lib/data"

interface TechItem {
    name: string
    logo: string
}

interface TechStackProps {
    items: TechItem[]
}

// Tech Stack コンポーネント
function TechStack({ items }: TechStackProps) {
    const {
        scrollRef,
        showLeftArrow,
        showRightArrow,
        scrollLeft,
        scrollRight,
        isGrabbing,
        dragProps
    } = useUnifiedScroll({
        itemCount: items.length,
        itemWidth: 136, // デスクトップ: min-w-[120px] + gap 16px
        scrollAmount: 200,
        enableDrag: true
    })

    return (
        <div className="relative w-full">
            <ScrollButton direction="left" onClick={scrollLeft} show={showLeftArrow} />

            <div
                ref={scrollRef}
                className={`overflow-x-auto py-6 scrollbar-hide ${isGrabbing ? 'select-none' : ''}`}
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                {...dragProps}
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

            <ScrollButton direction="right" onClick={scrollRight} show={showRightArrow} />
        </div>
    )
}

// メインのスキルセクション
export function Skills() {
    return (
        <section id="skills" className="py-16 md:py-28">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight">Skills</h2>
                        <p className="text-zinc-400">Technical proficiency and expertise</p>
                    </div>
                    <div className="h-px flex-1 md:block" />
                </div>

                {/* Tech Stack Heading */}
                <div className="max-w-2xl mx-auto text-center mt-12 mb-12">
                    <h3 className="text-xl font-bold mb-4">Tech Stack</h3>
                    <p className="text-zinc-400">
                        I work with modern technologies to create performant and scalable applications. My toolkit includes frontend
                        frameworks, backend technologies, and design tools.
                    </p>
                </div>

                {/* Full-width Tech Stack */}
                <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] mb-20">
                    <TechStack items={techStackItems} />
                </div>
            </div>
        </section>
    )
}
