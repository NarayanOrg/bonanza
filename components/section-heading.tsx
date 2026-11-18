type SectionHeadingProps = {
  index: string
  title: string
  note?: string
}

export function SectionHeading({ index, title, note }: SectionHeadingProps) {
  return (
    <div className="flex items-center gap-4 border-b-2 border-ink pb-4">
      <span className="grid size-8 shrink-0 place-items-center border-2 border-ink bg-mint text-[11px] font-bold text-on-mint">
        {index}
      </span>
      <h2 className="text-xl font-bold tracking-tight uppercase sm:text-2xl">
        {title}
      </h2>
      {note ? (
        <span className="ml-auto text-[11px] font-medium tracking-wider text-body uppercase">
          {note}
        </span>
      ) : null}
    </div>
  )
}
