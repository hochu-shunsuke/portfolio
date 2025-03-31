"use client"

import { useInView } from "react-intersection-observer"
import { useRef } from "react"

interface TimelineItem {
  year: string
  title: string
  company: string
  description: string
}

interface TimelineProps {
  items: TimelineItem[]
}

export function Timeline({ items }: TimelineProps) {
  const refs = useRef<(HTMLElement | null)[]>([])

  return (
    <div className="relative">
      <div className="absolute left-4 top-0 bottom-0 w-px bg-zinc-800 md:left-1/2 md:-ml-px"></div>
      <div className="space-y-12">
        {items.map((item, index) => {
          if (!refs.current[index]) {
            refs.current[index] = null
          }

          const { ref, inView } = useInView({
            threshold: 0.1,
            triggerOnce: true,
          })

          return (
            <div
              key={index}
              ref={(el) => {
                refs.current[index] = el
                ref(el)
              }}
              className={`relative md:grid md:grid-cols-2 md:gap-8 transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className={`md:text-right ${index % 2 === 0 ? "md:col-start-1" : "md:col-start-2"}`}>
                <div className="mb-2 text-xl font-bold">{item.title}</div>
                <div className="mb-1 text-sm text-zinc-400">{item.company}</div>
                <div className="text-sm text-zinc-500">{item.year}</div>
              </div>
              <div className={index % 2 === 0 ? "md:col-start-2" : "md:col-start-1 md:text-right"}>
                <div className="relative flex items-center">
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 -translate-y-1/2 h-4 w-4 rounded-full border-2 border-zinc-800 bg-black"></div>
                  <div className="pl-8 md:pl-0">{item.description}</div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

