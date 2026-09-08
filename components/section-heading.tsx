type SectionHeadingProps = {
  eyebrow: string
  title: string
  className?: string
}

export function SectionHeading({ eyebrow, title, className }: SectionHeadingProps) {
  return (
    <div className={className}>
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
      <h2 className="mt-3 font-serif text-3xl leading-tight text-foreground text-balance sm:text-4xl">
        {title}
      </h2>
    </div>
  )
}
