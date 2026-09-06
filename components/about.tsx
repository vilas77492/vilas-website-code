import { aboutPillars } from '@/lib/content'
import { Eyebrow } from '@/components/section-heading'

export function About() {
  return (
    <section id="about" className="scroll-mt-16 bg-background py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1232px] gap-16 px-6 lg:grid-cols-2 lg:px-0">
        <div className="flex flex-col gap-8">
          <Eyebrow>About TES</Eyebrow>
          <h2 className="font-serif text-5xl uppercase leading-none text-foreground md:text-6xl">
            Strategic Technology Partner
          </h2>
          <div className="flex flex-col gap-6 text-base leading-relaxed text-muted-foreground">
            <p>
              At Technoholices, we aren&apos;t just an external vendor — we are a strategic partner
              committed to powering your digital transformation. Whether you need end-to-end
              technology solutions or specialized tech consulting, we bring the expertise, passion,
              and innovation to make it happen.
            </p>
            <p>
              Our technical mastery, entrepreneurial drive, and uncompromising standards enable us
              to build robust, scalable solutions for every client — delivered on schedule, within
              budget, and to the highest industry benchmarks.
            </p>
          </div>
        </div>

        <ul className="flex flex-col divide-y divide-border">
          {aboutPillars.map((pillar) => (
            <li key={pillar.title} className="flex gap-5 py-8 first:pt-0 last:pb-0">
              <span aria-hidden="true" className="w-0.5 shrink-0 self-stretch bg-primary" />
              <div className="flex flex-col gap-3">
                <h3 className="font-serif text-xl uppercase text-foreground">{pillar.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{pillar.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
