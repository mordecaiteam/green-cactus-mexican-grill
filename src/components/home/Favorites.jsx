// src/components/home/Favorites.jsx

import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import quesadillaImg from '../../assets/menu/thumb/favorites/favorites-quesadilla.webp'
import burritoImg from '../../assets/menu/thumb/burritos/burritos-green-cactus-burrito.webp'
import tacoPrimoImg from '../../assets/gallery/large/gallery-04.webp'

const favorites = [
  {
    name: 'Quesadilla',
    slogan: 'Golden, cheesy, impossible to resist.',
    note: 'Melted jack cheese in a flour tortilla, served with fresh pico de gallo, guacamole, and sour cream.',
    tag: 'Most Liked',
    image: quesadillaImg,
  },
  {
    name: 'Green Cactus Burrito',
    slogan: 'Big flavor wrapped into every bite.',
    note: 'Char-broiled chicken or steak with melted jack cheese, guacamole, and fresh pico de gallo.',
    tag: 'Signature',
    image: burritoImg,
  },
  {
    name: 'Taco Primo',
    slogan: 'Fresh, crunchy, and piled high.',
    note: 'Crispy corn shell filled with seasoned ground beef toppings, and served with hot or mild salsa.',
    tag: 'Popular Pick',
    image: tacoPrimoImg,
  },
]

function DecorativeBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      {/* ========================================
          LARGE COLOR BLOBS
      ======================================== */}

      {/* Top left sage */}
      <div className="absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-sage/35 blur-3xl sm:h-[600px] sm:w-[600px]" />

      {/* Top right terracotta */}
      <div className="absolute -right-40 top-[5%] h-[450px] w-[450px] rounded-full bg-rust/20 blur-3xl sm:h-[650px] sm:w-[650px]" />

      {/* Middle left gold */}
      <div className="absolute -left-40 top-[32%] h-[500px] w-[500px] rounded-full bg-gold/20 blur-3xl" />

      {/* Middle right sage */}
      <div className="absolute -right-48 top-[48%] h-[600px] w-[600px] rounded-full bg-sage/30 blur-3xl" />

      {/* Bottom left terracotta */}
      <div className="absolute -left-40 bottom-[12%] h-[500px] w-[500px] rounded-full bg-rust/20 blur-3xl" />

      {/* Bottom right gold */}
      <div className="absolute -right-32 -bottom-32 h-[450px] w-[450px] rounded-full bg-gold/25 blur-3xl" />

      {/* ========================================
          CONCENTRIC CIRCLES
      ======================================== */}

      {/* Upper right circles */}
      <div className="absolute -right-36 top-[3%] h-[350px] w-[350px] rounded-full border-[3px] border-rust/30 sm:h-[550px] sm:w-[550px]" />

      <div className="absolute -right-20 top-[6%] h-[240px] w-[240px] rounded-full border-[3px] border-rust/25 sm:h-[400px] sm:w-[400px]" />

      <div className="absolute -right-6 top-[9%] h-[130px] w-[130px] rounded-full border-2 border-rust/20 sm:h-[250px] sm:w-[250px]" />

      {/* Middle left circles */}
      <div className="absolute -left-40 top-[40%] h-[420px] w-[420px] rounded-full border-[3px] border-forest/20" />

      <div className="absolute -left-24 top-[43%] h-[300px] w-[300px] rounded-full border-[3px] border-forest/20" />

      <div className="absolute -left-8 top-[46%] h-[180px] w-[180px] rounded-full border-2 border-forest/15" />

      {/* Bottom right circles */}
      <div className="absolute -right-40 bottom-[4%] h-[420px] w-[420px] rounded-full border-[3px] border-gold/40" />

      <div className="absolute -right-24 bottom-[7%] h-[300px] w-[300px] rounded-full border-[3px] border-gold/35" />

      <div className="absolute -right-8 bottom-[10%] h-[180px] w-[180px] rounded-full border-2 border-gold/30" />

      {/* ========================================
          ORGANIC SHAPES
      ======================================== */}

      {/* Top left tilted oval */}
      <div className="absolute left-[3%] top-[8%] h-44 w-24 rotate-[35deg] rounded-full bg-rust/15 sm:h-64 sm:w-36" />

      {/* Middle right oval */}
      <div className="absolute right-[3%] top-[38%] h-56 w-28 -rotate-[30deg] rounded-full bg-sage/30 sm:h-80 sm:w-40" />

      {/* Lower left oval */}
      <div className="absolute left-[4%] bottom-[18%] h-48 w-24 rotate-[40deg] rounded-full bg-gold/25 sm:h-72 sm:w-36" />

      {/* ========================================
          DOT PATTERNS
      ======================================== */}

      {/* Upper left */}
      <div
        className="absolute left-[5%] top-[18%] h-40 w-32 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(circle, #9F4D32 2px, transparent 2px)',
          backgroundSize: '20px 20px',
        }}
      />

      {/* Middle right */}
      <div
        className="absolute right-[3%] top-[55%] h-48 w-36 opacity-35"
        style={{
          backgroundImage:
            'radial-gradient(circle, #284A37 2px, transparent 2px)',
          backgroundSize: '22px 22px',
        }}
      />

      {/* Lower left */}
      <div
        className="absolute bottom-[6%] left-[8%] h-40 w-40 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(circle, #D7A235 2px, transparent 2px)',
          backgroundSize: '20px 20px',
        }}
      />

      {/* ========================================
          SMALL DECORATIVE ACCENTS
      ======================================== */}

      <div className="absolute left-[18%] top-[28%] h-10 w-10 rotate-45 rounded-lg border-[3px] border-rust/30" />

      <div className="absolute right-[12%] top-[30%] h-16 w-16 rotate-12 rounded-2xl border-[3px] border-gold/35" />

      <div className="absolute left-[12%] top-[64%] h-14 w-14 rotate-[25deg] rounded-xl bg-sage/25" />

      <div className="absolute right-[18%] bottom-[20%] h-12 w-12 rotate-45 rounded-lg border-[3px] border-rust/25" />

    </div>
  )
}

