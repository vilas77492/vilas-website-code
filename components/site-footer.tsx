import { Logo } from '@/components/logo'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background py-8">
      <div className="mx-auto flex max-w-[1232px] flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between lg:px-0">
        <Logo compact />
        <div className="flex items-center gap-6 font-mono text-[11px] uppercase tracking-[0.2em] text-dim">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-primary"
          >
            LinkedIn
          </a>
          <span aria-hidden="true" className="h-4 w-px bg-border" />
          <span>© 2026 Technoholic Electronic Solutions</span>
        </div>
      </div>
    </footer>
  )
}
