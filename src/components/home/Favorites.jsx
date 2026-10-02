import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import quesadillaImg from '../../assets/food/food(23).png'
import burritoImg from '../../assets/food/food(17).png'
import tostadaImg from '../../assets/food/food(43).png'

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
    name: 'Tostada',
    slogan: 'Fresh, crunchy, and piled high.',
    note: 'A crispy tortilla shell filled with greens, beans, guacamole, sour cream, jack cheese, and fresh pico de gallo.',
    tag: 'Popular Pick',
    image: tostadaImg,
  },
]

export default function Favorites() {
  return (
    <section className="bg-sand py-20 sm:py-24">
      <div className="page-shell">

        {/* Section heading */}
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

        {/* Favorites */}
        <div className="mt-14 space-y-10 md:space-y-12">
          {favorites.map((favorite, index) => {
            const imageFirst = index % 2 === 0

            return (
              <article
                key={favorite.name}
                className="grid items-center gap-7 md:grid-cols-2 md:gap-12 lg:gap-16"
              >
                {/* Food image */}
                <div
                  className={
                    imageFirst
                      ? 'md:order-1'
                      : 'md:order-2'
                  }
                >
                  <div className="group relative overflow-hidden rounded-[2rem]">
                    <img
                      src={favorite.image}
                      alt={favorite.name}
                      className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    {/* Number */}
                    <span className="absolute bottom-5 right-5 font-display text-6xl text-white/80 drop-shadow-lg">
                      0{index + 1}
                    </span>
                  </div>
                </div>

                {/* Food description */}
                <div
                  className={
                    imageFirst
                      ? 'md:order-2'
                      : 'md:order-1'
                  }
                >
                  <div className="max-w-lg">
                    <span className="text-xs font-bold uppercase tracking-[.22em] text-rust">
                      {favorite.tag}
                    </span>

                    <h3 className="mt-3 font-display text-4xl leading-tight text-forest sm:text-5xl lg:text-6xl">
                      {favorite.name}
                    </h3>

                    {/* Slogan */}
                    <p className="mt-3 text-lg font-semibold leading-7 text-rust sm:text-xl">
                      {favorite.slogan}
                    </p>

                    <p className="mt-4 max-w-md text-base leading-7 text-ink/60">
                      {favorite.note}
                    </p>

                    <div className="mt-6 h-px w-16 bg-rust/40" />
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        {/* Menu CTA */}
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