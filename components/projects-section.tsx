"use client"

import { SectionHeading } from "@/components/section-heading"
import { ProjectCard } from "@/components/project-card"
import { ScrollButton } from "@/components/ui/scroll-button"
import { CustomScrollArea } from "@/components/ui/custom-scroll-area"
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
          
          <CustomScrollArea 
            ref={scrollContainerRef}
            className="pb-6"
            onScroll={checkArrows}
          >
            <div className="flex gap-6 min-w-max px-1">
              <div className="w-[300px] md:w-[350px] flex-shrink-0">
                <ProjectCard
                  title="天気情報アプリ"
                  description="リアルタイム天気情報を提供するアプリ。モダンな開発の練習。"
                  tags={["Next.js", "OpenWeather API", "supabase", "Github Actions"]}
                  imageUrl="/images/hochu-weather.png"
                  link="https://hochu-weather.vercel.app"
                />
              </div>
              <div className="w-[300px] md:w-[350px] flex-shrink-0">
                <ProjectCard
                  title="Salesforceデータから自動PDF生成"
                  description="SalesforceとGoogleDriveを連携して、自動的にPDFを生成するシステム。"
                  tags={["GoogleAppsScript", "GoogleDrive", "Salesforce"]}
                  imageUrl="/images/salesforce2pdf.png?width=300"
                  link="/404"
                />
              </div>
              <div className="w-[300px] md:w-[350px] flex-shrink-0">
                <ProjectCard
                  title="Hochuitter"
                  description="Twitter x 掲示板の多機能SNSアプリ。豊富なカスタマイズ性。スケーラビリティの強化中。"
                  tags={["Django", "Django Channels", "sqlite"]}
                  imageUrl="/images/hochuitter.jpg?height=200&width=300"
                  link="https://github.com/hochu-shunsuke/Hochuitter"
                />
              </div>
              <div className="w-[300px] md:w-[350px] flex-shrink-0">
                <ProjectCard
                  title="Portfolio"
                  description="AIツールを使って短期間で効率的に実装。AI活用を強みとしている。"
                  tags={["Next.js", "TypeScript", "vercel", "AI"]}
                  imageUrl="/images/hochu-portfolio.png?height=200&width=300"
                  link="https://hochu-portfolio.vercel.app"
                />
              </div>
              <div className="w-[300px] md:w-[350px] flex-shrink-0">
                <ProjectCard
                  title="ネットワーク構築"
                  description="CiscoPacketTracerを用いた実践的なネットワーク構築。ネスペの取得を目指す。"
                  tags={["CiscoPacketTracer", "Cisco"]}
                  imageUrl="/images/network-studying.jpg?height=200&width=300"
                  link="/404"
                />
              </div>
              <div className="w-[300px] md:w-[350px] flex-shrink-0">
                <ProjectCard
                  title="アンケート+アイデアプラットフォーム"
                  description="2024年人生初のハッカソンでバックエンドを担当。チームメイトと30日間協力して完成。"
                  tags={["Django", "sqlite"]}
                  imageUrl="/images/hacku.png?height=200&width=300"
                  link="https://github.com/hochu-shunsuke/Hack-U-2024"
                />
              </div>
              <div className="w-[300px] md:w-[350px] flex-shrink-0">
                <ProjectCard
                  title="AI Dashboard"
                  description="Data visualization dashboard for AI analytics"
                  tags={["TypeScript", "D3.js", "API"]}
                  imageUrl="/placeholder.svg?height=200&width=300"
                  link="/projects/ai-dashboard"
                />
              </div>
              <div className="w-[300px] md:w-[350px] flex-shrink-0">
                <ProjectCard
                  title="Blog Platform"
                  description="Modern blogging platform with markdown support"
                  tags={["React", "MDX", "Vercel"]}
                  imageUrl="/placeholder.svg?height=200&width=300"
                  link="/projects/blog-platform"
                />
              </div>
              <div className="w-[300px] md:w-[350px] flex-shrink-0">
                <ProjectCard
                  title="Photo Gallery"
                  description="Dynamic photo gallery with filtering options"
                  tags={["React", "Firebase", "CSS Grid"]}
                  imageUrl="/placeholder.svg?height=200&width=300"
                  link="/projects/photo-gallery"
                />
              </div>
              <div className="w-[300px] md:w-[350px] flex-shrink-0">
                <ProjectCard
                  title="Task Manager"
                  description="Collaborative task management application"
                  tags={["Vue.js", "Node.js", "MongoDB"]}
                  imageUrl="/placeholder.svg?height=200&width=300"
                  link="/projects/task-manager"
                />
              </div>
            </div>
          </CustomScrollArea>
          
          <ScrollButton direction="right" onClick={scrollRight} show={showRightArrow} />
        </div>
      </div>
    </section>
  )
}