export default function Favorites() {
  return (
    <section className="relative isolate overflow-hidden bg-sand py-20 sm:py-24">

      <DecorativeBackground />

      <div className="page-shell relative z-10">

        {/* SECTION HEADING */}

        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Craveable classics</p>

            <h2 className="section-title mt-3">
              Start with a favorite.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-ink/60">
            A taste of the Green Cactus menu—bold, satisfying, and always made
            with room for your personal touch.
          </p>
        </div>

        {/* FAVORITES */}

        <div className="mt-14 space-y-10 md:space-y-12">
          {favorites.map((favorite, index) => {
            const imageFirst = index % 2 === 0

            return (
              <article
                key={favorite.name}
                className="grid items-center gap-7 md:grid-cols-2 md:gap-12 lg:gap-16"
              >
                {/* FOOD IMAGE */}

                <div className={imageFirst ? 'md:order-1' : 'md:order-2'}>
                  <div className="group relative overflow-hidden rounded-[2rem] shadow-xl shadow-forest/10">
                    <img
                      src={favorite.image}
                      alt={favorite.name}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    <span className="absolute bottom-5 right-5 font-display text-6xl text-white/80 drop-shadow-lg">
                      0{index + 1}
                    </span>
                  </div>
                </div>

                {/* FOOD DESCRIPTION */}

                <div className={imageFirst ? 'md:order-2' : 'md:order-1'}>
                  <div className="max-w-lg">
                    <span className="text-xs font-bold uppercase tracking-[.22em] text-rust">
                      {favorite.tag}
                    </span>

                    <h3 className="mt-3 font-display text-4xl leading-tight text-forest sm:text-5xl lg:text-6xl">
                      {favorite.name}
                    </h3>

                    <p className="mt-3 text-lg font-semibold leading-7 text-rust sm:text-xl">
                      {favorite.slogan}
                    </p>

                    <p className="mt-4 max-w-md text-base leading-7 text-ink/70">
                      {favorite.note}
                    </p>

                    <div className="mt-6 h-px w-16 bg-rust/40" />
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        {/* MENU CTA */}

        <div className="mt-14 flex flex-col items-center text-center">
          <p className="text-sm font-semibold uppercase tracking-[.2em] text-forest/50">
            Still hungry?
          </p>

          <h3 className="mt-2 font-display text-3xl text-forest sm:text-4xl">
            There’s more where that came from.
          </h3>

          <Link
            to="/menu"
            className="button-primary mt-6 inline-flex items-center gap-2"
          >
            View more dishes
            <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  )
}