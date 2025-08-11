"use client"

import { SectionHeading } from "@/components/section-heading"
import { ProjectCard } from "@/components/project-card"
import { ScrollButton } from "@/components/ui/scroll-button"
import { ScrollIndicator } from "@/components/ui/scroll-indicator"
import { useMouseDrag } from "@/hooks/use-mouse-drag"
import { useState, useEffect } from "react"

// プロジェクトデータの設定
const projectsData = [
  {
    title: "SNS開発",
    description: "Twitter x 掲示板の多機能SNSアプリ。豊富なカスタマイズ性。スケーラビリティの強化中。",
    tags: ["Django", "Django Channels", "sqlite"],
    imageUrl: "/images/hochuitter.jpg?height=200&width=300",
    link: "https://github.com/hochu-shunsuke/Hochuitter"
  },
  {
    title: "HackU 2024",
    description: "2024年人生初のハッカソンでバックエンドを担当。チームメイトと30日間協力して完成。",
    tags: ["Django", "sqlite"],
    imageUrl: "/images/hacku.png?height=200&width=300",
    link: "https://github.com/hochu-shunsuke/Hack-U-2024"
  },
  {
    title: "ハッカソンイベントの企画運営",
    description: "2025年インターン先で複数のハッカソンイベントを企画・運営。",
    tags: [],
    imageUrl: "/images/AI-hackathon.png?height=200&width=300",
    link: ""
  },
  {
    title: "天気情報アプリ",
    description: "リアルタイム天気情報を提供するアプリ。モダンな開発の練習。",
    tags: ["Next.js", "OpenWeather API", "supabase", "Github Actions"],
    imageUrl: "/images/hochu-weather.png",
    link: "https://hochu-weather.vercel.app"
  },
  {
    title: "ネットワーク構築",
    description: "CiscoPacketTracerを用いた実践的なネットワーク構築。ネスペの取得を目指す。",
    tags: ["CiscoPacketTracer", "Cisco"],
    imageUrl: "/images/network-studying.jpg?height=200&width=300",
    link: "/404"
  },
  {
    title: "Salesforceデータから自動PDF生成",
    description: "SalesforceとGoogleDriveを連携して、自動的にPDFを生成するシステム。",
    tags: ["GoogleAppsScript", "GoogleDrive", "Salesforce"],
    imageUrl: "/images/salesforce2pdf.png?width=300",
    link: "/404"
  },
  {
    title: "Portfolio",
    description: "AIツールを使って短期間で効率的に実装。AI活用を強みとしている。",
    tags: ["Next.js", "TypeScript", "vercel", "AI"],
    imageUrl: "/images/hochu-portfolio.png?height=200&width=300",
    link: "https://hochu-portfolio.vercel.app"
  }
]

export function ProjectsSection() {
  // 既存のマウスドラッグ機能を保持
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)

  const checkArrows = () => {
    if (ref.current) {
      const element = ref.current
      const isAtStart = element.scrollLeft <= 5
      const isAtEnd = element.scrollLeft >= element.scrollWidth - element.clientWidth - 5
      
      setShowLeftArrow(!isAtStart)
      setShowRightArrow(!isAtEnd)

      // インジケーター用のインデックス計算
      const cardWidth = 320
      const index = Math.round(element.scrollLeft / cardWidth)
      setCurrentIndex(Math.min(index, projectsData.length - 1))
    }
  }

  const { ref, isGrabbing, scrollTo } = useMouseDrag({
    onScroll: checkArrows
  })

  useEffect(() => {
    checkArrows()
    window.addEventListener("resize", checkArrows)
    return () => window.removeEventListener("resize", checkArrows)
  }, [])

  const scrollLeft = () => {
    if (ref.current) {
      ref.current.scrollBy({ left: -300, behavior: 'smooth' })
      setTimeout(checkArrows, 300)
    }
  }

  const scrollRight = () => {
    if (ref.current) {
      ref.current.scrollBy({ left: 300, behavior: 'smooth' })
      setTimeout(checkArrows, 300)
    }
  }

  return (
    <section id="projects" className="py-16 md:py-28">
      <div className="container px-4 md:px-6">
        <SectionHeading title="Projects" subtitle="Selected works and experiments" />
        
        <div className="relative mt-12">
          <ScrollButton direction="left" onClick={scrollLeft} show={showLeftArrow} />
          
          <div 
            ref={ref}
            className={`overflow-x-auto pb-6 scrollbar-hide ${isGrabbing ? 'select-none' : ''}`}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onScroll={checkArrows}
          >
            <div className="flex gap-4 md:gap-6 px-4 md:px-6" style={{ width: 'max-content' }}>
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
          </div>
          
          <ScrollButton direction="right" onClick={scrollRight} show={showRightArrow} />
        </div>

        {/* スクロールインジケーター - モバイルのみ表示 */}
        <ScrollIndicator 
          itemCount={projectsData.length}
          currentIndex={currentIndex}
        />
      </div>
    </section>
  )
}
