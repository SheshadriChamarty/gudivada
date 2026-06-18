import { MapPin, User, Building2 } from 'lucide-react'
import { HERO } from '../../lib/constants'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white">
      <div className="relative min-h-[420px] lg:min-h-[480px]">
        {/* Background layers */}
        <div className="absolute inset-0">
          <img
            src="/assets/assembly-building.jpg"
            alt=""
            className="absolute left-0 top-0 h-full w-2/5 object-cover opacity-30 blur-[1px] lg:w-1/2"
          />
          <img
            src="/assets/constituency-map.png"
            alt=""
            className="absolute right-0 top-0 h-full w-3/5 object-cover object-right lg:w-1/2"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/40" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-end gap-6 px-4 py-8 sm:px-8 lg:grid-cols-2 lg:py-10">
          {/* Text content */}
          <div className="z-10 order-2 lg:order-1 lg:pb-8">
            <p className="font-script text-3xl text-maroon sm:text-4xl">{HERO.honorific}</p>
            <h1 className="mt-1 text-3xl font-bold leading-tight text-maroon sm:text-4xl lg:text-5xl">
              {HERO.name}
            </h1>
            <span className="mt-3 inline-block rounded-full bg-gold px-4 py-1.5 text-xs font-semibold text-body sm:text-sm">
              {HERO.badge}
            </span>

            <div className="mt-4 flex items-center gap-2">
              <MapPin size={15} className="shrink-0 text-maroon" />
              <div>
                <p className="text-xs font-bold tracking-wide text-maroon sm:text-sm">
                  {HERO.constituency}
                </p>
                <p className="text-xs text-muted">{HERO.state}</p>
              </div>
            </div>

            <div className="my-4 h-px w-14 bg-border" />

            <p className="max-w-md text-sm leading-relaxed text-body">{HERO.bio1}</p>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-body">{HERO.bio2}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#about"
                className="inline-flex items-center gap-2 rounded bg-maroon px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-maroon/90 sm:text-sm"
              >
                <User size={14} />
                KNOW YOUR MLA
              </a>
              <a
                href="#development"
                className="inline-flex items-center gap-2 rounded border-2 border-maroon bg-white px-5 py-2.5 text-xs font-semibold text-maroon transition-colors hover:bg-maroon/5 sm:text-sm"
              >
                <Building2 size={14} />
                DEVELOPMENT INITIATIVES
              </a>
            </div>
          </div>

          {/* MLA portrait */}
          <div className="relative order-1 flex justify-center lg:order-2 lg:justify-end">
            <img
              src="/assets/hero-portrait.jpg"
              alt="Venigandla Ramu, MLA of Gudivada"
              className="relative z-10 max-h-[320px] w-auto object-contain drop-shadow-lg sm:max-h-[400px] lg:max-h-[430px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
