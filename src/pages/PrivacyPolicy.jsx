import { Link } from 'react-router-dom'

export default function PrivacyPolicy() {
  return (
    <main id="main-content" className="bg-cream">

      {/* Header */}

      <section className="bg-forest py-16 text-cream sm:py-20">

        <div className="page-shell">

          <p className="eyebrow text-gold">
            Green Cactus
          </p>

          <h1 className="mt-3 font-display text-5xl sm:text-6xl">
            Privacy Policy
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-7 text-cream/65">
            Information about how Green Cactus Fresh Mexican Grill
            handles information associated with this website.
          </p>

        </div>

      </section>


      {/* Policy */}

      <section className="py-14 sm:py-20">

        <div className="page-shell">

          <div className="mx-auto max-w-3xl">

            <p className="text-sm text-ink/45">
              Last updated: October 2026
            </p>


            <div className="mt-10 space-y-10 text-[0.95rem] leading-7 text-ink/70">

              <section>
                <h2 className="font-display text-3xl text-forest">
                  Information We Collect
                </h2>

                <p className="mt-3">
                  This website may receive information that you
                  voluntarily provide when contacting Green Cactus,
                  such as your name, email address, phone number, or
                  the contents of a message.
                </p>
              </section>


              <section>
                <h2 className="font-display text-3xl text-forest">
                  How Information Is Used
                </h2>

                <p className="mt-3">
                  Information you provide may be used to respond to
                  inquiries, communicate with you, provide requested
                  information, and operate or improve the website and
                  restaurant services.
                </p>
              </section>


              <section>
                <h2 className="font-display text-3xl text-forest">
                  Third-Party Services
                </h2>

                <p className="mt-3">
                  This website may contain links to third-party
                  services, including delivery platforms, social
                  media platforms, and mapping services. Those
                  services operate independently and are governed by
                  their own privacy policies and terms.
                </p>
              </section>


              <section>
                <h2 className="font-display text-3xl text-forest">
                  Cookies & Website Data
                </h2>

                <p className="mt-3">
                  The website may use basic browser technologies
                  necessary for website functionality. If analytics,
                  advertising, or additional tracking technologies
                  are introduced, this policy may be updated to
                  explain how those technologies are used.
                </p>
              </section>


              <section>
                <h2 className="font-display text-3xl text-forest">
                  Information Sharing
                </h2>

                <p className="mt-3">
                  Green Cactus does not sell personal information
                  collected through this website. Information may be
                  shared with service providers when reasonably
                  necessary to operate the website or provide
                  requested services, or when required by law.
                </p>
              </section>


              <section>
                <h2 className="font-display text-3xl text-forest">
                  Policy Updates
                </h2>

                <p className="mt-3">
                  This Privacy Policy may be updated as the website,
                  restaurant services, or applicable requirements
                  change. The latest version will be posted on this
                  page.
                </p>
              </section>


              <section>
                <h2 className="font-display text-3xl text-forest">
                  Contact
                </h2>

                <p className="mt-3">
                  Questions about this Privacy Policy may be directed
                  to Green Cactus Fresh Mexican Grill using the
                  contact information provided on this website.
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