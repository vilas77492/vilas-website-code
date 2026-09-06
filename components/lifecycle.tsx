import { ChevronRight } from 'lucide-react'
import { lifecycle } from '@/lib/content'
import { SectionHeading } from '@/components/section-heading'

export function Lifecycle() {
  return (
    <section id="services" className="scroll-mt-16 bg-surface-deep py-24 lg:py-32">
      <div className="mx-auto flex max-w-[1232px] flex-col gap-16 px-6 lg:px-0">
        <SectionHeading
          eyebrow="Methodology"
          title="The Complete Lifecycle"
          description="From initial requirements gathering through long-term support — a structured, accountable delivery process that ensures every project succeeds."
        />

        <ol className="flex flex-col lg:ml-6 lg:border-l lg:border-border">
          {lifecycle.map((phase, i) => (
            <li
              key={phase.title}
              className="grid gap-6 border-b border-border py-10 first:pt-0 lg:grid-cols-[176px_1fr] lg:gap-8 lg:border-b-0 lg:py-12 lg:pl-8"
            >
              <div className="flex flex-col gap-3 lg:border-r lg:border-border lg:pr-8">
                <span className="font-mono text-2xl text-primary">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-serif text-base uppercase leading-snug text-foreground">
                  {phase.title}
                </h3>
              </div>
              <ul className="grid gap-x-8 gap-y-4 self-start sm:grid-cols-2 lg:pl-4">
                {phase.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <ChevronRight className="size-3.5 shrink-0 text-primary" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
