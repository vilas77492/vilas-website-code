interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  align?: 'stack' | 'split'
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
      <span>{children}</span>
      <span aria-hidden="true" className="h-px w-16 bg-border" />
    </p>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'stack',
}: SectionHeadingProps) {
  if (align === 'split') {
    return (
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex flex-col gap-6">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="font-serif text-5xl uppercase leading-none text-foreground md:text-6xl">
            {title}
          </h2>
        </div>
        {description && (
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-6">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="font-serif text-5xl uppercase leading-none text-foreground md:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground">{description}</p>
      )}
    </div>
  )
}
