import {
  Clock,
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react'

import { siteInfo } from '../data/site'

export default function Contact() {
  return (
    <main id="main-content">

      {/* ========================================
          HERO
      ======================================== */}
      <section className="bg-forest py-16 text-cream sm:py-20">
        <div className="page-shell">
          <div className="max-w-3xl">

            <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold">
              Get in touch
            </p>

            <h1 className="mt-4 font-display text-6xl leading-[0.95] sm:text-7xl">
              We'd love to
              <span className="text-gold"> hear from you.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-cream/70 sm:text-lg">
              Have a question about Green Cactus? Send us a message or
              reach out directly to our Stony Brook location.
            </p>

          </div>
        </div>
      </section>


      {/* ========================================
          CONTACT
      ======================================== */}
      <section className="bg-cream py-16 sm:py-24">
        <div className="page-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

          {/* LEFT */}
          <div>
            <p className="eyebrow">
              Visit Green Cactus
            </p>

            <h2 className="section-title mt-3">
              Come say hello.
            </h2>

            <p className="mt-5 max-w-md leading-7 text-ink/65">
              Whether you're stopping in for your favorites or have a
              question for our team, we're here to help.
            </p>


            {/* Details */}
            <div className="mt-10 space-y-7">

              {/* Address */}
              <a
                href={siteInfo.directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="group flex items-start gap-4"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-rust text-cream transition group-hover:bg-gold group-hover:text-forest">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-rust">
                    Visit
                  </p>

                  <p className="mt-1 max-w-xs font-semibold leading-6 text-forest">
                    {siteInfo.addressLine}
                  </p>

                  <p className="mt-1 text-sm text-ink/50">
                    Get directions →
                  </p>
                </div>
              </a>


              {/* Phone */}
              <a
                href={siteInfo.phoneHref}
                className="group flex items-start gap-4"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-rust text-cream transition group-hover:bg-gold group-hover:text-forest">
                  <Phone size={20} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-rust">
                    Call
                  </p>

                  <p className="mt-1 font-semibold text-forest">
                    {siteInfo.phoneDisplay}
                  </p>

                  <p className="mt-1 text-sm text-ink/50">
                    Tap to call
                  </p>
                </div>
              </a>


              {/* Hours */}
<div className="flex items-start gap-4">

  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-rust text-cream">
    <Clock size={20} />
  </div>

  <div className="w-full max-w-xs">

    <p className="text-xs font-bold uppercase tracking-[0.18em] text-rust">
      Hours
    </p>

    <div className="mt-3 space-y-2">

      {siteInfo.hours.map((item) => (
        <div
          key={item.day}
          className="flex items-center justify-between gap-8 text-sm"
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

    <p className="mt-3 text-xs text-ink/45">
      Holiday hours may vary.
    </p>

  </div>

</div>

            </div>
          </div>


          {/* ========================================
              NETLIFY FORM
          ======================================== */}
          <div className="rounded-[2rem] bg-white p-7 shadow-xl shadow-forest/5 sm:p-10">

            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-full bg-gold/15 text-rust">
                <Mail size={20} />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-rust">
                  Contact us
                </p>

                <h2 className="font-display text-3xl text-forest">
                  Send us a message.
                </h2>
              </div>
            </div>


            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              action="/thank-you"
              className="mt-8 space-y-6"
            >

              {/* Required by Netlify */}
              <input
                type="hidden"
                name="form-name"
                value="contact"
              />

              {/* Spam protection */}
              <p className="hidden">
                <label>
                  Don't fill this out if you're human:
                  <input name="bot-field" />
                </label>
              </p>


              {/* Name + Email */}
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
                    className="
                      w-full rounded-xl
                      border border-forest/15
                      bg-cream/40 px-4 py-3.5
                      text-ink outline-none
                      transition
                      placeholder:text-ink/35
                      focus:border-rust
                      focus:ring-2
                      focus:ring-rust/10
                    "
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
                    className="
                      w-full rounded-xl
                      border border-forest/15
                      bg-cream/40 px-4 py-3.5
                      text-ink outline-none
                      transition
                      placeholder:text-ink/35
                      focus:border-rust
                      focus:ring-2
                      focus:ring-rust/10
                    "
                  />
                </div>

              </div>


              {/* Phone */}
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
                  className="
                    w-full rounded-xl
                    border border-forest/15
                    bg-cream/40 px-4 py-3.5
                    text-ink outline-none
                    transition
                    placeholder:text-ink/35
                    focus:border-rust
                    focus:ring-2
                    focus:ring-rust/10
                  "
                />
              </div>


              {/* Subject */}
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
                  className="
                    w-full rounded-xl
                    border border-forest/15
                    bg-cream/40 px-4 py-3.5
                    text-ink outline-none
                    transition
                    focus:border-rust
                    focus:ring-2
                    focus:ring-rust/10
                  "
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


              {/* Message */}
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
                  rows="6"
                  placeholder="How can we help?"
                  className="
                    w-full resize-none rounded-xl
                    border border-forest/15
                    bg-cream/40 px-4 py-3.5
                    text-ink outline-none
                    transition
                    placeholder:text-ink/35
                    focus:border-rust
                    focus:ring-2
                    focus:ring-rust/10
                  "
                />
              </div>


              {/* Submit */}
              <button
                type="submit"
                className="button-primary w-full justify-center sm:w-auto"
              >
                Send message
                <Send size={17} />
              </button>

              <p className="text-xs leading-5 text-ink/40">
                We'll only use the information you provide to respond
                to your message.
              </p>

            </form>

          </div>
        </div>
      </section>

    </main>
  )
}