import { ArrowRight } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { ABOUT } from '../../lib/constants'

export default function AboutSection() {
  return (
    <div id="about" className="flex flex-col">
      <SectionHeading title={ABOUT.title} />
      <div className="space-y-4 text-[13px] leading-relaxed text-body">
        {ABOUT.paragraphs.map((p) => (
          <p key={p.slice(0, 30)}>{p}</p>
        ))}
      </div>
      <button
        type="button"
        className="mt-6 inline-flex w-fit items-center gap-2 rounded bg-maroon px-5 py-2 text-[13px] font-semibold text-white transition-colors hover:bg-maroon/90"
      >
        READ MORE
        <ArrowRight size={14} />
      </button>
    </div>
  )
}
