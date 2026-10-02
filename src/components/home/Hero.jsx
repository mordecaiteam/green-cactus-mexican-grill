import { useEffect, useState } from 'react'
import {
  ArrowRight,
  ExternalLink,
  MapPin,
  Phone,
} from 'lucide-react'

import { Link } from 'react-router-dom'
import { siteInfo } from '../../data/site'

import food1 from '../../assets/food/food(7).webp'
import food2 from '../../assets/food/food(22).webp'
import food3 from '../../assets/food/food(24).webp'
import food4 from '../../assets/food/food(32).webp'
import food5 from '../../assets/food/food(46).webp'

const heroImages = [
  food1,
  food2,
  food3,
  food4,
  food5,
]

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(
        (current) =>
          (current + 1) % heroImages.length
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative overflow-hidden">

      {/* ========================================
          BACKGROUND SLIDESHOW
      ======================================== */}

      <div className="absolute inset-0">

        {heroImages.map((image, index) => (

          <img
            key={image}
            src={image}
            alt=""
            aria-hidden="true"
            className={`
              absolute
              inset-0
              h-full
              w-full
              object-cover
              transition-opacity
              duration-1000
              ${
                index === currentImage
                  ? 'opacity-100'
                  : 'opacity-0'
              }
            `}
          />

        ))}

      </div>


      {/* Dark gradient overlay */}

      <div className="absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(25,38,28,.94)_0%,rgba(25,38,28,.82)_43%,rgba(25,38,28,.25)_75%)]" />


      {/* ========================================
          HERO CONTENT
      ======================================== */}

      <div className="page-shell relative z-10 flex min-h-[calc(100svh-88px)] items-center py-20">

        <div className="max-w-3xl text-cream">

          <h1 className="font-display text-[clamp(4rem,10vw,8.4rem)] leading-[.84] tracking-[-.025em]">
            FRESHLY MADE.
            <br />

            <span className="text-gold">
              UNIQUELY YOURS.
            </span>
          </h1>


          <p className="mt-7 max-w-xl text-base leading-7 text-cream/80 sm:text-lg">
            Bold Mexican favorites, generous portions, and the freedom to
            make every order your own—served fresh in Stony Brook.
          </p>


          {/* ========================================
              PRIMARY ACTIONS
          ======================================== */}

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">

            <a
              className="button-gold"
              href={siteInfo.doorDashUrl}
              target="_blank"
              rel="noreferrer"
            >
              Order now

              <ArrowRight size={18} />
            </a>


            <Link
              className="button-ghost"
              to="/gallery"
            >
              See the restaurant
            </Link>

          </div>


          {/* ========================================
              LOCATION + PHONE
          ======================================== */}

          <div className="mt-12 border-t border-white/15 pt-5">

            <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-3">

              {/* Address */}

              <a
                href={siteInfo.directionsUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Get directions to Green Cactus"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2.5
                  rounded-xl
                  px-3
                  py-2.5
                  text-sm
                  font-medium
                  text-cream/70
                  transition
                  duration-200
                  hover:bg-white/10
                  hover:text-white
                  active:scale-[0.98]
                "
              >

                <MapPin
                  size={18}
                  className="
                    shrink-0
                    text-gold
                    transition-transform
                    duration-200
                    group-hover:-translate-y-0.5
                  "
                />

                <span className="border-b border-white/25 pb-0.5 transition group-hover:border-gold">
                  1099 N Country Rd
                </span>

                <ExternalLink
                  size={13}
                  className="
                    ml-0.5
                    shrink-0
                    text-cream/35
                    transition
                    duration-200
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                    group-hover:text-gold
                  "
                />

              </a>


              {/* Phone */}

              <a
                href={siteInfo.phoneHref}
                aria-label={`Call Green Cactus at ${siteInfo.phoneDisplay}`}
                className="
                  group
                  inline-flex
                  items-center
                  gap-2.5
                  rounded-xl
                  px-3
                  py-2.5
                  text-sm
                  font-medium
                  text-cream/70
                  transition
                  duration-200
                  hover:bg-white/10
                  hover:text-white
                  active:scale-[0.98]
                "
              >

                <Phone
                  size={18}
                  className="
                    shrink-0
                    text-gold
                    transition-transform
                    duration-200
                    group-hover:rotate-[-8deg]
                  "
                />

                <span className="border-b border-white/25 pb-0.5 transition group-hover:border-gold">
                  {siteInfo.phoneDisplay}
                </span>

                <ArrowRight
                  size={14}
                  className="
                    ml-0.5
                    shrink-0
                    text-cream/35
                    transition
                    duration-200
                    group-hover:translate-x-1
                    group-hover:text-gold
                  "
                />

              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}