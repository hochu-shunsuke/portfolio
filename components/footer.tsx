import { profile } from "@/lib/data"

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-2 text-sm text-muted-foreground sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.nameEn}
        </p>
        <p>Built with Next.js</p>
      </div>
    </footer>
  )
}
