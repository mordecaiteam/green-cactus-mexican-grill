import { MapPin, Phone } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { navigation, siteInfo } from '../data/site'

import mordecaiLogo from '../assets/misc/MordecAI_logo.png'
import emailLogo from '../assets/misc/gmail_logo.svg'
import igLogo from '../assets/misc/ig_logo.svg'
import fbLogo from '../assets/misc/fb_logo.svg'

export default function Footer() {
  return (
    <footer className="bg-forest text-cream">

      <div className="page-shell py-14 sm:py-16">

        {/* ========================================
            MAIN FOOTER
        ======================================== */}

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}

          <div className="lg:col-span-1">

            <div className="flex items-center gap-3">

              <img
                src="/images/green-cactus-logo.png"
                alt="Green Cactus"
                className="h-16 w-16 rounded-full object-cover"
              />

              <div className="leading-none">

                <p className="font-display text-2xl tracking-wide">
                  GREEN CACTUS
                </p>

                <p className="mt-1 text-[0.62rem] font-bold uppercase tracking-[0.22em] text-gold">
                  Fresh Mexican Grill
                </p>

              </div>

            </div>


            <p className="mt-5 max-w-xs text-sm leading-6 text-cream/65">
              Fresh Mexican favorites, generous portions, and food
              made your way in Stony Brook.
            </p>

          </div>


          {/* Navigation */}

          <div>

            <h3 className="footer-heading">
              Explore
            </h3>

            <nav className="mt-5 flex flex-col items-start gap-3">

              {navigation.map((item) => (

                <NavLink
                  key={item.to}
                  to={item.to}
                  className="text-sm text-cream/65 transition hover:text-gold"
                >
                  {item.label}
                </NavLink>

              ))}

            </nav>

          </div>


          {/* Visit */}

          <div>

            <h3 className="footer-heading">
              Visit Us
            </h3>

            <div className="mt-5 flex flex-col gap-4">

              <a
                href={siteInfo.directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="group flex items-start gap-3 text-sm text-cream/65 transition hover:text-cream"
              >
                <MapPin
                  size={19}
                  className="mt-0.5 shrink-0 text-gold"
                />

                <span>
                  {siteInfo.addressLine}
                </span>
              </a>


              <a
                href={siteInfo.phoneHref}
                className="group flex items-center gap-3 text-sm text-cream/65 transition hover:text-cream"
              >
                <Phone
                  size={18}
                  className="shrink-0 text-gold"
                />

                <span>
                  {siteInfo.phoneDisplay}
                </span>
              </a>

            </div>

          </div>


          {/* Connect */}

          <div>

            <h3 className="footer-heading">
              Connect With Us
            </h3>

            <div className="mt-5 flex flex-col gap-4">

              {/* Email */}

              <a
                href="mailto:YOUR_EMAIL_HERE"
                className="group flex items-center gap-3 text-sm text-cream/65 transition hover:text-cream"
              >
                <img
                  src={emailLogo}
                  alt=""
                  className="h-7 w-7 object-contain transition group-hover:scale-110"
                />

                <span>
                  YOUR EMAIL
                </span>
              </a>


              {/* Instagram */}

              <a
                href="YOUR_INSTAGRAM_URL"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 text-sm text-cream/65 transition hover:text-cream"
              >
                <img
                  src={igLogo}
                  alt=""
                  className="h-7 w-7 object-contain transition group-hover:scale-110"
                />

                <span>
                  Instagram
                </span>
              </a>


              {/* Facebook */}

              <a
                href="YOUR_FACEBOOK_URL"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 text-sm text-cream/65 transition hover:text-cream"
              >
                <img
                  src={fbLogo}
                  alt=""
                  className="h-7 w-7 object-contain transition group-hover:scale-110"
                />

                <span>
                  Facebook
                </span>
              </a>

            </div>

          </div>

        </div>


        {/* ========================================
            BOTTOM BAR
        ======================================== */}

        <div className="mt-12 border-t border-cream/10 pt-6">

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            {/* Copyright + Legal */}

            <div className="flex flex-col gap-3">

              <p className="text-xs text-cream/45">
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

                <span
                  className="text-cream/20"
                  aria-hidden="true"
                >
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


            {/* MordecAI Credit */}

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
                px-4
                py-2
                transition
                duration-300
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
                className="h-7 w-auto transition duration-300 group-hover:scale-105"
              />

            </a>

          </div>

        </div>

      </div>

    </footer>
  )
}