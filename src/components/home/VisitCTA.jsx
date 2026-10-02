import { MapPin } from 'lucide-react'
import { siteInfo } from '../../data/site'
import visitus from '../../assets/misc/visitus.jpeg'

export default function VisitCTA() {
  return (
    <section className="bg-cream py-24 sm:py-32">

      {/* Page spacing only */}
      <div className="page-shell">

        {/* Actual card */}
        <div className="grid overflow-hidden rounded-[2rem] bg-forest text-cream lg:grid-cols-2">

          {/* Image */}
          <div className="relative min-h-[360px]">
            <img
              src={visitus}
              alt="Dining room at Green Cactus in Stony Brook"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center p-9 sm:p-14">
            <p className="text-xs font-bold uppercase tracking-[.28em] text-gold">
              Come hungry
            </p>

            <h2 className="mt-4 font-display text-5xl sm:text-6xl">
              Your table is waiting.
            </h2>

            <p className="mt-5 max-w-lg leading-7 text-cream/70">
              Visit us on North Country Road, call ahead, or order your Green
              Cactus favorites for pickup or delivery.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={siteInfo.directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="button-gold"
              >
                Get directions
                <MapPin size={17} />
              </a>

              <a
                href={siteInfo.phoneHref}
                className="button-ghost"
              >
                Call {siteInfo.phoneDisplay}
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}