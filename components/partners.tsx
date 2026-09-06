import { partners } from '@/lib/content'
import { SectionHeading } from '@/components/section-heading'

export function Partners() {
  return (
    <section id="partners" className="scroll-mt-16 bg-background py-24 lg:py-32">
      <div className="mx-auto flex max-w-[1232px] flex-col gap-16 px-6 lg:px-0">
        <SectionHeading eyebrow="Ecosystem" title="Integrated Partners" />

        <ul className="grid grid-cols-2 gap-px bg-border lg:grid-cols-4">
          {partners.map((partner, i) => (
            <li
              key={partner}
              className="flex flex-col items-center justify-center gap-5 bg-background px-6 py-12 text-center transition-colors hover:bg-surface"
            >
              <span className="font-mono text-xs text-dim">{String(i + 1).padStart(2, '0')}</span>
              <span className="font-serif text-lg uppercase text-foreground">{partner}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
