import { Globe, Mail, MapPin, Phone, Share2, Video } from 'lucide-react'
import { CONTACT } from '../../lib/constants'

const SOCIAL = [
  { icon: Share2, label: 'Facebook', href: '#' },
  { icon: Globe, label: 'Twitter', href: '#' },
  { icon: Mail, label: 'Instagram', href: '#' },
  { icon: Video, label: 'YouTube', href: '#' },
]

export default function ConnectWithUs() {
  return (
    <div id="contact" className="w-full lg:w-[340px] lg:shrink-0">
      <div className="flex gap-6 rounded bg-gold p-5">
        <div className="flex-1">
          <h3 className="text-[13px] font-bold tracking-wide text-maroon">{CONTACT.title}</h3>
          <ul className="mt-3 space-y-2 text-[11px] text-body">
            <li className="flex gap-2">
              <MapPin size={13} className="mt-0.5 shrink-0 text-maroon" />
              <span>{CONTACT.address}</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={13} className="shrink-0 text-maroon" />
              <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}>{CONTACT.phone}</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={13} className="shrink-0 text-maroon" />
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-maroon">🌐</span>
              <a href={`https://${CONTACT.website}`} target="_blank" rel="noreferrer">
                {CONTACT.website}
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden w-px shrink-0 bg-gold-dark sm:block" />
        <div className="flex flex-col gap-3">
          {SOCIAL.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="flex size-9 items-center justify-center rounded-full bg-maroon text-white transition-colors hover:bg-maroon/90"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
