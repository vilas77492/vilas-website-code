import Image from 'next/image'

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="/images/tes-logo.png"
        alt="TES logo"
        width={compact ? 36 : 44}
        height={compact ? 36 : 44}
        className={`rounded-full object-cover ${compact ? 'size-9' : 'size-11'}`}
        priority={!compact}
      />
      <span className="flex flex-col leading-none">
        <span className="font-serif text-sm uppercase tracking-wide text-foreground">
          Technoholic{compact ? ' Electronic Solutions' : ''}
        </span>
        {compact ? (
          <span className="mt-1 font-mono text-[10px] tracking-wider text-dim">
            Pune, Maharashtra, India
          </span>
        ) : (
          <span className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
            Electronic Solutions
          </span>
        )}
      </span>
    </div>
  )
}
