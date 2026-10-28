// src/components/home/ReviewsCTA.jsx

import { ExternalLink, Quote, Star } from 'lucide-react'
import { siteInfo } from '../../data/site'

const reviews = [
  {
    name: 'Jessica M.',
    text: 'The food is always fresh and the portions are generous. One of my favorite places in Stony Brook!',
  },
  {
    name: 'Daniel R.',
    text: 'Everything tasted fresh and came out quickly. The burritos are huge and packed with flavor.',
  },
  {
    name: 'Ashley T.',
    text: 'I have been coming here for years. Great food, friendly people, and consistently good every time.',
  },
  {
    name: 'Michael S.',
    text: 'The quesadillas are amazing and I love how easy it is to customize everything exactly how you want it.',
  },
  {
    name: 'Samantha L.',
    text: 'A Stony Brook favorite. Fresh ingredients, great portions, and the staff always makes you feel welcome.',
  },
]

function Stars() {
  return (
    <div
      className="flex gap-1 text-gold"
      aria-label="5 out of 5 stars"
    >
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          size={17}
          fill="currentColor"
          strokeWidth={1.8}
        />
      ))}
    </div>
  )
}

function ReviewCard({ review, hidden = false }) {
  return (
    <article
      className="review-conveyor-card"
      aria-hidden={hidden}
    >
      <Stars />

      <p className="mt-4 text-[1.05rem] leading-7 text-ink/80">
        “{review.text}”
      </p>

      <div className="mt-5 flex items-center gap-3">
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-sage/15 font-display text-lg text-forest">
          {review.name.charAt(0)}
        </div>

        <div>
          <p className="font-bold text-forest">
            {review.name}
          </p>

          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-rust/70">
            Google Review
          </p>
        </div>
      </div>
    </article>
  )
}

function DecorativeBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >

      {/* ========================================
          LARGE GRADIENT GLOWS
      ======================================== */}

      {/* Upper left */}
      <div className="absolute -left-40 -top-40 h-[550px] w-[550px] rounded-full bg-gold/15 blur-3xl" />

      {/* Upper right */}
      <div className="absolute -right-40 -top-20 h-[500px] w-[500px] rounded-full bg-cream/10 blur-3xl" />

      {/* Lower left */}
      <div className="absolute -left-40 -bottom-40 h-[550px] w-[550px] rounded-full bg-forest/25 blur-3xl" />

      {/* Lower right */}
      <div className="absolute -right-40 -bottom-40 h-[550px] w-[550px] rounded-full bg-gold/15 blur-3xl" />

      {/* ========================================
          CONCENTRIC GOLD RINGS
      ======================================== */}

      {/* Top left */}
      <div className="absolute -left-40 -top-44 h-[450px] w-[450px] rounded-full border-[4px] border-gold/35 sm:h-[600px] sm:w-[600px]" />

      <div className="absolute -left-24 -top-28 h-[320px] w-[320px] rounded-full border-[3px] border-gold/30 sm:h-[450px] sm:w-[450px]" />

      <div className="absolute -left-8 -top-12 h-[190px] w-[190px] rounded-full border-2 border-gold/25 sm:h-[300px] sm:w-[300px]" />

      {/* Bottom right */}
      <div className="absolute -right-40 -bottom-44 h-[450px] w-[450px] rounded-full border-[4px] border-gold/35 sm:h-[600px] sm:w-[600px]" />

      <div className="absolute -right-24 -bottom-28 h-[320px] w-[320px] rounded-full border-[3px] border-gold/30 sm:h-[450px] sm:w-[450px]" />

      <div className="absolute -right-8 -bottom-12 h-[190px] w-[190px] rounded-full border-2 border-gold/25 sm:h-[300px] sm:w-[300px]" />

      {/* ========================================
          LARGE DECORATIVE SHAPES
      ======================================== */}

      {/* Upper right circle */}
      <div className="absolute right-[8%] top-[12%] h-36 w-36 rounded-full bg-gold/15 sm:h-52 sm:w-52" />

      {/* Middle left oval */}
      <div className="absolute -left-12 top-[45%] h-64 w-32 rotate-[35deg] rounded-full bg-cream/10" />

      {/* Middle right circle */}
      <div className="absolute right-[5%] top-[50%] h-32 w-32 rounded-full border-[3px] border-cream/25 sm:h-48 sm:w-48" />

      {/* Bottom left oval */}
      <div className="absolute left-[15%] bottom-[8%] h-48 w-24 -rotate-[35deg] rounded-full bg-gold/15" />

      {/* ========================================
          DOT PATTERNS
      ======================================== */}

      {/* Upper right */}
      <div
        className="absolute right-[4%] top-[8%] h-48 w-40 opacity-50"
        style={{
          backgroundImage:
            'radial-gradient(circle, #F5D88D 2px, transparent 2px)',
          backgroundSize: '22px 22px',
        }}
      />

      {/* Lower left */}
      <div
        className="absolute bottom-[8%] left-[5%] h-48 w-40 opacity-45"
        style={{
          backgroundImage:
            'radial-gradient(circle, #F5D88D 2px, transparent 2px)',
          backgroundSize: '22px 22px',
        }}
      />

      {/* ========================================
          SMALL GEOMETRIC ACCENTS
      ======================================== */}

      <div className="absolute left-[28%] top-[15%] h-12 w-12 rotate-45 rounded-lg border-[3px] border-gold/30" />

      <div className="absolute right-[22%] top-[38%] h-16 w-16 rotate-12 rounded-2xl border-[3px] border-cream/20" />

      <div className="absolute left-[12%] bottom-[28%] h-12 w-12 rotate-[30deg] rounded-lg bg-gold/15" />

      <div className="absolute right-[12%] bottom-[18%] h-14 w-14 rotate-45 rounded-xl border-[3px] border-gold/25" />

    </div>
  )
}

