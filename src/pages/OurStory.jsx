import { ArrowRight, Heart, MapPin, Sparkles, Utensils } from 'lucide-react'
import { Link } from 'react-router-dom'

import storyMain from '../assets/food/food(44).webp'
import storyFood from '../assets/food/food(22).webp'
import storyRestaurant from '../assets/food/food(27).webp'

export default function OurStory() {
  return (
    <main id="main-content">

      {/* ========================================
          HERO
      ======================================== */}
      <section className="relative overflow-hidden bg-forest text-cream">
        <div className="page-shell grid min-h-[520px] items-center gap-12 py-20 lg:grid-cols-2 lg:py-24">

          {/* Copy */}
          <div className="relative z-10 max-w-xl">
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

          {/* Hero Image */}
          <div className="relative">
            <div className="absolute -left-6 -top-6 h-28 w-28 rounded-full border border-gold/30" />
            <div className="absolute -bottom-7 -right-7 h-40 w-40 rounded-full bg-rust/40" />

            <div className="relative overflow-hidden rounded-[2rem]">
              <img
                src={storyMain}
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
      ======================================== */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="page-shell grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem]">
              <img
                src={storyFood}
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
      ======================================== */}
      <section className="bg-rust py-16 text-cream sm:py-20">
        <div className="page-shell">
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
      ======================================== */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="page-shell grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

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
          <div className="overflow-hidden rounded-[2rem]">
            <img
              src={storyRestaurant}
              alt="Green Cactus restaurant in Stony Brook"
              className="h-[440px] w-full object-cover sm:h-[540px]"
            />
          </div>

        </div>
      </section>


      {/* ========================================
          FAMILY / COMMUNITY
      ======================================== */}
      <section className="bg-sand/50 py-20 sm:py-24">
        <div className="page-shell">

          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-rust text-cream">
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
      ======================================== */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="page-shell">

          <div className="relative overflow-hidden rounded-[2rem] bg-forest px-8 py-14 text-center text-cream sm:px-12 sm:py-16">

            <div className="absolute -left-16 -top-16 h-44 w-44 rounded-full border border-gold/15" />
            <div className="absolute -bottom-20 -right-16 h-52 w-52 rounded-full bg-rust/25" />

            <div className="relative mx-auto max-w-2xl">
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

                <Link
                  to='https://www.google.com/maps/search/?api=1&query=Green+Cactus+Grill+1099+N+Country+Rd+Stony+Brook+NY+11790'
                  target="_blank"
                  className="button-ghost"
                >
                  Visit us
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

    </main>
  )
}