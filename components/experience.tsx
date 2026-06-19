import { experiencesData } from "@/lib/data"
import { Section } from "./section"
import { Reveal } from "./reveal"

export function Experience() {
  return (
    <Section id="experience" label="Experience">
      <div className="relative">
        {/* 縦線 */}
        <div className="absolute left-[5px] top-2 h-[calc(100%-1rem)] w-px bg-border" aria-hidden />

        <ol className="space-y-9">
          {experiencesData.map((item, i) => (
            <li key={i} className="relative pl-8">
              <span
                className="absolute left-0 top-[7px] h-[11px] w-[11px] rounded-full border-2 border-background bg-foreground"
                aria-hidden
              />
              <Reveal delay={Math.min(i * 0.04, 0.2)}>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {item.date}
                </p>
                <div className="mt-1.5 flex flex-wrap items-center gap-2">
                  <h3 className="font-semibold tracking-tight">{item.title}</h3>
                  <span className="rounded-full border border-border px-2 py-0.5 text-[11px] text-muted-foreground">
                    {item.type}
                  </span>
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  )
}
