// src/pages/Menu.jsx



import { useEffect, useMemo, useRef, useState } from 'react'

import { ArrowUp, Maximize2, X } from 'lucide-react'



import {

  burritoExtras,

  drinkNote,

  menuCategories,

  menuInfo,

  menuItems,

} from '../data/menu'

import enchiladaImage from '../assets/menu/large/burritos/burritos-enchilada-style.webp'



const compactCategories = ['Drinks']



function formatPrice(price) {

  return `$${price.toFixed(2)}`

}



export default function Menu() {

  const [activeCategory, setActiveCategory] = useState('All')

  const [selectedItem, setSelectedItem] = useState(null)
  const [showEnchiladaImage, setShowEnchiladaImage] = useState(false)

  const [showBackToTop, setShowBackToTop] = useState(false)



  const menuTopRef = useRef(null)



  // ========================================

  // CATEGORY FILTERING

  // ========================================



  const filteredItems = useMemo(() => {

    if (activeCategory === 'All') {

      return menuItems

    }



    return menuItems.filter(

      (item) => item.category === activeCategory

    )

  }, [activeCategory])



  const cardItems = filteredItems.filter(

    (item) => !compactCategories.includes(item.category)

  )



  const compactItems = filteredItems.filter(

    (item) => compactCategories.includes(item.category)

  )



  // ========================================

  // SCROLL TO MENU TOP

  // ========================================



  const scrollToMenuTop = () => {

  window.scrollTo({

    top: 0,

    behavior: 'smooth',

  })

}



  const handleCategoryChange = (category) => {

    setActiveCategory(category)



    requestAnimationFrame(() => {

      scrollToMenuTop()

    })

  }



  // ========================================

  // FLOATING BACK-TO-TOP BUTTON

  // ========================================



  useEffect(() => {

    const handleScroll = () => {

      if (!menuTopRef.current) return



      const menuTop =

        menuTopRef.current.getBoundingClientRect().top +

        window.scrollY



      setShowBackToTop(window.scrollY > menuTop + 350)

    }



    handleScroll()



    window.addEventListener('scroll', handleScroll, {

      passive: true,

    })



    return () => {

      window.removeEventListener('scroll', handleScroll)

    }

  }, [])



  // ========================================

  // IMAGE LIGHTBOX

  // ========================================



  useEffect(() => {

    if (!selectedItem && !showEnchiladaImage) return



    const previousOverflow = document.body.style.overflow



    document.body.style.overflow = 'hidden'



    const handleKeyDown = (event) => {

      if (event.key === 'Escape') {

        setSelectedItem(null)
        setShowEnchiladaImage(false)

      }

    }



    window.addEventListener('keydown', handleKeyDown)



    return () => {

      document.body.style.overflow = previousOverflow

      window.removeEventListener('keydown', handleKeyDown)

    }

  }, [selectedItem, showEnchiladaImage])



  return (

    <main id="main-content" className="bg-cream">



      {/* ========================================

          PRICING NOTICE

      ======================================== */}



      <section className="border-b border-ink/10 bg-sand/60">

        <div className="page-shell py-4">

          <p className="text-center text-xs font-semibold uppercase tracking-[0.12em] text-ink/65 sm:text-sm">

            {menuInfo.pricingNotice}

          </p>

        </div>

      </section>



      {/* ========================================

          MENU SCROLL TARGET

      ======================================== */}



      <div

        ref={menuTopRef}

        aria-hidden="true"

        className="h-0"

      />



      {/* ========================================

          STICKY MENU NAVIGATION

      ======================================== */}



      <section className="sticky top-0 z-40 border-b border-ink/10 bg-cream/95 shadow-[0_5px_20px_rgba(39,37,31,0.06)] backdrop-blur-xl">

        <div className="page-shell">



          {/* ALL CATEGORIES VISIBLE */}



          <div className="flex flex-wrap justify-center gap-2 py-4 sm:gap-3">

            {menuCategories.map((category) => {

              const active = activeCategory === category



              return (

                <button

                  key={category}

                  type="button"

                  onClick={() => handleCategoryChange(category)}

                  aria-pressed={active}

                  className={`

                    rounded-full

                    px-3 py-2

                    text-[10px] font-bold uppercase

                    tracking-[0.06em]

                    transition

                    sm:px-5 sm:py-2.5

                    sm:text-xs sm:tracking-[0.1em]

                    ${

                      active

                        ? 'bg-forest text-cream shadow-md'

                        : 'border border-ink/15 bg-white text-ink/60 hover:border-forest hover:text-forest'

                    }

                  `}

                >

                  {category}

                </button>

              )

            })}

          </div>



        </div>

      </section>



      {/* ========================================

          MENU RESULTS

      ======================================== */}



      <section className="py-10 sm:py-14 lg:py-16">

        <div className="page-shell">



          {/* HEADER */}



          <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">

            <div>

              <p className="eyebrow">

                Green Cactus

              </p>



              <h2 className="mt-2 font-display text-4xl text-forest sm:text-5xl">

                {activeCategory === 'All'

                  ? 'Explore the menu'

                  : activeCategory}

              </h2>

            </div>



            <p className="text-sm text-ink/45">

              {filteredItems.length}{' '}

              {filteredItems.length === 1 ? 'item' : 'items'}

            </p>

          </div>



          {/* ========================================

              NORMAL MENU CARDS

          ======================================== */}



          {cardItems.length > 0 && (

            <div className="grid items-start gap-7 md:grid-cols-2 xl:grid-cols-3">



              {cardItems.map((item) => {

                const hasImage = Boolean(item.image)



                const hasDescription = Boolean(

                  item.description?.trim()

                )



                const isCompactTextCard =

                  !hasImage && !hasDescription



                return (

                  <article

                    key={item.id}

                    className="overflow-hidden rounded-[1.75rem] bg-white shadow-[0_12px_35px_rgba(39,37,31,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(39,37,31,0.13)]"

                  >



                    {/* ========================================

                        CLICKABLE FOOD IMAGE

                    ======================================== */}



                    {hasImage && (

                      <button

                        type="button"

                        onClick={() => setSelectedItem(item)}

                        className="group/image relative block aspect-[4/3] w-full cursor-zoom-in overflow-hidden bg-sand"

                        aria-label={`Enlarge photo of ${item.name}`}

                      >

                        <img

                          src={item.image}

                          alt={item.name}

                          loading="lazy"

                          decoding="async"

                          className="h-full w-full object-cover transition duration-700 group-hover/image:scale-[1.04]"

                        />



                        {/* ALWAYS-VISIBLE ENLARGE INDICATOR */}



                        <span className="absolute bottom-3 right-3 z-10 inline-flex items-center gap-2 rounded-full bg-forest/90 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.08em] text-cream shadow-lg backdrop-blur-sm transition group-hover/image:bg-forest sm:bottom-4 sm:right-4 sm:text-xs">

                          <Maximize2 size={14} />

                          Tap to enlarge

                        </span>



                        {/* HOVER OVERLAY */}



                        <div className="absolute inset-0 flex items-center justify-center bg-forest/0 transition duration-300 group-hover/image:bg-forest/20">

                          <span className="translate-y-2 rounded-full bg-cream/95 px-4 py-2 text-xs font-bold uppercase tracking-[0.1em] text-forest opacity-0 shadow-lg transition duration-300 group-hover/image:translate-y-0 group-hover/image:opacity-100">

                            View full photo

                          </span>

                        </div>



                      </button>

                    )}



                    {/* ========================================

                        CARD CONTENT

                    ======================================== */}



                    <div

                      className={

                        isCompactTextCard

                          ? 'p-5 sm:p-6'

                          : 'p-6 sm:p-7'

                      }

                    >

                      <div className="flex items-start justify-between gap-5">

                        <div className="min-w-0">



                          <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-rust">

                            {item.category}

                          </p>



                          <h3

                            className={`

                              font-display leading-none text-forest

                              ${

                                isCompactTextCard

                                  ? 'mt-2 text-[1.7rem]'

                                  : 'mt-2 text-3xl'

                              }

                            `}

                          >

                            {item.name}

                          </h3>



                          {item.subtitle && (

                            <p className="mt-2 text-sm italic text-ink/45">

                              {item.subtitle}

                            </p>

                          )}



                        </div>



                        <span className="shrink-0 rounded-full bg-gold/15 px-4 py-2 text-sm font-bold text-forest">

                          {formatPrice(item.price)}

                        </span>

                      </div>



                      {/* DESCRIPTION */}



                      {hasDescription && (

                        <p className="mt-5 text-[0.95rem] leading-7 text-ink/65">

                          {item.description}

                        </p>

                      )}



                      {/* OPTIONS */}



                      {item.options && (

                        <div className="mt-5 border-t border-ink/10 pt-4">

                          <p className="text-xs font-bold uppercase tracking-[0.1em] text-forest/45">

                            Choice of

                          </p>



                          <p className="mt-1 text-sm font-semibold text-forest/70">

                            {item.options.join(' • ')}

                          </p>

                        </div>

                      )}



                      {/* ADD-ONS */}



                      {item.addOns?.map((addOn) => (

                        <div

                          key={addOn.name}

                          className="mt-5 flex justify-between gap-4 border-t border-ink/10 pt-4 text-xs font-semibold"

                        >

                          <span className="text-ink/55">

                            {addOn.name}

                          </span>



                          <span className="shrink-0 text-rust">

                            +{formatPrice(addOn.price)}

                          </span>

                        </div>

                      ))}



                      {/* NOTE */}



                      {item.note && (

                        <p className="mt-3 text-xs italic text-ink/40">

                          {item.note}

                        </p>

                      )}



                    </div>



                  </article>

                )

              })}



            </div>

          )}



          {/* ========================================

    WET BURRITO OPTION

======================================== */}



{(activeCategory === 'All' ||

  activeCategory === 'Burritos') && (



  <div className="mt-12 overflow-hidden rounded-[1.75rem] bg-rust text-cream">



    <div className="grid items-center gap-6 p-6 sm:p-9 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-10">



      {/* LEFT: DESCRIPTION AND PRICING */}



      <div className="min-w-0">



        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">

          Make it wet

        </p>



        <h3 className="mt-3 font-display text-3xl leading-tight sm:text-4xl">

          {burritoExtras.title}

        </h3>



        <p className="mt-3 max-w-2xl text-sm leading-6 text-cream/75 sm:text-base sm:leading-7">

          {burritoExtras.description}

        </p>



        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">



          <p className="font-display text-3xl text-gold">

            +{formatPrice(burritoExtras.price)}

          </p>



          <p className="text-sm text-cream/65">

            One Foot +{formatPrice(burritoExtras.oneFootPrice)}

          </p>



        </div>



      </div>



      {/* RIGHT: CLICKABLE ENCHILADA STYLE IMAGE */}
      <button
        type="button"
        onClick={() => setShowEnchiladaImage(true)}
        aria-label="Enlarge photo of Enchilada Style Wet Burrito"
        className="group/image relative block w-full cursor-zoom-in overflow-hidden rounded-2xl bg-sand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
      >
        <img
          src={enchiladaImage}
          alt="Enchilada Style Wet Burrito at Green Cactus"
          loading="lazy"
          decoding="async"
          className="aspect-[16/10] w-full object-cover transition duration-700 group-hover/image:scale-[1.05] lg:aspect-[4/3]"
        />

        <span className="absolute bottom-3 right-3 z-10 inline-flex items-center gap-2 rounded-full bg-forest/90 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.08em] text-cream shadow-lg backdrop-blur-sm transition group-hover/image:bg-forest sm:text-xs">
          <Maximize2 size={14} />
          Tap to enlarge
        </span>

        <div className="absolute inset-0 flex items-center justify-center bg-forest/0 transition duration-300 group-hover/image:bg-forest/20">
          <span className="translate-y-2 rounded-full bg-cream/95 px-4 py-2 text-xs font-bold uppercase tracking-[0.1em] text-forest opacity-0 shadow-lg transition duration-300 group-hover/image:translate-y-0 group-hover/image:opacity-100">
            View full photo
          </span>
        </div>
      </button>



    </div>



  </div>



)}



          {/* ========================================

              DRINKS

          ======================================== */}



          {compactItems.length > 0 && (

            <div className="mt-14">

              <div className="max-w-2xl rounded-[1.75rem] border border-ink/10 bg-white p-7 sm:p-8">



                <p className="text-xs font-bold uppercase tracking-[0.16em] text-rust">

                  Green Cactus

                </p>



                <h3 className="mt-2 font-display text-4xl text-forest">

                  Drinks

                </h3>



                <div className="mt-6 divide-y divide-ink/10">

                  {compactItems.map((item) => (

                    <div

                      key={item.id}

                      className="flex items-center justify-between gap-5 py-4 first:pt-0"

                    >

                      <p className="font-semibold text-ink">

                        {item.name}

                      </p>



                      <span className="shrink-0 font-bold text-rust">

                        {formatPrice(item.price)}

                      </span>

                    </div>

                  ))}

                </div>



                <p className="mt-5 border-t border-ink/10 pt-4 text-xs italic text-ink/45">

                  {drinkNote}

                </p>



              </div>

            </div>

          )}



          {/* ========================================

              NO RESULTS

          ======================================== */}



          {filteredItems.length === 0 && (

            <div className="py-20 text-center">



              <h3 className="font-display text-3xl text-forest">

                No items in this category.

              </h3>



              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-ink/50">

                Explore another menu category or view the full menu.

              </p>



              <button

                type="button"

                onClick={() => handleCategoryChange('All')}

                className="button-primary mt-6"

              >

                View full menu

              </button>



            </div>

          )}



          {/* ========================================

              FOOTNOTES

          ======================================== */}



          <div className="mt-14 border-t border-ink/10 pt-7 text-center">



            <p className="text-sm font-semibold text-ink/65">

              {menuInfo.allergyNotice}

            </p>



            <p className="mt-2 text-xs text-ink/40">

              {menuInfo.priceNotice}

            </p>



          </div>



        </div>

      </section>



      {/* ========================================

          FLOATING BACK-TO-TOP BUTTON

      ======================================== */}



      {showBackToTop && (

        <button

          type="button"

          onClick={scrollToMenuTop}

          aria-label="Back to top of menu"

          title="Back to menu categories"

          className="fixed bottom-6 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-forest text-cream shadow-[0_8px_25px_rgba(0,0,0,0.25)] transition duration-300 hover:-translate-y-1 hover:bg-rust focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest sm:bottom-8 sm:right-8 sm:h-14 sm:w-14"

        >

          <ArrowUp size={22} strokeWidth={2.5} />

        </button>

      )}



      {/* ========================================

          IMAGE LIGHTBOX

      ======================================== */}



      {selectedItem?.image && (

        <div

          className="fixed inset-0 z-[100] flex items-center justify-center bg-forest/95 p-4 backdrop-blur-md sm:p-8"

          onClick={() => setSelectedItem(null)}

          role="dialog"

          aria-modal="true"

          aria-label={`Photo of ${selectedItem.name}`}

        >



          {/* CLOSE BUTTON */}



          <button

            type="button"

            onClick={() => setSelectedItem(null)}

            aria-label="Close image"

            className="absolute right-5 top-5 z-20 grid h-11 w-11 place-items-center rounded-full bg-cream text-forest shadow-xl transition hover:scale-105 sm:right-8 sm:top-8"

          >

            <X size={21} />

          </button>



          {/* LARGE WEBP IMAGE */}



          <div

            className="max-w-5xl"

            onClick={(event) => event.stopPropagation()}

          >

            <img

              src={selectedItem.imageLarge ?? selectedItem.image}

              alt={selectedItem.name}

              decoding="async"

              className="max-h-[78vh] max-w-full rounded-2xl object-contain shadow-2xl"

            />



            <div className="mt-5 text-center">

              <p className="font-display text-3xl text-cream">

                {selectedItem.name}

              </p>



              <p className="mt-1 text-sm font-bold text-gold">

                {formatPrice(selectedItem.price)}

              </p>

            </div>

          </div>



        </div>

      )}




      {/* ========================================
          ENCHILADA STYLE IMAGE LIGHTBOX
      ======================================== */}

      {showEnchiladaImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-forest/95 p-4 backdrop-blur-md sm:p-8"
          onClick={() => setShowEnchiladaImage(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Enchilada Style Wet Burrito photo"
        >
          <button
            type="button"
            onClick={() => setShowEnchiladaImage(false)}
            aria-label="Close image"
            className="absolute right-5 top-5 z-20 grid h-11 w-11 place-items-center rounded-full bg-cream text-forest shadow-xl transition hover:scale-105 sm:right-8 sm:top-8"
          >
            <X size={21} />
          </button>

          <div className="max-w-5xl" onClick={(event) => event.stopPropagation()}>
            <img
              src={enchiladaImage}
              alt="Enchilada Style Wet Burrito at Green Cactus"
              decoding="async"
              className="max-h-[78vh] max-w-full rounded-2xl object-contain shadow-2xl"
            />
            <div className="mt-5 text-center">
              <p className="font-display text-3xl text-cream">
                Enchilada Style Wet Burrito
              </p>
              <p className="mt-1 text-sm font-bold text-gold">
                +{formatPrice(burritoExtras.price)}
              </p>
            </div>
          </div>
        </div>
      )}
    </main>

  )

}