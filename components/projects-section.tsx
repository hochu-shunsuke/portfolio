"use client"

import { SectionHeading } from "@/components/section-heading"
import { ProjectCard } from "@/components/project-card"
import { ScrollableSection } from "@/components/ui/scrollable-section"
import { projectsData } from "@/lib/data"

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-28">
      <div className="container px-4 md:px-6">
        <SectionHeading title="Projects" subtitle="Selected works and experiments" />

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

