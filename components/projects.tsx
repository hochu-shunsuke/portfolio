"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ScrollableSection } from "@/components/ui/scrollable-section"
import { projectsData } from "@/lib/data"

interface ProjectCardProps {
    title: string
    description: string
    tags: string[]
    imageUrl: string
    link?: string
}

// プロジェクトカードコンポーネント
function ProjectCard({ title, description, tags, imageUrl, link = "#" }: ProjectCardProps) {
    return (
        <Card
            className="overflow-hidden bg-zinc-900 border-zinc-800 transition-all duration-300 hover:border-zinc-700 group w-full h-[450px] flex flex-col"
        >
            <div className="aspect-[3/2] overflow-hidden relative flex-shrink-0">
                <Image
                    src={imageUrl || "/placeholder.svg"}
                    alt={title}
                    width={300}
                    height={200}
                    className="w-full h-auto object-contain"
                    sizes="(max-width: 768px) 280px, 350px"
                />
            </div>
            <CardContent className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-white">{title}</h3>
                <div className="mt-2 text-sm text-zinc-400 max-h-[100px] overflow-y-auto">
                    <p>{description}</p>
                </div>
                <div className="mt-3 max-h-[48px] flex flex-wrap gap-1.5 overflow-hidden">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full bg-zinc-800 px-2 py-0.5 text-xs text-zinc-400 border border-transparent group-hover:border-zinc-700 transition-colors"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </CardContent>
            {link && link !== "#" && (
                <CardFooter className="p-4 pt-0 flex-shrink-0 flex justify-start">
                    <Link href={link} target="_blank" rel="noopener noreferrer">
                        <Button variant="ghost" className="px-0 text-zinc-400 hover:text-white text-sm">
                            View Project <ArrowUpRight className="ml-1 h-4 w-4" />
                        </Button>
                    </Link>
                </CardFooter>
            )}
        </Card>
    )
}

// メインのプロジェクトセクション
export function Projects() {
    return (
        <section id="projects" className="py-16 md:py-28">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
                        <p className="text-zinc-400">Selected works and experiments</p>
                    </div>
                    <div className="h-px flex-1 md:block" />
                </div>

                <div className="mt-12 w-screen relative left-1/2 right-1/2 -mx-[50vw]">
                    <ScrollableSection
                        itemCount={projectsData.length}
                        itemWidth={374} // デスクトップ: カード350px + ギャップ24px
                        scrollAmount={300}
                        enableDrag={true}
                        showIndicator={true}
                    >
                        <div className="flex gap-4 md:gap-6 px-4 md:px-6 max-w-[1400px] mx-auto" style={{ width: 'max-content' }}>
                            {projectsData.map((project, index) => (
                                <div key={index} className="w-[280px] md:w-[350px] flex-shrink-0">
                                    <ProjectCard
                                        title={project.title}
                                        description={project.description}
                                        tags={project.tags}
                                        imageUrl={project.imageUrl}
                                        link={project.link}
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
