import { ArrowUpRight } from "lucide-react"
import { Section } from "./section"
import { Reveal } from "./reveal"
import { SocialLinks } from "./social-links"

const EMAIL = "hochu.shunsuke.dev@gmail.com"

export function Contact() {
  return (
    <Section id="contact" label="Contact">
      <Reveal>
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
          お気軽にご連絡ください
        </h2>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
          新しいプロジェクトやアイデア、一緒に何かできそうなことがあれば、ぜひお話ししましょう。
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            メールを送る
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <SocialLinks />
        </div>

        <p className="mt-6 font-mono text-sm text-muted-foreground">{EMAIL}</p>
      </Reveal>
    </Section>
  )
}