export default function ReviewsCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-rust text-cream">

      <DecorativeBackground />

      <div className="page-shell relative z-10 grid lg:grid-cols-[0.8fr_1.2fr]">

        {/* LEFT SIDE */}

        <div className="flex items-center py-16 sm:py-20 lg:py-24 lg:pr-16">
          <div className="max-w-md">

            <Quote
              size={34}
              className="text-gold"
            />

            <p className="mt-6 text-xs font-bold uppercase tracking-[0.24em] text-gold">
              From our customers
            </p>

            <h2 className="mt-3 font-display text-5xl leading-[0.95] sm:text-6xl">
              Our customers
              <br />
              love us.
            </h2>

            <div className="mt-6">
              <Stars />
            </div>

            <p className="mt-6 max-w-sm text-base leading-7 text-cream/75">
              Fresh food, generous portions, and a neighborhood
              experience that keeps Stony Brook coming back.
            </p>

            <a
              href={siteInfo.googleReviewUrl}
              target="_blank"
              rel="noreferrer"
              className="
                mt-8 inline-flex items-center gap-2
                rounded-full bg-gold px-6 py-3
                text-sm font-bold text-forest
                transition duration-300
                hover:-translate-y-0.5 hover:shadow-xl
              "
            >
              Leave a review
              <ExternalLink size={16} />
            </a>

          </div>
        </div>

        {/* RIGHT SIDE / CONVEYOR */}

        <div className="relative border-t border-cream/15 lg:border-l lg:border-t-0">

          {/* Fade top */}
          <div className="pointer-events-none absolute left-0 right-0 top-0 z-20 h-24 bg-gradient-to-b from-rust to-transparent" />

          {/* Fade bottom */}
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 h-24 bg-gradient-to-t from-rust to-transparent" />

          <div className="review-conveyor h-[540px] overflow-hidden sm:h-[620px] lg:h-[680px]">

            <div className="review-conveyor-track">

              {/* First set */}
              <div className="review-conveyor-set">
                {reviews.map((review, index) => (
                  <ReviewCard
                    key={`review-a-${index}`}
                    review={review}
                  />
                ))}
              </div>

              {/* Duplicate for seamless loop */}
              <div
                className="review-conveyor-set"
                aria-hidden="true"
              >
                {reviews.map((review, index) => (
                  <ReviewCard
                    key={`review-b-${index}`}
                    review={review}
                    hidden
                  />
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}