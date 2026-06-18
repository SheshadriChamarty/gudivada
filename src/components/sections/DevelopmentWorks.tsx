import SectionHeading from '../ui/SectionHeading'
import { DEVELOPMENT_WORKS } from '../../lib/constants'

export default function DevelopmentWorks() {
  return (
    <div id="development">
      <SectionHeading title="DEVELOPMENT WORKS" />
      <div className="mb-4 flex gap-2 overflow-x-auto pb-2">
        {DEVELOPMENT_WORKS.map((work) => (
          <img
            key={work.title}
            src={work.image}
            alt={work.title}
            className="h-[70px] w-20 shrink-0 rounded object-cover"
          />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {DEVELOPMENT_WORKS.map((work) => {
          const Icon = work.icon
          return (
            <div key={work.title} className="min-w-0">
              <div className="mb-2 flex size-7 items-center justify-center rounded-full bg-gold text-maroon">
                <Icon size={13} />
              </div>
              <p className="text-[11px] font-semibold leading-tight text-body">{work.title}</p>
              <p className="mt-1 text-[11px] leading-snug text-muted">{work.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
