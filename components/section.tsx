import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { Reveal } from "./reveal"

// 共通のセクション枠。eyebrow ラベル付き。
export function Section({
  id,
  label,
  children,
  className,
}: {
  id?: string
  label?: string
  children: ReactNode
  className?: string
}) {
  return (
    <section id={id} className={cn("px-6 py-20 md:py-28", className)}>
      <div className="mx-auto max-w-4xl">
        {label && (
          <Reveal>
            <p className="mb-12 text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
              {label}
            </p>
          </Reveal>
        )}
        {children}
      </div>
    </section>
  )
}
