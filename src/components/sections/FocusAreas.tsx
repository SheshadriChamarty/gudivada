import SectionHeading from '../ui/SectionHeading'
import { FOCUS_AREAS } from '../../lib/constants'

export default function FocusAreas() {
  return (
    <div id="constituency" className="border-x border-border px-0 sm:px-6 lg:px-8">
      <SectionHeading title="OUR FOCUS AREAS" />
      <div className="grid grid-cols-3 gap-4 sm:gap-6">
        {FOCUS_AREAS.map((area) => {
          const Icon = area.icon
          return (
            <div key={area.line1} className="flex flex-col items-center gap-2 text-center">
              <div className="flex size-10 items-center justify-center rounded-full bg-surface text-maroon">
                <Icon size={18} />
              </div>
              <p className="text-[11px] leading-tight text-body">
                {area.line1}
                <br />
                {area.line2}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
