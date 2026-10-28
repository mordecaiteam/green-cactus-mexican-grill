// src/components/home/VisitCTA.jsx

import { MapPin } from 'lucide-react'
import { siteInfo } from '../../data/site'

import visitus from '../../assets/misc/visitus.webp'

// Responsive cactus backgrounds
import cactusDesktop from '../../assets/misc/background-desktop.webp'
import cactusMobile from '../../assets/misc/background-mobile.webp'

export default function VisitCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-cream py-24 sm:py-32">

      {/* ========================================
          MOBILE CACTUS BACKGROUND
      ======================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-top bg-repeat-y opacity-30 md:hidden"
        style={{
          backgroundImage: `url(${cactusMobile})`,
          backgroundSize: '100% auto',
        }}
      />

      {/* ========================================
          DESKTOP CACTUS BACKGROUND
      ======================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 hidden bg-top bg-repeat-y opacity-30 md:block"
        style={{
          backgroundImage: `url(${cactusDesktop})`,
          backgroundSize: '100% auto',
        }}
      />

      {/* ========================================
          MAIN CONTENT
      ======================================== */}

      <div className="page-shell relative z-10">

        {/* VISIT CARD */}

        <div className="grid overflow-hidden rounded-[2rem] bg-forest text-cream lg:grid-cols-2">

          {/* IMAGE */}

          <div className="relative min-h-[360px]">
            <img
              src={visitus}
              alt="Dining room at Green Cactus in Stony Brook"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          {/* CONTENT */}

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