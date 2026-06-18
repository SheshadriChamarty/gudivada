import { ChevronRight, Heart } from 'lucide-react'
import { FOOTER_LINKS, SITE } from '../../lib/constants'

export default function Footer() {
  return (
    <footer className="bg-maroon text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:px-8 lg:grid-cols-3">
        <div className="flex items-start gap-4">
          <div className="flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-gold">
            <img src="/assets/logo.png" alt="" className="h-10 w-auto object-contain" />
          </div>
          <div>
            <p className="font-bold">{SITE.name}</p>
            <p className="text-[11px] text-white/80">{SITE.title}</p>
            <p className="text-[11px] text-white/80">Andhra Pradesh</p>
          </div>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold">QUICK LINKS</p>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2 sm:grid-cols-3">
            {FOOTER_LINKS.flat().map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, '-').replace('&', '')}`}
                className="flex items-center gap-1 text-[13px] text-white/90 hover:text-gold"
              >
                <ChevronRight size={11} />
                {link}
              </a>
            ))}
          </div>
        </div>

        <div className="text-right">
          <p className="text-2xl font-bold text-gold lg:text-[28px]">{SITE.taglineTelugu1}</p>
          <p className="text-2xl font-bold text-gold lg:text-[28px]">{SITE.taglineTelugu2}</p>
        </div>
      </div>

      <div className="border-t border-white/20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-3 text-[11px] text-white/70 sm:flex-row sm:px-8">
          <p>{SITE.copyright}</p>
          <p className="flex items-center gap-1">
            Designed with
            <Heart size={11} className="fill-gold text-gold" />
            for Gudivada
          </p>
        </div>
      </div>
    </footer>
  )
}
