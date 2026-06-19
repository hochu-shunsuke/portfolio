import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { projectsData } from "@/lib/data"
import { Section } from "./section"
import { Reveal } from "./reveal"

export function Featured() {
  const project = projectsData.find((p) => p.featured)
  if (!project) return null

  return (
    <Section id="work" label="Featured">
      <Reveal>
        <a
          href={project.link || undefined}
          target={project.link ? "_blank" : undefined}
          rel={project.link ? "noopener noreferrer" : undefined}
          className="group block overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-foreground/30"
        >
          <div className="relative aspect-[16/9] overflow-hidden border-b border-border bg-muted">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 896px"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
          <div className="p-6 md:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold tracking-tight md:text-2xl">{project.title}</h3>
                {project.subtitle && (
                  <p className="mt-1 text-sm text-muted-foreground md:text-base">{project.subtitle}</p>
                )}
              </div>
              {project.link && (
                <ArrowUpRight className="mt-1 h-5 w-5 flex-shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
              )}
            </div>

            <p className="mt-4 text-sm leading-relaxed text-foreground/80 md:text-base">
              {project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </a>
      </Reveal>
    </Section>
  )
}
