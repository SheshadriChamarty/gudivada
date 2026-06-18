import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import type { Service } from '../../lib/services'

interface ServiceDetailPanelProps {
  service: Service
  onBack: () => void
}

export default function ServiceDetailPanel({ service, onBack }: ServiceDetailPanelProps) {
  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-sm">
      <button
        type="button"
        onClick={onBack}
        className="mb-4 inline-flex items-center gap-1 text-sm font-medium text-maroon hover:underline"
      >
        <ArrowLeft size={16} />
        Back to services
      </button>

      <div className="grid gap-6 lg:grid-cols-2">
        <img
          src={service.image}
          alt={service.title}
          className="h-56 w-full rounded-lg object-cover lg:h-72"
        />
        <div>
          <span className="rounded-full bg-gold/30 px-3 py-1 text-xs font-semibold text-maroon">
            {service.category}
          </span>
          <h2 className="mt-3 text-2xl font-bold text-maroon">{service.title}</h2>
          <p className="mt-4 text-sm leading-relaxed text-body">{service.brief}</p>
          <ul className="mt-5 space-y-2">
            {service.highlights.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-body">
                <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-maroon" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 rounded bg-surface px-4 py-3 text-xs text-muted">
            Detailed tracking and implementation data for this service will be added in a
            future update.
          </p>
        </div>
      </div>
    </div>
  )
}
