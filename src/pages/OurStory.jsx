// src/pages/OurStory.jsx

import {
  ArrowRight,
  Heart,
  MapPin,
  Sparkles,
  Utensils,
} from 'lucide-react'

import { Link } from 'react-router-dom'
import { siteInfo } from '../data/site'

import storyMain from '../assets/menu/large/tacos/tacos-primo.webp'
import storyFood from '../assets/menu/large/favorites/favorites-fajita-platter.webp'
import storyRestaurant from '../assets/gallery/large/gallery-01.webp'

// Responsive cactus backgrounds
import cactusDesktop from '../assets/misc/background-desktop.webp'
import cactusMobile from '../assets/misc/background-mobile.webp'

// ========================================
// CACTUS BACKGROUND
// Used on light / cream sections
// ========================================

function CactusBackground({ opacity = 0.3 }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      {/* Mobile */}
      <div
        className="absolute inset-0 bg-top bg-repeat-y md:hidden"
        style={{
          backgroundImage: `url(${cactusMobile})`,
          backgroundSize: '100% auto',
          opacity,
        }}
      />

      {/* Desktop */}
      <div
        className="absolute inset-0 hidden bg-top bg-repeat-y md:block"
        style={{
          backgroundImage: `url(${cactusDesktop})`,
          backgroundSize: '100% auto',
          opacity,
        }}
      />
    </div>
  )
}

// ========================================
// DECORATIVE SHAPES
// Used on colored sections
// ========================================

function DecorativeBackground({ variant = 'dark' }) {
  const isDark = variant === 'dark'

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      {/* Large soft glows */}

      <div
        className={`absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full blur-3xl ${
          isDark ? 'bg-gold/15' : 'bg-sage/35'
        }`}
      />

      <div
        className={`absolute -right-40 top-[10%] h-[500px] w-[500px] rounded-full blur-3xl ${
          isDark ? 'bg-rust/30' : 'bg-rust/20'
        }`}
      />

      <div
        className={`absolute -left-40 bottom-[-180px] h-[500px] w-[500px] rounded-full blur-3xl ${
          isDark ? 'bg-forest/30' : 'bg-gold/20'
        }`}
      />

      {/* Top-left concentric circles */}

      <div
        className={`absolute -left-40 -top-44 h-[450px] w-[450px] rounded-full border-[4px] sm:h-[600px] sm:w-[600px] ${
          isDark ? 'border-gold/35' : 'border-rust/30'
        }`}
      />

      <div
        className={`absolute -left-24 -top-28 h-[320px] w-[320px] rounded-full border-[3px] sm:h-[450px] sm:w-[450px] ${
          isDark ? 'border-gold/30' : 'border-rust/25'
        }`}
      />

      <div
        className={`absolute -left-8 -top-12 h-[190px] w-[190px] rounded-full border-2 sm:h-[300px] sm:w-[300px] ${
          isDark ? 'border-gold/25' : 'border-rust/20'
        }`}
      />

      {/* Bottom-right concentric circles */}

      <div
        className={`absolute -right-40 -bottom-44 h-[450px] w-[450px] rounded-full border-[4px] sm:h-[600px] sm:w-[600px] ${
          isDark ? 'border-gold/35' : 'border-forest/25'
        }`}
      />

      <div
        className={`absolute -right-24 -bottom-28 h-[320px] w-[320px] rounded-full border-[3px] sm:h-[450px] sm:w-[450px] ${
          isDark ? 'border-gold/30' : 'border-forest/20'
        }`}
      />

      {/* Organic shapes */}

      <div
        className={`absolute right-[8%] top-[15%] h-40 w-40 rounded-full sm:h-56 sm:w-56 ${
          isDark ? 'bg-gold/15' : 'bg-sage/30'
        }`}
      />

      <div
        className={`absolute -left-12 top-[45%] h-64 w-32 rotate-[35deg] rounded-full ${
          isDark ? 'bg-cream/10' : 'bg-rust/15'
        }`}
      />

      <div
        className={`absolute right-[12%] bottom-[18%] h-36 w-36 rotate-45 rounded-[2rem] ${
          isDark ? 'border-[3px] border-cream/20' : 'border-[3px] border-gold/35'
        }`}
      />

      {/* Dot pattern */}

      <div
        className="absolute right-[5%] top-[8%] h-48 w-40 opacity-40"
        style={{
          backgroundImage: isDark
            ? 'radial-gradient(circle, #F5D88D 2px, transparent 2px)'
            : 'radial-gradient(circle, #9F4D32 2px, transparent 2px)',
          backgroundSize: '22px 22px',
        }}
      />

      <div
        className="absolute bottom-[8%] left-[5%] h-40 w-40 opacity-35"
        style={{
          backgroundImage: isDark
            ? 'radial-gradient(circle, #F5D88D 2px, transparent 2px)'
            : 'radial-gradient(circle, #284A37 2px, transparent 2px)',
          backgroundSize: '22px 22px',
        }}
      />
    </div>
  )
}

