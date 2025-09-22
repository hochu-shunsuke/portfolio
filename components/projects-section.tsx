"use client"

import { SectionHeading } from "@/components/section-heading"
import { ProjectCard } from "@/components/project-card"
import { ScrollableSection } from "@/components/ui/scrollable-section"

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
    title: "ハッカソンイベントの企画運営",
    description: "2025年インターン先で複数のハッカソンイベントを企画・運営。",
    tags: [],
    imageUrl: "/images/AI-hackathon.png?width=300",
    link: ""
  },
  {
    title: "HackU 2024",
    description: "2024年人生初のハッカソンでバックエンドを担当。チームメイトと30日間協力して完成。",
    tags: ["Django", "sqlite"],
    imageUrl: "/images/hacku.png?height=200&width=300",
    link: "https://github.com/hochu-shunsuke/Hack-U-2024"
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
  return (
    <section id="projects" className="py-16 md:py-28">
      <div className="container px-4 md:px-6">
        <SectionHeading title="Projects" subtitle="Selected works and experiments" />
        
        <div className="mt-12">
          <ScrollableSection
            itemCount={projectsData.length}
            itemWidth={374} // デスクトップ: カード350px + ギャップ24px
            scrollAmount={300}
            enableDrag={true}
            showIndicator={true}
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
          </ScrollableSection>
        </div>
      </div>
    </section>
  )
}
