"use client"

import { SectionHeading } from "@/components/section-heading"
import { ProjectCard } from "@/components/project-card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRef } from "react"

export function ProjectsSection() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-16 md:py-28 bg-zinc-950">
      <div className="container px-4 md:px-6">
        <SectionHeading title="Projects" subtitle="Selected works and experiments" />
        
        <div className="relative mt-12">
          {/* スクロールボタン */}
          <button 
            onClick={scrollLeft} 
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-zinc-900/80 p-2 rounded-full shadow-md hover:bg-zinc-800 transition-all hidden md:flex items-center justify-center text-zinc-400 hover:text-white"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          {/* スクロール可能なコンテナ */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory hide-scrollbar"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
            }}
          >
            {/* 各カードに最大幅と高さの制限を適用 */}
            <div className="w-[300px] md:w-[350px] flex-shrink-0 snap-start">
              <ProjectCard
                title="天気情報アプリ"
                description="リアルタイム天気情報を提供するアプリ。位置情報を活用して正確な予報を表示"
                tags={["Next.js", "OpenWeather API", "位置情報", "Github Actions"]}
                imageUrl="/placeholder.svg?height=200&width=300"
                link="/projects/weather-app"
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
          
          {/* 右スクロールボタン */}
          <button 
            onClick={scrollRight} 
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-zinc-900/80 p-2 rounded-full shadow-md hover:bg-zinc-800 transition-all hidden md:flex items-center justify-center text-zinc-400 hover:text-white"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          
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