export default function OurStory() {
  return (
    <main id="main-content">

      {/* ========================================
          HERO
          Forest green + decorative shapes
      ======================================== */}

      <section className="relative isolate overflow-hidden bg-forest text-cream">

        <DecorativeBackground variant="dark" />

        <div className="page-shell relative z-10 grid min-h-[520px] items-center gap-12 py-20 lg:grid-cols-2 lg:py-24">

          {/* Copy */}

          <div className="relative max-w-xl">

            <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold">
              Our Story
            </p>

            <h1 className="mt-5 font-display text-6xl leading-[0.92] sm:text-7xl lg:text-[5.4rem]">
              California roots.

              <span className="block text-gold">
                Long Island heart.
              </span>
            </h1>

            <p className="mt-7 max-w-lg text-base leading-7 text-cream/70 sm:text-lg sm:leading-8">
              What started in a small California restaurant became a
              Long Island neighborhood favorite built around fresh food,
              family, and doing things our own way.
            </p>

          </div>

          {/* Hero image */}

          <div className="relative">

            <div className="absolute -left-6 -top-6 h-28 w-28 rounded-full border border-gold/40" />

            <div className="absolute -bottom-7 -right-7 h-40 w-40 rounded-full bg-rust/40" />

            <div className="relative overflow-hidden rounded-[2rem] shadow-2xl">

              <img
                src={storyMain}
                loading="eager"
                fetchpriority="high"
                decoding="async"
                alt="Green Cactus Mexican Grill"
                className="h-[380px] w-full object-cover sm:h-[440px]"
              />

            </div>

            {/* 1993 badge */}

            <div className="absolute -bottom-7 left-6 rounded-2xl bg-gold px-6 py-5 text-forest shadow-xl sm:left-[-25px]">

              <p className="font-display text-4xl leading-none">
                1993
              </p>

              <p className="mt-1 text-[0.65rem] font-bold uppercase tracking-[0.18em]">
                Our Long Island story begins
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ========================================
          WHERE IT STARTED
          Cream + cactus background
      ======================================== */}

      <section className="relative isolate overflow-hidden bg-cream py-20 sm:py-28">

        <CactusBackground />

        <div className="page-shell relative z-10 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Image */}

          <div className="relative">

            <div className="overflow-hidden rounded-[2rem] shadow-xl shadow-forest/10">

              <img
                src={storyFood}
                loading="lazy"
                decoding="async"
                alt="Fresh Mexican food at Green Cactus"
                className="h-[420px] w-full object-cover sm:h-[520px]"
              />

            </div>

            <div className="absolute -bottom-5 -right-4 rounded-2xl bg-rust px-6 py-4 text-cream shadow-xl sm:right-[-20px]">

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
                From coast to coast
              </p>

              <p className="mt-1 font-display text-2xl">
                California → Long Island
              </p>

            </div>

          </div>

          {/* Story */}

          <div>

            <p className="eyebrow">
              Where it all began
            </p>

            <h2 className="section-title mt-3">
              A small restaurant with a big idea.
            </h2>

            <div className="mt-7 space-y-5 text-base leading-8 text-ink/70">

              <p>
                Our story began in a small 1,500-square-foot restaurant in
                California's San Fernando Valley. What started as a fresh
                Mexican food concept soon became something our family
                believed could grow into something special back home on Long Island.
              </p>

              <p>
                In 1993, Green Cactus made the journey to New York. With
                great pride, we introduced Long Island to our fresh
                Mexican experience—and we've been serving our community
                ever since.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ========================================
          1993 STORY BREAK
          Rust + decorative shapes
      ======================================== */}

      <section className="relative isolate overflow-hidden bg-rust py-16 text-cream sm:py-20">

        <DecorativeBackground variant="dark" />

        <div className="page-shell relative z-10">

          <div className="grid items-center gap-8 md:grid-cols-[auto_1fr] md:gap-14">

            <p className="font-display text-[7rem] leading-none text-gold sm:text-[9rem]">
              '93
            </p>

            <div className="max-w-3xl">

              <p className="text-xs font-bold uppercase tracking-[0.26em] text-gold">
                The move east
              </p>

              <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
                A California idea found its home on Long Island.
              </h2>

            </div>

          </div>

        </div>

      </section>

      {/* ========================================
          FRESH TO ORDER
          Cream + cactus background
      ======================================== */}

      <section className="relative isolate overflow-hidden bg-cream py-20 sm:py-28">

        <CactusBackground />

        <div className="page-shell relative z-10 grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

          {/* Copy */}

          <div>

            <p className="eyebrow">
              Worth the wait
            </p>

            <h2 className="section-title mt-3">
              Fresh means made when you order.
            </h2>

            <p className="mt-6 max-w-lg text-base leading-8 text-ink/70">
              We make our food fresh to order rather than preparing it
              along an assembly line. That can mean your meal takes a
              little longer—but we believe fresh food is worth those
              extra minutes.
            </p>

            {/* Made fresh */}

            <div className="mt-8 flex items-start gap-4">

              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gold/15 text-rust">
                <Sparkles size={21} />
              </div>

              <div>

                <h3 className="font-display text-xl text-forest">
                  Made fresh
                </h3>

                <p className="mt-1 text-sm leading-6 text-ink/60">
                  Prepared to order with the freedom to make your meal
                  your own.
                </p>

              </div>

            </div>

            {/* Generous by design */}

            <div className="mt-6 flex items-start gap-4">

              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gold/15 text-rust">
                <Utensils size={21} />
              </div>

              <div>

                <h3 className="font-display text-xl text-forest">
                  Generous by design
                </h3>

                <p className="mt-1 text-sm leading-6 text-ink/60">
                  Hearty portions, bold flavors, and food made the way
                  you want it.
                </p>

              </div>

            </div>

          </div>

          {/* Image */}

          <div className="overflow-hidden rounded-[2rem] shadow-xl shadow-forest/10">

            <img
              src={storyRestaurant}
              loading="lazy"
              decoding="async"
              alt="Green Cactus Mexican Grill gallery photo"
              className="h-[440px] w-full object-cover sm:h-[540px]"
            />

          </div>

        </div>

      </section>

      {/* ========================================
          FAMILY / COMMUNITY
          Sand + decorative shapes
      ======================================== */}

      <section className="relative isolate overflow-hidden bg-sand/50 py-20 sm:py-24">

        <DecorativeBackground variant="light" />

        <div className="page-shell relative z-10">

          <div className="mx-auto max-w-3xl text-center">

            <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-rust text-cream shadow-lg">
              <Heart size={23} />
            </div>

            <p className="eyebrow mt-6">
              More than a restaurant
            </p>

            <h2 className="section-title mt-3">
              Family owned. Community minded.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-ink/70">
              As a Long Island family, we believe in community and small
              business. When you choose to spend your hard-earned money
              with us, we believe you deserve great food, friendly
              service, and an experience that makes you want to come
              back.
            </p>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-ink/70">
              Some members of our team made that original journey from
              California to New York with us. Over the years, our staff
              has become like family, united by a commitment to taking
              care of every person who walks through our doors.
            </p>

          </div>

        </div>

      </section>

      {/* ========================================
          CLOSING CTA
          Cream background + cactus illustrations
      ======================================== */}

      <section className="relative isolate overflow-hidden bg-cream py-20 sm:py-28">

        <CactusBackground />

        <div className="page-shell relative z-10">

          <div className="relative isolate overflow-hidden rounded-[2rem] bg-forest px-8 py-14 text-center text-cream sm:px-12 sm:py-16">

            {/* Decorative shapes inside card */}

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
            >

              <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full border-[3px] border-gold/30" />

              <div className="absolute -left-8 -top-8 h-40 w-40 rounded-full border-2 border-gold/25" />

              <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-rust/30" />

              <div className="absolute -bottom-16 -right-12 h-56 w-56 rounded-full border-[3px] border-gold/25" />

              <div
                className="absolute right-[8%] top-[10%] h-32 w-32 opacity-40"
                style={{
                  backgroundImage:
                    'radial-gradient(circle, #F5D88D 2px, transparent 2px)',
                  backgroundSize: '20px 20px',
                }}
              />

            </div>

            {/* CTA content */}

            <div className="relative z-10 mx-auto max-w-2xl">

              <MapPin
                className="mx-auto text-gold"
                size={28}
              />

              <p className="mt-5 text-xs font-bold uppercase tracking-[0.26em] text-gold">
                Stony Brook, New York
              </p>

              <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
                Come be part of our story.
              </h2>

              <p className="mx-auto mt-5 max-w-xl leading-7 text-cream/65">
                We're proud to call Long Island home. Stop by, grab your
                favorites, and experience Green Cactus for yourself.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

                <Link
                  to="/menu"
                  className="button-gold"
                >
                  Explore the menu
                  <ArrowRight size={17} />
                </Link>

                <a
                  href={siteInfo.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-ghost"
                >
                  Visit us
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  )
}