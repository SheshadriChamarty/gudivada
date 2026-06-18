import { ArrowRight, Calendar } from 'lucide-react'
import { NEWS_ITEMS } from '../../lib/constants'

export default function LatestUpdates() {
  return (
    <div id="news" className="flex-1">
      <div className="mb-4 flex flex-wrap items-end justify-between gap-2">
        <div>
          <h2 className="text-[15px] font-bold tracking-wide text-maroon">LATEST UPDATES</h2>
          <div className="mt-2 h-0.5 w-10 bg-gold" />
        </div>
        <a
          href="#news"
          className="flex shrink-0 items-center gap-1 text-[13px] font-semibold text-maroon hover:underline"
        >
          VIEW ALL
          <ArrowRight size={14} />
        </a>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {NEWS_ITEMS.map((item) => (
          <article key={item.title} className="flex gap-3">
            <img
              src={item.image}
              alt=""
              className="h-20 w-24 shrink-0 rounded object-cover"
            />
            <div className="min-w-0">
              <div className="mb-1 flex items-center gap-1.5 text-[11px] text-muted">
                <Calendar size={11} />
                {item.date}
              </div>
              <h3 className="text-[13px] font-semibold leading-snug text-body">{item.title}</h3>
              <a
                href="#news"
                className="mt-2 inline-flex items-center gap-1 text-[11px] font-semibold text-maroon hover:underline"
              >
                Read More
                <ArrowRight size={12} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
