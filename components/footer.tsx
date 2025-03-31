export function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row md:py-0">
        <p className="text-center text-sm text-zinc-500 md:text-left">
          © {new Date().getFullYear()} Hochu. All rights reserved.
        </p>
        <p className="text-center text-sm text-zinc-500 md:text-left">Crafted with precision</p>
      </div>
    </footer>
  )
}

