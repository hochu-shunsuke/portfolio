import { skillGroups } from "@/lib/data"
import { Section } from "./section"
import { Reveal } from "./reveal"

export function Skills() {
  return (
    <Section id="skills" label="Skills">
      <div className="space-y-8">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.05}>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-6">
              <h3 className="w-40 flex-shrink-0 text-sm font-medium text-muted-foreground">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-border px-3 py-1.5 text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
