import { Check, Home } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ThankYou() {
  return (
    <main
      id="main-content"
      className="grid min-h-[70vh] place-items-center bg-cream px-4 py-20"
    >
      <div className="page-shell w-full">

        <div className="mx-auto max-w-2xl text-center">

          {/* Success Icon */}
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-forest text-gold">
            <Check
              size={28}
              strokeWidth={3}
            />
          </div>


          {/* Eyebrow */}
          <p className="eyebrow mt-7">
            Message received
          </p>


          {/* Heading */}
          <h1 className="mt-3 font-display text-5xl leading-[1.05] text-forest sm:text-6xl">
            Thanks for reaching out.
          </h1>


          {/* Message */}
          <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-ink/60">
            Your message has been sent to Green Cactus. We'll get back
            to you as soon as we can.
          </p>


          {/* Back Home Button */}
          <div className="mt-8 flex justify-center">

            <Link
              to="/"
              className="
                inline-flex
                min-h-[52px]
                items-center
                justify-center
                gap-2.5
                rounded-full
                bg-rust
                px-7
                py-3.5
                font-bold
                uppercase
                tracking-[0.1em]
                text-cream
                shadow-md
                transition
                duration-200
                hover:-translate-y-0.5
                hover:bg-forest
                hover:shadow-lg
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-rust
                focus-visible:ring-offset-2
              "
            >
              <Home
                size={18}
                strokeWidth={2.25}
                className="shrink-0"
              />

              <span className="leading-none">
                Back to home
              </span>
            </Link>

          </div>

        </div>

      </div>
    </main>
  )
}