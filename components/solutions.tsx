import { Flame, KeyRound, Radar, ShieldCheck, User, Video, Zap } from 'lucide-react'
import { solutions, type SolutionIcon } from '@/lib/content'
import { SectionHeading } from '@/components/section-heading'

const icons: Record<SolutionIcon, React.ComponentType<{ className?: string }>> = {
  key: KeyRound,
  video: Video,
  radar: Radar,
  flame: Flame,
  zap: Zap,
  shield: ShieldCheck,
  user: User,
}

export function Solutions() {
  return (
    <section id="solutions" className="scroll-mt-16 bg-surface-deep py-24 lg:py-32">
      <div className="mx-auto flex max-w-[1232px] flex-col gap-16 px-6 lg:px-0">
        <SectionHeading
          eyebrow="Core Areas"
          title="Our Solutions"
          align="split"
          description="Seven integrated solution pillars covering the full spectrum of electronic security and safety systems."
        />

        <ol className="grid border-t border-l border-border md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, i) => {
            const Icon = icons[solution.icon]
            const isLast = i === solutions.length - 1
            return (
              <li
                key={solution.title}
                className={`group flex flex-col gap-6 border-r border-b border-border p-8 transition-colors hover:bg-surface ${
                  isLast ? 'md:col-span-2 lg:col-span-3' : ''
                }`}
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-5xl text-secondary transition-colors group-hover:text-primary/40">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <Icon className="size-5 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-xl uppercase text-foreground">{solution.title}</h3>
                <p
                  className={`text-sm leading-relaxed text-muted-foreground ${isLast ? 'max-w-5xl' : ''}`}
                >
                  {solution.body}
                </p>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
