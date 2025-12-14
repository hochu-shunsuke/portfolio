'use client'

import { motion } from 'framer-motion'
import { experiencesData } from '@/lib/data'

export function Experience() {
    return (
        <section id="experience" className="py-16 md:py-28">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
                            <p className="text-zinc-400">My journey in technology and development</p>
                        </div>
                        <div className="h-px flex-1 md:block" />
                    </div>
                </motion.div>

                <div className="relative mx-auto max-w-3xl">
                    {/* Vertical Line */}
                    <div className="absolute left-[19px] top-0 h-full w-[2px] bg-zinc-800 md:left-1/2 md:-ml-[1px]" />

                    {experiencesData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative mb-12 flex flex-col gap-4 md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Timeline Dot */}
                            <div
                                tabIndex={0}
                                role="button"
                                aria-label={`${item.date} - ${item.title}`}
                                className="absolute left-0 top-1 z-10 flex h-10 w-10 items-center justify-center rounded-full border-4 border-[#0a0a0a] bg-zinc-800 md:left-1/2 md:-ml-5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#0a0a0a] cursor-pointer hover:bg-zinc-700 transition-colors"
                            >
                                <div className="h-2.5 w-2.5 rounded-full bg-white" />
                            </div>

                            {/* Content Spacer for Desktop */}
                            <div className="hidden md:block md:w-1/2" />

                            {/* Content Card */}
                            <div className="ml-12 flex flex-col gap-1 md:ml-0 md:w-1/2 md:px-8">
                                <span className="text-sm font-semibold text-zinc-500">{item.date}</span>
                                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                                <div className="mb-2 inline-flex w-fit rounded-full border border-zinc-800 bg-zinc-900/50 px-2.5 py-0.5 text-xs font-medium text-zinc-400">
                                    {item.type}
                                </div>
                                <p className="text-zinc-400 text-sm leading-relaxed">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
