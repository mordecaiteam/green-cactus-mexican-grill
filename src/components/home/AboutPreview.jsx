import {
  ArrowRight,
  Sparkles,
  UtensilsCrossed,
  MapPin,
  Navigation,
  ExternalLink,
} from 'lucide-react'

import { Link } from 'react-router-dom'
import { siteInfo } from '../../data/site'

import exteriorImage from '../../assets/misc/green-cactus-exterior.webp'

// Responsive cactus backgrounds
import cactusDesktop from '../../assets/misc/background-desktop.webp'
import cactusMobile from '../../assets/misc/background-mobile.webp'

const mapAddress = '1099 N Country Rd, Stony Brook, NY 11790'

const googleMapEmbedUrl =
  `https://www.google.com/maps?q=${encodeURIComponent(mapAddress)}&output=embed`

const appleMapsUrl =
  `https://maps.apple.com/?daddr=${encodeURIComponent(mapAddress)}`

export default function AboutPreview() {
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

      <div className="page-shell relative z-10 grid items-center gap-14 lg:grid-cols-[.9fr_1.1fr]">

        {/* RESTAURANT EXTERIOR IMAGE */}

        <div className="relative mx-auto w-full max-w-xl lg:mx-0">

          <div className="absolute -left-5 -top-5 h-28 w-28 rounded-full border border-gold/60" />

          <img
            src={exteriorImage}
            alt="Green Cactus Restaurant"
            loading="lazy"
            className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-2xl"
          />

          <div className="absolute -bottom-7 right-5 rounded-2xl bg-rust px-7 py-5 text-cream shadow-xl">
            <span className="block font-display text-3xl">
              STONY BROOK
            </span>

            <span className="text-[.65rem] font-bold uppercase tracking-[.25em]">
              Fresh is our tradition
            </span>
          </div>

        </div>

        {/* ABOUT CONTENT */}

        <div className="lg:pl-10">

          <p className="eyebrow">
            A neighborhood original
          </p>

          <h2 className="section-title mt-4">
            Not an assembly line.
            <br />
            A meal made for you.
          </h2>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-ink/65">
            Green Cactus Grill is a warm and welcoming family restaurant
            where you can enjoy a memorable dining experience.
            Whether you like your food spicy, mild or have any dietary
            requirements, we source the finest and most aromatic
            ingredients to prepare each Mexican dish. Our expert
            chefs take your tastes and preferences into consideration
            while preparing your meals.
          </p>

          {/* FEATURE CARDS */}

          <div className="mt-10 grid gap-5 sm:grid-cols-2">

            <div className="feature-card">
              <UtensilsCrossed />

              <div>
                <h3>Made to order</h3>
                <p>Your meal is prepared when you order it.</p>
              </div>
            </div>

            <div className="feature-card">
              <Sparkles />

              <div>
                <h3>Fresh & flexible</h3>
                <p>Customize your favorites exactly how you like.</p>
              </div>
            </div>

          </div>

          {/* GOOGLE MAP SECTION */}

          <div className="mt-12">

            <div className="mb-5">

              <div className="flex items-center gap-2 text-rust">
                <MapPin size={20} />

                <p className="text-xs font-bold uppercase tracking-[0.18em]">
                  Visit Us
                </p>
              </div>

              <h3 className="font-display mt-2 text-2xl text-forest sm:text-3xl">
                Find us in Stony Brook.
              </h3>

              <p className="mt-2 text-sm leading-6 text-ink/60">
                {siteInfo.addressLine}
              </p>

            </div>

            {/* GOOGLE MAP EMBED */}

            <div className="overflow-hidden rounded-2xl border border-forest/10 bg-white shadow-lg shadow-forest/5">

              <iframe
                title="Green Cactus Fresh Mexican Grill location"
                src={googleMapEmbedUrl}
                width="100%"
                height="250"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="block w-full sm:h-[300px]"
              />

            </div>

            {/* DIRECTIONS BUTTONS */}

            <div className="mt-4 grid grid-cols-2 gap-3">

              <a
                href={siteInfo.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-forest px-3 py-3 text-center text-xs font-bold uppercase tracking-wide text-white transition hover:bg-rust sm:text-sm"
              >
                <Navigation size={16} className="shrink-0" />
                <span>Google Maps</span>
                <ExternalLink size={13} className="shrink-0" />
              </a>

              <a
                href={appleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-forest/15 bg-white px-3 py-3 text-center text-xs font-bold uppercase tracking-wide text-forest transition hover:border-rust hover:text-rust sm:text-sm"
              >
                <Navigation size={16} className="shrink-0" />
                <span>Apple Maps</span>
                <ExternalLink size={13} className="shrink-0" />
              </a>

            </div>

          </div>

          {/* READ OUR STORY */}

          <Link
            to="/our-story"
            className="mt-10 inline-flex items-center gap-2 border-b border-rust pb-1 text-sm font-bold uppercase tracking-[.16em] text-rust transition hover:text-forest"
          >
            Read our story
            <ArrowRight size={16} />
          </Link>

        </div>

      </div>

    </section>
  )
}