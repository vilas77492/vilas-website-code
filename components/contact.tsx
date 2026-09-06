import { Mail, MapPin, Phone, User } from 'lucide-react'
import { contactDetails } from '@/lib/content'
import { Eyebrow } from '@/components/section-heading'
import { ContactForm } from '@/components/contact-form'

const icons = { user: User, mail: Mail, phone: Phone, pin: MapPin }

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 bg-surface-deep py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1232px] gap-16 px-6 lg:grid-cols-2 lg:px-0">
        <div className="flex flex-col gap-8">
          <Eyebrow>Get in Touch</Eyebrow>
          <h2 className="font-serif text-5xl uppercase leading-none text-foreground md:text-6xl">
            Contact Us
          </h2>
          <p className="max-w-lg text-base leading-relaxed text-muted-foreground">
            Ready to secure your infrastructure? Our team is standing by to assess your
            requirements and architect the right solution.
          </p>

          <ul className="mt-4 flex flex-col gap-8">
            {contactDetails.map((detail) => {
              const Icon = icons[detail.icon]
              const href = 'href' in detail ? detail.href : undefined
              return (
                <li key={detail.label} className="flex gap-4">
                  <span className="flex size-8 shrink-0 items-center justify-center border border-border bg-surface">
                    <Icon className="size-3.5 text-primary" aria-hidden="true" />
                  </span>
                  <div className="flex flex-col gap-1.5">
                    <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-dim">
                      {detail.label}
                    </span>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm text-foreground transition-colors hover:text-primary"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <span className="max-w-md text-sm leading-relaxed text-foreground">
                        {detail.value}
                      </span>
                    )}
                  </div>
                </li>
              )
            })}
          </ul>
        </div>

        <ContactForm />
      </div>
    </section>
  )
}
