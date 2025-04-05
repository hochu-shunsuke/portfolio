import "./globals.css"
import { Providers } from "./providers"
import { AnimatedBackground } from "@/components/animated-background"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "hochu-portfolio",
  description: "Created with v0"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <AnimatedBackground />
          {children}
        </Providers>
      </body>
    </html>
  )
}
