import { aboutParagraphs } from "@/lib/data"
import { Section } from "./section"
import { Reveal } from "./reveal"

export function About() {
  return (
    <Section id="about" label="About">
      <div className="space-y-6">
        {aboutParagraphs.map((text, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <p className="text-base leading-relaxed text-foreground/80 md:text-lg">{text}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
