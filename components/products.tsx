import Image from 'next/image'
import { productFeatures, products } from '@/lib/content'
import { SectionHeading } from '@/components/section-heading'

export function Products() {
  return (
    <section id="products" className="scroll-mt-16 bg-background py-24 lg:py-32">
      <div className="mx-auto flex max-w-[1232px] flex-col gap-16 px-6 lg:px-0">
        <SectionHeading eyebrow="Hardware" title="Our Products" />

        <div className="flex flex-col">
          <ul className="grid grid-cols-2 gap-px bg-border lg:grid-cols-4">
            {products.map((product) => (
              <li key={product.name} className="flex flex-col gap-3 bg-surface px-6 py-6">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                  {product.spec}
                </span>
                <span className="font-serif text-base uppercase text-foreground">
                  {product.name}
                </span>
              </li>
            ))}
          </ul>

          <ul className="grid gap-px bg-border md:grid-cols-2">
            {productFeatures.map((feature) => (
              <li key={feature.name} className="relative isolate h-64 overflow-hidden bg-surface">
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover opacity-60 transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute inset-x-6 bottom-8 flex flex-col gap-3">
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                    {feature.tag}
                  </span>
                  <h3 className="font-serif text-2xl uppercase text-foreground">{feature.name}</h3>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
