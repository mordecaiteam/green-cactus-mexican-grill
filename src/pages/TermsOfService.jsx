import { Link } from 'react-router-dom'

export default function TermsOfService() {
  return (
    <main id="main-content" className="bg-cream">

      {/* Header */}

      <section className="bg-forest py-16 text-cream sm:py-20">

        <div className="page-shell">

          <p className="eyebrow text-gold">
            Green Cactus
          </p>

          <h1 className="mt-3 font-display text-5xl sm:text-6xl">
            Terms of Service
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-7 text-cream/65">
            Terms governing your use of the Green Cactus Fresh
            Mexican Grill website.
          </p>

        </div>

      </section>


      {/* Terms */}

      <section className="py-14 sm:py-20">

        <div className="page-shell">

          <div className="mx-auto max-w-3xl">

            <p className="text-sm text-ink/45">
              Last updated: October 2026
            </p>


            <div className="mt-10 space-y-10 text-[0.95rem] leading-7 text-ink/70">

              <section>
                <h2 className="font-display text-3xl text-forest">
                  Website Use
                </h2>

                <p className="mt-3">
                  This website is provided for general information
                  about Green Cactus Fresh Mexican Grill, including
                  menu offerings, restaurant information, contact
                  details, and links to related services.
                </p>
              </section>


              <section>
                <h2 className="font-display text-3xl text-forest">
                  Menu & Pricing
                </h2>

                <p className="mt-3">
                  Menu items, ingredients, availability, portions,
                  and prices may change without notice. Information
                  displayed on the website is intended to be kept
                  current, but restaurant information available
                  directly at the location will control in the event
                  of a discrepancy.
                </p>
              </section>


              <section>
                <h2 className="font-display text-3xl text-forest">
                  Food Allergies
                </h2>

                <p className="mt-3">
                  Guests with food allergies or dietary concerns
                  should notify restaurant staff before ordering.
                  Website descriptions should not be relied upon as
                  a guarantee that an item is free from a particular
                  ingredient or allergen.
                </p>
              </section>


              <section>
                <h2 className="font-display text-3xl text-forest">
                  Third-Party Services
                </h2>

                <p className="mt-3">
                  The website may provide links to independent
                  third-party services, including delivery,
                  directions, and social media platforms. Green
                  Cactus does not control the operation, policies,
                  availability, or content of those third-party
                  services.
                </p>
              </section>


              <section>
                <h2 className="font-display text-3xl text-forest">
                  Website Content
                </h2>

                <p className="mt-3">
                  Website text, branding, graphics, photographs, and
                  other content may not be copied, reproduced, or
                  used for commercial purposes without appropriate
                  permission from the applicable owner.
                </p>
              </section>


              <section>
                <h2 className="font-display text-3xl text-forest">
                  Website Availability
                </h2>

                <p className="mt-3">
                  Green Cactus does not guarantee that the website
                  will always be available, uninterrupted, or free
                  from errors. Website content and functionality may
                  be modified, suspended, or discontinued when
                  necessary.
                </p>
              </section>


              <section>
                <h2 className="font-display text-3xl text-forest">
                  Changes to These Terms
                </h2>

                <p className="mt-3">
                  These Terms may be updated from time to time. The
                  version posted on this page represents the current
                  terms governing use of the website.
                </p>
              </section>


              <section>
                <h2 className="font-display text-3xl text-forest">
                  Contact
                </h2>

                <p className="mt-3">
                  Questions about these Terms may be directed to
                  Green Cactus Fresh Mexican Grill using the contact
                  information available on this website.
                </p>
              </section>

            </div>


            <div className="mt-12 border-t border-ink/10 pt-7">

              <Link
                to="/"
                className="font-semibold text-rust transition hover:text-forest"
              >
                ← Back to Green Cactus
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  )
}