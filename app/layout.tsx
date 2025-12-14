import "./globals.css"
import { Providers } from "./providers"
import { AnimatedBackground } from "@/components/animated-background"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://hochu-portfolio.vercel.app"),
  title: {
    default: "Hochu Shunsuke - Portfolio",
    template: "%s | Hochu Shunsuke"
  },
  description: "Experience Designに特化したWebデベロッパー。HR企業のエンジニアとして求人サービスの開発、イベントの企画運営、誰かの心に触れるプロダクトづくりに取り組んでいます。",
  keywords: ["Web開発", "Webデザイン", "hochu", "Hochu", "Experience Design", "Next.js", "React", "TypeScript", "ポートフォリオ", "名古屋", "HRテック", "エンジニア"],
  authors: [{ name: "Hochu Shunsuke", url: "https://hochu-portfolio.vercel.app" }],
  creator: "Hochu Shunsuke",
  publisher: "Hochu Shunsuke",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://hochu-portfolio.vercel.app",
    title: "Hochu Shunsuke - Portfolio",
    description: "Experience Designに特化したWebデベロッパー。誰かの心に触れるプロダクトづくりを目指しています。",
    siteName: "Hochu Shunsuke Portfolio",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Hochu Shunsuke Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hochu Shunsuke - Portfolio",
    description: "Experience Designに特化したWebデベロッパー。誰かの心に触れるプロダクトづくりを目指しています。",
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        {/* Preconnect to Spotify domains for better performance */}
        <link rel="preconnect" href="https://encore.scdn.co" />
        <link rel="preconnect" href="https://open.spotify.com" />
        <link rel="preconnect" href="https://mosaic.scdn.co" />
        <link rel="preconnect" href="https://embed-cdn.spotifycdn.com" />
        <link rel="dns-prefetch" href="https://encore.scdn.co" />
        <link rel="dns-prefetch" href="https://open.spotify.com" />
      </head>
      <SpeedInsights />
      <body className={inter.className} suppressHydrationWarning>
        <Providers>
          <AnimatedBackground />
          {children}
        </Providers>
      </body>
    </html>
  )
}

