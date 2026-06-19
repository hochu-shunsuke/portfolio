import "./globals.css"
import type { Metadata } from "next"
import { Inter, Noto_Sans_JP } from "next/font/google"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const notoSansJP = Noto_Sans_JP({ subsets: ["latin"], variable: "--font-noto", weight: ["400", "700"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://hochu-portfolio.vercel.app"),
  title: {
    default: "Hochu Shunsuke - Portfolio",
    template: "%s | Hochu Shunsuke"
  },
  description: "プロダクト志向のエンジニア。AIを道具に、0→1でプロダクトを形にします。寳中俊介のポートフォリオ。",
  keywords: ["寳中俊介", "Hochu Shunsuke", "hochu", "ポートフォリオ", "プロダクト志向", "エンジニア", "Next.js", "React", "TypeScript", "Python", "AI", "名古屋", "Earth Trend"],
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
    description: "プロダクト志向のエンジニア。AIを道具に、0→1でプロダクトを形にします。",
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
    description: "プロダクト志向のエンジニア。AIを道具に、0→1でプロダクトを形にします。",
    images: ["/opengraph-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "YD90DkHZpe33JMbQZRIiMI8qE8xhTyFeR4rAy4RxQZU",
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
      <body className={`${inter.variable} ${notoSansJP.variable} font-sans`} suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Hochu Shunsuke",
              url: "https://hochu-portfolio.vercel.app",
              image: "https://github.com/hochu-shunsuke.png",
              sameAs: [
                "https://github.com/hochu-shunsuke",
                "https://www.instagram.com/macho_hochu",
              ],
              jobTitle: "Web Engineer",
              knowsAbout: ["Next.js", "TypeScript", "React", "Supabase", "Web開発", "UXデザイン"],
            }),
          }}
        />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-6DHZL59X6T" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-6DHZL59X6T');
        `}</Script>
        <SpeedInsights />
        {children}
      </body>
    </html>
  )
}

