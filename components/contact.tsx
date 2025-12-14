"use client"

import { Button } from "@/components/ui/button"
import { socialLinks } from "@/lib/data"
import { motion } from "framer-motion"

// ソーシャルリンクボタンコンポーネント（コンタクト用）
const SocialLinkButton = ({ link }: { link: typeof socialLinks[0] }) => {
    const IconComponent = link.icon

    return (
        <Button
            variant="outline"
            size="icon"
            onClick={() => window.open(link.href, '_blank', 'noopener,noreferrer')}
            className="border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 hover:bg-zinc-900 transition-all focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
            <IconComponent className="h-4 w-4" />
            <span className="sr-only">{link.name}</span>
        </Button>
    )
}

// メインのコンタクトセクション
export function Contact() {
    return (
        <section id="contact" className="py-16 md:py-28">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight">Contact</h2>
                            <p className="text-zinc-400">Get in touch for collaborations</p>
                        </div>
                        <div className="h-px flex-1 md:block" />
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="grid gap-6 lg:grid-cols-2 lg:gap-12 mt-12"
                >
                    <div className="space-y-4">
                        <p className="text-zinc-400">
                            新しいプロジェクトやアイデア、一緒に何かできそうなことがあれば、お気軽にご連絡ください！
                        </p>
                        <small className="text-zinc-400">
                            If you have any new projects, ideas, or opportunities we might be able to collaborate on, feel free to reach out!
                        </small>
                        <div className="flex space-x-4">
                            {socialLinks.map((link) => (
                                <SocialLinkButton key={link.name} link={link} />
                            ))}
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="grid gap-4">
                            <div className="grid gap-2">
                                <p className="text-sm font-medium text-zinc-400">Email</p>
                                <p className="font-mono text-sm">hochu.shunsuke.dev@gmail.com</p>
                            </div>
                            <div className="grid gap-2">
                                <p className="text-sm font-medium text-zinc-400">Location</p>
                                <p className="font-mono text-sm">Nagoya, Japan</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
