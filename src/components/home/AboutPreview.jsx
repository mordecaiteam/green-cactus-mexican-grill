import { ArrowRight, Sparkles, UtensilsCrossed } from 'lucide-react'
import { Link } from 'react-router-dom'
import exteriorImage from '../../assets/misc/green-cactus-exterior.png'

export default function AboutPreview() {
  return (
    <section className="overflow-hidden bg-cream py-24 sm:py-32">
      <div className="page-shell grid items-center gap-14 lg:grid-cols-[.9fr_1.1fr]">
        <div className="relative mx-auto w-full max-w-xl lg:mx-0">
          <div className="absolute -left-5 -top-5 h-28 w-28 rounded-full border border-gold/60" />

          <img
            src={exteriorImage}
            alt="Green Cactus Restaurant"
            className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-2xl"
          />

          <div className="absolute -bottom-7 right-5 rounded-2xl bg-rust px-7 py-5 text-cream shadow-xl">
            <span className="block font-display text-3xl">STONY BROOK</span>
            <span className="text-[.65rem] font-bold uppercase tracking-[.25em]">
              Fresh is our tradition
            </span>
          </div>
        </div>

        <div className="lg:pl-10">
          <p className="eyebrow">A neighborhood original</p>

          <h2 className="section-title mt-4">
            Not an assembly line.
            <br />
            A meal made for you.
          </h2>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-ink/65">
            Green Cactus Grill is a warm and welcoming family restaurant
             where you can enjoy a memorable dining experience. 
             Whether you like your food spicy, mild or have any dietary
              requirements, we source the finest and most aromatic 
              ingredients to prepare each Mexican dish. Our expert 
              chefs take your tastes and preferences into consideration 
              while preparing your meals.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <div className="feature-card">
              <UtensilsCrossed />
              <div>
                <h3>Made to order</h3>
                <p>Your meal is prepared when you order it.</p>
              </div>
            </div>

            <div className="feature-card">
              <Sparkles />
              <div>
                <h3>Fresh & flexible</h3>
                <p>Customize your favorites exactly how you like.</p>
              </div>
            </div>
          </div>

          <Link
            to="/our-story"
            className="mt-9 inline-flex items-center gap-2 border-b border-rust pb-1 text-sm font-bold uppercase tracking-[.16em] text-rust"
          >
            Read our story <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}