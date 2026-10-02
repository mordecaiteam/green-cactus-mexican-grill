import { useEffect, useState } from 'react'
import { ArrowRight, MapPin, Phone, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { siteInfo } from '../../data/site'

import food1 from '../../assets/food/food(7).png'
import food2 from '../../assets/food/food(22).png'
import food3 from '../../assets/food/food(24).png'
import food4 from '../../assets/food/food(32).png'
import food5 from '../../assets/food/food(46).png'

const heroImages = [food1, food2, food3, food4, food5]

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((current) => (current + 1) % heroImages.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative overflow-hidden">
      {/* Background slideshow */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <img
            key={image}
            src={image}
            alt=""
            aria-hidden="true"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(25,38,28,.94)_0%,rgba(25,38,28,.82)_43%,rgba(25,38,28,.25)_75%)]" />

      {/* Hero content */}
      <div className="page-shell relative z-10 flex min-h-[calc(100svh-88px)] items-center py-20">
        <div className="max-w-3xl text-cream">
          <h1 className="font-display text-[clamp(4rem,10vw,8.4rem)] leading-[.84] tracking-[-.025em]">
            FRESHLY MADE.
            <br />
            <span className="text-gold">UNIQUELY YOURS.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-cream/80 sm:text-lg">
            Bold Mexican favorites, generous portions, and the freedom to
            make every order your own—served fresh in Stony Brook.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              className="button-gold"
              href={siteInfo.doorDashUrl}
              target="_blank"
              rel="noreferrer"
            >
              Order now <ArrowRight size={18} />
            </a>

            <Link className="button-ghost" to="/gallery">
              See the restaurant
            </Link>
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-white/15 pt-6 text-sm text-cream/65 sm:flex-row sm:gap-8">
            <a
              href={siteInfo.directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:text-white"
            >
              <MapPin size={17} className="text-gold" />
              1099 N Country Rd
            </a>

            <a
              href={siteInfo.phoneHref}
              className="inline-flex items-center gap-2 hover:text-white"
            >
              <Phone size={17} className="text-gold" />
              {siteInfo.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}