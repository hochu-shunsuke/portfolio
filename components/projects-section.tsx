"use client"

import { SectionHeading } from "@/components/section-heading"
import { ProjectCard } from "@/components/project-card"
import { ScrollButton } from "@/components/ui/scroll-button"
import { useRef, useState, useEffect } from "react"

export function ProjectsSection() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  const checkArrows = () => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef
      setShowLeftArrow(current.scrollLeft > 0)
      setShowRightArrow(current.scrollLeft < current.scrollWidth - current.clientWidth - 10)
    }
  }

  useEffect(() => {
    checkArrows()
    window.addEventListener("resize", checkArrows)
    return () => window.removeEventListener("resize", checkArrows)
  }, [])

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
      setTimeout(checkArrows, 300)
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
      setTimeout(checkArrows, 300)
    }
  };

  return (
    <section id="projects" className="py-16 md:py-28">
      <div className="container px-4 md:px-6">
        <SectionHeading title="Projects" subtitle="Selected works and experiments" />
        
        <div className="relative mt-12">
          <ScrollButton direction="left" onClick={scrollLeft} show={showLeftArrow} />
          
          {/* スクロール可能なコンテナ */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory hide-scrollbar"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
            }}
            onScroll={checkArrows}
          >
            {/* 各カードに最大幅と高さの制限を適用 */}
            <div className="w-[300px] md:w-[350px] flex-shrink-0 snap-start">
              <ProjectCard
                title="天気情報アプリ"
                description="リアルタイム天気情報を提供するアプリ。モダンな開発の練習。"
                tags={["Next.js", "OpenWeather API", "supabase", "Github Actions"]}
                imageUrl="/images/hochu-weather.png"
                link="https://hochu-weather.vercel.app"
              />
            </div>
            <div className="w-[300px] md:w-[350px] flex-shrink-0 snap-start">
              <ProjectCard
                title="E-Commerce Platform"
                description="A modern e-commerce solution with seamless checkout experience"
                tags={["Next.js", "Stripe", "Tailwind"]}
                imageUrl="/placeholder.svg?height=200&width=300"
                link="/projects/ecommerce"
              />
            </div>
            <div className="w-[300px] md:w-[350px] flex-shrink-0 snap-start">
              <ProjectCard
                title="AI Dashboard"
                description="Data visualization dashboard for AI analytics"
                tags={["TypeScript", "D3.js", "API"]}
                imageUrl="/placeholder.svg?height=200&width=300"
                link="/projects/ai-dashboard"
              />
            </div>
            <div className="w-[300px] md:w-[350px] flex-shrink-0 snap-start">
              <ProjectCard
                title="Blog Platform"
                description="Modern blogging platform with markdown support"
                tags={["React", "MDX", "Vercel"]}
                imageUrl="/placeholder.svg?height=200&width=300"
                link="/projects/blog-platform"
              />
            </div>
            <div className="w-[300px] md:w-[350px] flex-shrink-0 snap-start">
              <ProjectCard
                title="Photo Gallery"
                description="Dynamic photo gallery with filtering options"
                tags={["React", "Firebase", "CSS Grid"]}
                imageUrl="/placeholder.svg?height=200&width=300"
                link="/projects/photo-gallery"
              />
            </div>
            <div className="w-[300px] md:w-[350px] flex-shrink-0 snap-start">
              <ProjectCard
                title="Task Manager"
                description="Collaborative task management application"
                tags={["Vue.js", "Node.js", "MongoDB"]}
                imageUrl="/placeholder.svg?height=200&width=300"
                link="/projects/task-manager"
              />
            </div>
          </div>
          
          <ScrollButton direction="right" onClick={scrollRight} show={showRightArrow} />
          
          {/* スクロールインジケーター */}
          <div className="flex justify-center gap-2 mt-6">
            <div className="h-1 w-12 bg-zinc-700 rounded-full"></div>
            <div className="h-1 w-6 bg-zinc-800 rounded-full"></div>
            <div className="h-1 w-6 bg-zinc-800 rounded-full"></div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}
