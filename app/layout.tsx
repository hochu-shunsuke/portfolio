import "./globals.css"
import { Providers } from "./providers"
import { AnimatedBackground } from "@/components/animated-background"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Hochu Portfolio",
    template: "%s | Hochu Shunsuke"
  },
  description: "Web Developer & AI Enthusiast based in Nagoya, Japan.",
  keywords: ["Web Developer", "Next.js", "React", "Portfolio", "Hochu Shunsuke"],
  authors: [{ name: "Hochu Shunsuke" }],
  creator: "Hochu Shunsuke",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://hochu-portfolio.vercel.app",
    title: "Hochu Portfolio",
    description: "Web Developer & AI Enthusiast based in Nagoya, Japan.",
    siteName: "Hochu Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hochu Portfolio",
    description: "Web Developer & AI Enthusiast based in Nagoya, Japan.",
    creator: "",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <SpeedInsights />
      <body className={inter.className}>
        <Providers>
          <AnimatedBackground />
          {children}
        </Providers>
      </body>
    </html>
  )
}

