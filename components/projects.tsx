import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { projectsData } from "@/lib/data"
import { Section } from "./section"
import { Reveal } from "./reveal"

type Project = (typeof projectsData)[number]

function CardInner({ project, hasLink }: { project: Project; hasLink: boolean }) {
  return (
    <>
      <div className="relative aspect-[3/2] overflow-hidden border-b border-border bg-muted">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 100vw, 440px"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-semibold tracking-tight">{project.title}</h3>
          {hasLink && (
            <ArrowUpRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
          )}
        </div>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </>
  )
}

const cardClass =
  "group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-foreground/30"

export function Projects() {
  const projects = projectsData.filter((p) => !p.featured)

  return (
    <Section label="Work">
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={(i % 2) * 0.05}>
            {project.link ? (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className={cardClass}>
                <CardInner project={project} hasLink />
              </a>
            ) : (
              <div className={cardClass}>
                <CardInner project={project} hasLink={false} />
              </div>
            )}
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
