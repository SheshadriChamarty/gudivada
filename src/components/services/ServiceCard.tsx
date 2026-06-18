import { ChevronRight } from 'lucide-react'
import type { Service } from '../../lib/services'

interface ServiceCardProps {
  service: Service
  onClick: () => void
}

export default function ServiceCard({ service, onClick }: ServiceCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group overflow-hidden rounded-lg border border-border bg-white text-left shadow-sm transition-all hover:border-maroon/30 hover:shadow-md"
    >
      <div className="relative h-40 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-maroon px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
          {service.category}
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-base font-bold text-maroon">{service.title}</h3>
        <p className="mt-1 text-sm text-muted">{service.shortDescription}</p>
        <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-maroon">
          View details
          <ChevronRight size={14} className="transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </button>
  )
}
