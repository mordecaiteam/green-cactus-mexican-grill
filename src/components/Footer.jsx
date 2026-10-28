// src/components/Footer.jsx

import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  ArrowUpRight,
  Navigation,
} from 'lucide-react'

import { NavLink } from 'react-router-dom'
import { navigation, siteInfo } from '../data/site'

import mordecaiLogo from '../assets/misc/MordecAI_logo.png'

// ========================================
// COMPACT CONTACT LINK
// ========================================

function ContactLink({ href, icon: Icon, label, external = false }) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="
        group
        flex
        min-h-[44px]
        w-full
        items-center
        gap-2
        rounded-lg
        border
        border-gold/20
        bg-white/5
        px-2
        py-1.5
        transition-all
        duration-200
        hover:border-gold
        hover:bg-gold/10
        focus-visible:outline
        focus-visible:outline-2
        focus-visible:outline-offset-2
        focus-visible:outline-gold
        active:scale-[0.98]
        sm:gap-3
        sm:px-3
      "
    >
      {/* YELLOW ICON */}

      <span
        className="
          flex
          h-8
          w-8
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-gold
          text-forest
          sm:h-9
          sm:w-9
        "
      >
        <Icon size={17} strokeWidth={2} />
      </span>

      {/* LABEL */}

      <span className="min-w-0 flex-1 text-xs font-semibold leading-5 text-cream sm:text-sm">
        {label}
      </span>

      {/* LINK INDICATOR */}

      <ArrowUpRight
        size={14}
        className="hidden shrink-0 text-gold/70 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:block"
      />
    </a>
  )
}

// ========================================
// FOOTER
// ========================================

export default function Footer() {
  return (
    <footer className="bg-forest text-cream">

      <div className="page-shell py-9 sm:py-12 lg:py-14">

        {/* ========================================
            MAIN FOOTER GRID
        ======================================== */}

        <div className="grid grid-cols-2 gap-x-5 gap-y-8 sm:gap-x-10 lg:grid-cols-[1.3fr_0.65fr_1fr] lg:gap-12">

          {/* ========================================
              BRAND
          ======================================== */}

          <div className="col-span-2 lg:col-span-1">

            {/* LOGO */}

            <div className="flex items-center gap-3">

              <img
                src="/images/green-cactus-logo.png"
                alt="Green Cactus Fresh Mexican Grill"
                loading="lazy"
                decoding="async"
                className="h-14 w-14 shrink-0 rounded-full object-cover sm:h-16 sm:w-16"
              />

              <div className="min-w-0">

                <p className="font-display text-xl leading-none tracking-wide sm:text-2xl">
                  GREEN CACTUS
                </p>

                <p className="mt-1 text-[0.55rem] font-bold uppercase tracking-[0.16em] text-gold sm:text-[0.65rem]">
                  Fresh Mexican Grill
                </p>

              </div>

            </div>

            {/* DESCRIPTION */}

            <p className="mt-4 max-w-sm text-sm leading-6 text-cream/65">
              Fresh Mexican favorites, generous portions,
              and food made your way in Stony Brook.
            </p>

            {/* ADDRESS */}

            <div className="mt-3 flex items-start gap-2">

              <MapPin
                size={16}
                className="mt-1 shrink-0 text-gold"
              />

              <p className="text-xs leading-5 text-cream/60 sm:text-sm">
                {siteInfo.addressLine}
              </p>

            </div>

            {/* DIRECTIONS BUTTON */}

            <a
              href={siteInfo.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                mt-5
                inline-flex
                min-h-[44px]
                items-center
                justify-center
                gap-2
                rounded-full
                bg-gold
                px-6
                py-2.5
                text-xs
                font-bold
                uppercase
                tracking-[0.12em]
                text-forest
                transition
                hover:brightness-110
                active:scale-[0.98]
              "
            >
              Get Directions

              <Navigation size={16} />

            </a>

          </div>

          {/* ========================================
              EXPLORE
          ======================================== */}

          <div className="min-w-0">

            <h3 className="footer-heading text-lg sm:text-xl">
              Explore
            </h3>

            <nav
              aria-label="Footer navigation"
              className="mt-4 flex flex-col items-start gap-3"
            >
              {navigation.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className="text-xs text-cream/70 transition hover:text-gold sm:text-sm"
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

          </div>

          {/* ========================================
              CONNECT WITH US
          ======================================== */}

          <div className="min-w-0">

            <h3 className="footer-heading text-lg leading-tight sm:text-xl">
              Connect With Us
            </h3>

            <div className="mt-4 flex flex-col gap-2">

              <ContactLink
                href={siteInfo.phoneHref}
                icon={Phone}
                label={siteInfo.phoneDisplay}
              />

              <ContactLink
                href={siteInfo.emailHref}
                icon={Mail}
                label="Email Us"
              />

              <ContactLink
                href={siteInfo.instagramUrl}
                icon={Instagram}
                label="Instagram"
                external
              />

              <ContactLink
                href={siteInfo.facebookUrl}
                icon={Facebook}
                label="Facebook"
                external
              />

            </div>

          </div>

        </div>

        {/* ========================================
            BOTTOM BAR
        ======================================== */}

        <div className="mt-9 border-t border-cream/10 pt-5 sm:mt-10">

          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

            {/* COPYRIGHT + LEGAL */}

            <div className="flex flex-col gap-2">

              <p className="text-xs leading-5 text-cream/45">
                © {new Date().getFullYear()} Green Cactus Fresh
                Mexican Grill. All rights reserved.
              </p>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">

                <NavLink
                  to="/privacy-policy"
                  className="text-xs text-cream/45 transition hover:text-gold"
                >
                  Privacy Policy
                </NavLink>

                <span className="text-cream/20" aria-hidden="true">
                  •
                </span>

                <NavLink
                  to="/terms-of-service"
                  className="text-xs text-cream/45 transition hover:text-gold"
                >
                  Terms of Service
                </NavLink>

              </div>

            </div>

            {/* MORDECAI CREDIT */}

            <a
              href="https://getmordecai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                flex
                w-fit
                items-center
                gap-3
                rounded-lg
                border
                border-cream/10
                bg-cream/5
                px-3
                py-1.5
                transition
                hover:border-gold/60
                hover:bg-cream/10
              "
            >
              <span className="text-xs text-cream/45 transition group-hover:text-cream/75">
                Developed by
              </span>

              <img
                src={mordecaiLogo}
                alt="MordecAI"
                loading="lazy"
                decoding="async"
                className="h-6 w-auto transition group-hover:scale-105"
              />
            </a>

          </div>

        </div>

      </div>

    </footer>
  )
}