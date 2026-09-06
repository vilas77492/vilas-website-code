'use client'

import { useState, type FormEvent } from 'react'
import { serviceOptions } from '@/lib/content'

const fieldClass =
  'h-12 w-full border border-border bg-input px-4 text-sm text-foreground placeholder:text-dim focus:border-primary focus:outline-none'
const labelClass = 'font-mono text-[11px] uppercase tracking-[0.2em] text-dim'

export function ContactForm() {
  const [sent, setSent] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
    event.currentTarget.reset()
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 border border-border bg-surface p-8"
      aria-labelledby="contact-form-title"
    >
      <h3
        id="contact-form-title"
        className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary"
      >
        Send a Message
      </h3>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input id="name" name="name" required placeholder="Your name" className={fieldClass} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+91 XXXXX XXXXX"
            className={fieldClass}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className={labelClass}>
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="your@email.com"
          className={fieldClass}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="service" className={labelClass}>
          Service Interest
        </label>
        <select id="service" name="service" defaultValue="" className={fieldClass}>
          <option value="" disabled>
            Select a solution
          </option>
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Describe your requirements..."
          className={`${fieldClass} h-auto resize-none py-3`}
        />
      </div>

      <button
        type="submit"
        className="h-12 w-full bg-primary font-serif text-sm uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary/90"
      >
        Send Message
      </button>

      {sent && (
        <p role="status" className="text-center text-sm text-primary">
          Thanks — we&apos;ll be in touch shortly.
        </p>
      )}
    </form>
  )
}
