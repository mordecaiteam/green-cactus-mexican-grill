// src/pages/Contact.jsx

import { useState } from 'react'

import {
  Clock,
  Mail,
  MapPin,
  Phone,
  Send,
  ExternalLink,
  Navigation,
} from 'lucide-react'

import { useNavigate } from 'react-router-dom'
import { siteInfo } from '../data/site'

import igLogo from '../assets/misc/ig_logo.svg'
import fbLogo from '../assets/misc/fb_logo.svg'

// ========================================
// RESPONSIVE CACTUS BACKGROUNDS
// ========================================

import cactusDesktop from '../assets/misc/background-desktop.webp'
import cactusMobile from '../assets/misc/background-mobile.webp'

// ========================================
// MAP CONFIGURATION
// ========================================

const mapAddress = '1099 N Country Rd, Stony Brook, NY 11790'

const googleMapEmbedUrl =
  `https://www.google.com/maps?q=${encodeURIComponent(mapAddress)}&output=embed`

const appleMapsUrl =
  `https://maps.apple.com/?daddr=${encodeURIComponent(mapAddress)}`

// ========================================
// RESPONSIVE CACTUS BACKGROUND
// ========================================

function CactusBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      {/* MOBILE BACKGROUND */}

      <div
        className="absolute inset-0 bg-top bg-repeat-y md:hidden"
        style={{
          backgroundImage: `url(${cactusMobile})`,
          backgroundSize: '100% auto',
          opacity: 0.3,
        }}
      />

      {/* DESKTOP BACKGROUND */}

      <div
        className="absolute inset-0 hidden bg-top bg-repeat-y md:block"
        style={{
          backgroundImage: `url(${cactusDesktop})`,
          backgroundSize: '100% auto',
          opacity: 0.3,
        }}
      />
    </div>
  )
}

// ========================================
// CONTACT PAGE
// ========================================

