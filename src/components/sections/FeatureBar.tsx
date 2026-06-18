import { FEATURES } from '../../lib/constants'

export default function FeatureBar() {
  return (
    <section className="border-y-2 border-gold-dark bg-gold">
      <div className="mx-auto max-w-7xl overflow-x-auto px-4 py-4 sm:px-8">
        <div className="flex min-w-max items-center justify-center gap-6 sm:gap-10 lg:gap-16">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={feature.line1} className="flex items-center gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-maroon text-white">
                  <Icon size={18} />
                </div>
                <div className="text-[13px] font-semibold leading-tight text-body">
                  <p>{feature.line1}</p>
                  <p>{feature.line2}</p>
                </div>
                {index < FEATURES.length - 1 && (
                  <div className="ml-3 hidden h-8 w-px bg-gold-dark sm:block" />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
