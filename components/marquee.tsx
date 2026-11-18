import { marqueeItems } from "@/lib/data"

function Track({ copy }: { copy: boolean }) {
  return (
    <div
      aria-hidden={copy ? undefined : true}
      className="flex shrink-0 items-center gap-8 pr-8"
    >
      {marqueeItems.map((item) => (
        <span
          key={item}
          className="flex shrink-0 items-center gap-8 text-xl font-medium whitespace-nowrap text-white sm:text-2xl"
        >
          {item}
          <span aria-hidden="true" className="text-mint">
            ✦
          </span>
        </span>
      ))}
    </div>
  )
}

export function Marquee() {
  return (
    <div className="relative overflow-hidden border-y-2 border-ink bg-gradient-to-r from-black to-[#04221a] py-6 [clip-path:polygon(0_12px,100%_0,100%_calc(100%-12px),0_100%)]">
      <div className="marquee-track flex w-max">
        <Track copy={false} />
        <Track copy />
      </div>
      <span
        aria-hidden="true"
        className="absolute inset-x-0 bottom-3 h-1 bg-mint"
      />
      <span
        aria-hidden="true"
        className="absolute inset-x-0 bottom-1 h-px bg-mint/70"
      />
    </div>
  )
}