export default function Contact() {
  const navigate = useNavigate()

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  // ========================================
  // NETLIFY FORM SUBMISSION
  // ========================================

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (isSubmitting) return

    const form = event.currentTarget
    const formData = new FormData(form)

    setIsSubmitting(true)
    setSubmitError('')

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData).toString(),
      })

      if (!response.ok) {
        throw new Error(
          `Form submission failed with status ${response.status}`
        )
      }

      form.reset()
      navigate('/thank-you')
    } catch (error) {
      console.error('Contact form error:', error)

      setSubmitError(
        'Sorry, we could not send your message. Please try again.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main
      id="main-content"
      className="relative isolate min-h-screen overflow-hidden bg-cream"
    >
      {/* ========================================
          CACTUS BACKGROUND
      ======================================== */}

      <CactusBackground />

      {/* ========================================
          PAGE CONTENT
      ======================================== */}

      <div className="relative z-10">

        {/* ========================================
            CONTACT HERO
        ======================================== */}

        <section className="pb-8 pt-12 sm:pb-12 sm:pt-20">
          <div className="page-shell">
            <div className="max-w-3xl">

              <p className="eyebrow">
                Contact Green Cactus
              </p>

              <h1 className="section-title mt-3">
                Come say hello.
              </h1>

              <p className="mt-4 max-w-xl text-base leading-7 text-ink/65 sm:text-lg">
                Whether you're stopping in for your favorites or have a
                question for our team, we're here to help.
              </p>

            </div>
          </div>
        </section>

        {/* ========================================
            CONTACT FORM + INFORMATION
        ======================================== */}

        <section className="pb-16 sm:pb-24">
          <div className="page-shell">

            <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">

              {/* ========================================
                  CONTACT FORM
                  FIRST ON MOBILE
                  LEFT ON DESKTOP
              ======================================== */}

              <div className="rounded-[1.75rem] bg-white p-6 shadow-xl shadow-forest/5 sm:p-10">

                {/* FORM HEADER */}

                <div className="flex items-center gap-3">

                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold/15 text-rust">
                    <Mail size={20} />
                  </div>

                  <div className="min-w-0">

                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-rust">
                      Contact Us
                    </p>

                    <h2 className="font-display text-2xl leading-tight text-forest sm:text-3xl">
                      Send us a message.
                    </h2>

                  </div>

                </div>

                {/* ========================================
                    NETLIFY CONTACT FORM
                ======================================== */}

                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="mt-8 space-y-5"
                >

                  <input
                    type="hidden"
                    name="form-name"
                    value="contact"
                  />

                  {/* Honeypot */}

                  <p className="hidden">
                    <label>
                      Don't fill this out if you're human:
                      <input
                        name="bot-field"
                        tabIndex="-1"
                        autoComplete="off"
                      />
                    </label>
                  </p>

                  {/* NAME + EMAIL */}

                  <div className="grid gap-5 sm:grid-cols-2">

                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-bold text-forest"
                      >
                        Your name
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="Your name"
                        className="w-full rounded-xl border border-forest/15 bg-cream/40 px-4 py-3.5 text-ink outline-none transition placeholder:text-ink/35 focus:border-rust focus:ring-2 focus:ring-rust/10"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-bold text-forest"
                      >
                        Email address
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="you@example.com"
                        className="w-full rounded-xl border border-forest/15 bg-cream/40 px-4 py-3.5 text-ink outline-none transition placeholder:text-ink/35 focus:border-rust focus:ring-2 focus:ring-rust/10"
                      />
                    </div>

                  </div>

                  {/* PHONE */}

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-bold text-forest"
                    >
                      Phone
                      <span className="ml-1 font-normal text-ink/40">
                        (optional)
                      </span>
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="(631) 555-0123"
                      className="w-full rounded-xl border border-forest/15 bg-cream/40 px-4 py-3.5 text-ink outline-none transition placeholder:text-ink/35 focus:border-rust focus:ring-2 focus:ring-rust/10"
                    />
                  </div>

                  {/* SUBJECT */}

                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-sm font-bold text-forest"
                    >
                      What can we help with?
                    </label>

                    <select
                      id="subject"
                      name="subject"
                      defaultValue=""
                      required
                      className="w-full rounded-xl border border-forest/15 bg-cream/40 px-4 py-3.5 text-ink outline-none transition focus:border-rust focus:ring-2 focus:ring-rust/10"
                    >
                      <option value="" disabled>
                        Select a topic
                      </option>

                      <option value="general">
                        General question
                      </option>

                      <option value="catering">
                        Catering
                      </option>

                      <option value="menu">
                        Menu question
                      </option>

                      <option value="feedback">
                        Feedback
                      </option>

                      <option value="other">
                        Something else
                      </option>
                    </select>
                  </div>

                  {/* MESSAGE */}

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-bold text-forest"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="How can we help?"
                      className="w-full resize-none rounded-xl border border-forest/15 bg-cream/40 px-4 py-3.5 text-ink outline-none transition placeholder:text-ink/35 focus:border-rust focus:ring-2 focus:ring-rust/10"
                    />
                  </div>

                  {/* ERROR MESSAGE */}

                  {submitError && (
                    <div
                      role="alert"
                      className="rounded-xl border border-rust/20 bg-rust/5 px-4 py-3 text-sm leading-6 text-rust"
                    >
                      {submitError}
                    </div>
                  )}

                  {/* SUBMIT BUTTON */}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="button-primary flex w-full items-center justify-center gap-3 text-center disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                  >
                    <Send size={17} className="shrink-0" />

                    <span>
                      {isSubmitting ? 'Sending...' : 'Send message'}
                    </span>
                  </button>

                  <p className="text-xs leading-5 text-ink/40">
                    We'll only use the information you provide to respond
                    to your message.
                  </p>

                </form>

              </div>

              {/* ========================================
                  LOCATION + CONTACT INFORMATION
              ======================================== */}

              <div className="min-w-0 space-y-8">

                {/* ========================================
                    LOCATION
                ======================================== */}

                <div>

                  <p className="eyebrow">
                    Visit Us
                  </p>

                  <h2 className="mt-2 font-display text-3xl text-forest sm:text-4xl">
                    Find us in Stony Brook.
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-ink/60">
                    Stop by for fresh Mexican favorites.
                  </p>

                  {/* GOOGLE MAP EMBED */}

                  <div className="mt-6 overflow-hidden rounded-2xl border border-forest/10 bg-white shadow-sm">

                    <iframe
                      title="Green Cactus Fresh Mexican Grill location"
                      src={googleMapEmbedUrl}
                      width="100%"
                      height="260"
                      style={{ border: 0 }}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                      className="block w-full sm:h-[300px]"
                    />

                  </div>

                  {/* ADDRESS */}

                  <div className="mt-4 flex items-start gap-3">

                    <MapPin
                      size={19}
                      className="mt-0.5 shrink-0 text-rust"
                    />

                    <p className="text-sm font-semibold leading-6 text-forest">
                      {siteInfo.addressLine}
                    </p>

                  </div>

                  {/* MAP BUTTONS */}

                  <div className="mt-5 grid grid-cols-2 gap-3">

                    <a
                      href={siteInfo.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-forest px-3 py-3 text-center text-xs font-bold uppercase tracking-wide text-white transition hover:bg-rust sm:text-sm"
                    >
                      <Navigation
                        size={16}
                        className="shrink-0"
                      />

                      Google Maps

                      <ExternalLink
                        size={13}
                        className="shrink-0"
                      />
                    </a>

                    <a
                      href={appleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-forest/15 bg-white px-3 py-3 text-center text-xs font-bold uppercase tracking-wide text-forest transition hover:border-rust hover:text-rust sm:text-sm"
                    >
                      <Navigation
                        size={16}
                        className="shrink-0"
                      />

                      Apple Maps

                      <ExternalLink
                        size={13}
                        className="shrink-0"
                      />
                    </a>

                  </div>

                </div>

                {/* ========================================
                    QUICK CONTACT
                ======================================== */}

                <div className="border-t border-forest/10 pt-6">

                  <h3 className="font-display text-2xl text-forest">
                    Get in touch.
                  </h3>

                  <div className="mt-5 space-y-4">

                    {/* PHONE */}

                    <a
                      href={siteInfo.phoneHref}
                      className="group flex items-center gap-3"
                    >
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-rust/10 text-rust transition group-hover:bg-rust group-hover:text-white">
                        <Phone size={18} />
                      </span>

                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-rust">
                          Call Us
                        </p>

                        <p className="mt-0.5 text-sm font-semibold text-forest">
                          {siteInfo.phoneDisplay}
                        </p>
                      </div>
                    </a>

                    {/* EMAIL */}

                    <a
                      href={siteInfo.emailHref}
                      className="group flex min-w-0 items-center gap-3"
                    >
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-rust/10 text-rust transition group-hover:bg-rust group-hover:text-white">
                        <Mail size={18} />
                      </span>

                      <div className="min-w-0">
                        <p className="text-xs font-bold uppercase tracking-wider text-rust">
                          Email Us
                        </p>

                        <p className="mt-0.5 break-all text-sm font-semibold text-forest">
                          {siteInfo.email}
                        </p>
                      </div>
                    </a>

                  </div>

                </div>

                {/* ========================================
                    SOCIAL MEDIA
                ======================================== */}

                <div className="border-t border-forest/10 pt-6">

                  <h3 className="font-display text-2xl text-forest">
                    Follow along.
                  </h3>

                  <p className="mt-2 text-sm text-ink/60">
                    Stay connected with Green Cactus.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-3">

                    {/* INSTAGRAM */}

                    <a
                      href={siteInfo.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-forest/15 bg-white px-4 py-2.5 text-sm font-semibold text-forest transition hover:border-rust hover:text-rust"
                    >
                      <img
                        src={igLogo}
                        alt=""
                        className="h-5 w-5 object-contain"
                      />

                      Instagram
                    </a>

                    {/* FACEBOOK */}

                    <a
                      href={siteInfo.facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-forest/15 bg-white px-4 py-2.5 text-sm font-semibold text-forest transition hover:border-rust hover:text-rust"
                    >
                      <img
                        src={fbLogo}
                        alt=""
                        className="h-5 w-5 object-contain"
                      />

                      Facebook
                    </a>

                  </div>

                </div>

                {/* ========================================
                    BUSINESS HOURS
                ======================================== */}

                <div className="border-t border-forest/10 pt-6">

                  <div className="flex items-center gap-3">

                    <Clock
                      size={22}
                      className="text-rust"
                    />

                    <h3 className="font-display text-2xl text-forest">
                      Opening hours.
                    </h3>

                  </div>

                  <div className="mt-5 space-y-3">

                    {siteInfo.hours.map((item) => (
                      <div
                        key={item.day}
                        className="flex items-center justify-between gap-4 text-sm"
                      >
                        <span className="text-ink/60">
                          {item.day}
                        </span>

                        <span className="whitespace-nowrap font-semibold text-forest">
                          {item.hours}
                        </span>
                      </div>
                    ))}

                  </div>

                  <p className="mt-4 text-xs text-ink/45">
                    Holiday hours may vary.
                  </p>

                </div>

              </div>

            </div>

          </div>
        </section>

      </div>
    </main>
  )
}