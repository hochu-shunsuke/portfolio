"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { profile } from "@/lib/data"
import { SocialLinks } from "./social-links"

export function Hero() {
  return (
    <section id="top" className="px-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto flex min-h-[88vh] max-w-4xl flex-col justify-center py-24"
      >
        <Image
          src={profile.avatar}
          alt={profile.nameEn}
          width={72}
          height={72}
          priority
          className="mb-8 h-16 w-16 rounded-full border border-border"
        />

        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">{profile.name}</h1>
        <p className="mt-3 text-base text-muted-foreground md:text-lg">
          {profile.role}
          <span className="mx-2 text-border">/</span>
          {profile.location}
        </p>

        <p className="mt-8 max-w-xl text-balance text-base leading-relaxed text-foreground/80 md:text-lg">
          {profile.lead}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="inline-flex items-center rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            制作物を見る
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
          >
            連絡する
          </a>
          <SocialLinks className="sm:ml-2" />
        </div>
      </motion.div>
    </section>
  )
}
