import "./globals.css"
import { Providers } from "./providers"
import { AnimatedBackground } from "@/components/animated-background"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.dev",
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
