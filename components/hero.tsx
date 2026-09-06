import Image from 'next/image'
import { heroStats } from '@/lib/content'

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-control-room.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background" />
        <div className="absolute inset-0 grid-overlay" aria-hidden="true" />
      </div>

      <div className="mx-auto flex max-w-[1232px] flex-col px-6 pt-32 lg:px-0 lg:pt-32">
        <p className="flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
          <span aria-hidden="true" className="h-px w-8 bg-primary" />
          Est. Pune, India
        </p>

        <h1 className="mt-12 font-serif text-6xl uppercase leading-[0.95] text-foreground sm:text-8xl lg:text-[112px]">
          Securing
          <br />
          <span className="text-primary">Your World</span>
          <br />
          With Precision
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
          eSecurity systems, safety solutions, IT material supply, installation, and maintenance —
          engineered for enterprises, smart cities, and critical infrastructure across India.
        </p>

        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href="#solutions"
            className="inline-flex h-12 items-center bg-primary px-8 font-serif text-sm uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Our Solutions
          </a>
          <a
            href="#contact"
            className="inline-flex h-12 items-center border border-border px-8 font-serif text-sm uppercase tracking-wider text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            Contact Us
          </a>
        </div>

        <dl className="mt-16 grid grid-cols-2 border-t border-border bg-surface/60 lg:grid-cols-4">
          {heroStats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col gap-2 px-6 py-8 ${i > 0 ? 'border-l border-border' : ''} ${
                i >= 2 ? 'border-t border-border lg:border-t-0' : ''
              } ${i === 2 ? 'border-l-0 lg:border-l' : ''}`}
            >
              <dd className="font-serif text-3xl text-primary">{stat.value}</dd>
              <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-dim">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
