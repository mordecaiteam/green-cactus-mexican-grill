import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

import {
  Search,
  X,
} from 'lucide-react'

import {
  burritoExtras,
  drinkNote,
  menuCategories,
  menuInfo,
  menuItems,
} from '../data/menu'


// Only drinks use the compact layout.
// Sides + Desserts use the normal menu cards.
const compactCategories = [
  'Drinks',
]


function formatPrice(price) {
  return `$${price.toFixed(2)}`
}


export default function Menu() {
  const [activeCategory, setActiveCategory] =
    useState('All')

  const [searchQuery, setSearchQuery] =
    useState('')

  const [selectedItem, setSelectedItem] =
    useState(null)

  // Stable scroll target.
  // This is intentionally NOT attached to the sticky nav.
  const menuTopRef = useRef(null)


  // ========================================
  // FILTER + SEARCH
  // ========================================

  const filteredItems = useMemo(() => {
    const query = searchQuery
      .trim()
      .toLowerCase()

    return menuItems.filter((item) => {
      const matchesCategory =
        activeCategory === 'All' ||
        item.category === activeCategory

      if (!matchesCategory) {
        return false
      }

      if (!query) {
        return true
      }

      const searchableText = [
        item.name,
        item.subtitle,
        item.category,
        item.description,
        item.note,
        ...(item.options ?? []),
        ...(item.addOns?.map(
          (addOn) => addOn.name
        ) ?? []),
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase()

      return searchableText.includes(query)
    })
  }, [activeCategory, searchQuery])


  // Everything except Drinks uses
  // the normal menu-card layout.
  const cardItems = filteredItems.filter(
    (item) =>
      !compactCategories.includes(
        item.category
      )
  )


  const compactItems = filteredItems.filter(
    (item) =>
      compactCategories.includes(
        item.category
      )
  )


  // ========================================
  // SCROLL TO MENU TOP
  // ========================================

  const scrollToMenuTop = () => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (!menuTopRef.current) return

        const top =
          menuTopRef.current.offsetTop

        window.scrollTo({
          top,
          behavior: 'smooth',
        })
      })
    })
  }


  // ========================================
  // CATEGORY CHANGE
  // ========================================

  const handleCategoryChange = (category) => {
    setActiveCategory(category)
    setSearchQuery('')

    scrollToMenuTop()
  }


  // ========================================
  // LIGHTBOX
  // ========================================

  useEffect(() => {
    if (!selectedItem) return

    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedItem(null)
      }
    }

    window.addEventListener(
      'keydown',
      handleKeyDown
    )

    return () => {
      document.body.style.overflow = ''

      window.removeEventListener(
        'keydown',
        handleKeyDown
      )
    }
  }, [selectedItem])


  return (
    <main
      id="main-content"
      className="bg-cream"
    >

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
          STABLE SCROLL TARGET

          Important:
          This sits in normal document flow.
          It is NOT sticky.
      ======================================== */}

      <div
        ref={menuTopRef}
        aria-hidden="true"
        className="h-0"
      />


      {/* ========================================
          STICKY MENU NAVIGATION
      ======================================== */}

      <section
        className="
          sticky
          top-0
          z-40
          border-b
          border-ink/10
          bg-cream/95
          shadow-[0_5px_20px_rgba(39,37,31,0.06)]
          backdrop-blur-xl
        "
      >

        <div className="page-shell">

          {/* SEARCH */}

          <div className="border-b border-ink/10 py-3">

            <div className="relative">

              <Search
                size={18}
                className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-ink/40
                "
              />

              <input
                type="search"
                value={searchQuery}
                onChange={(event) =>
                  setSearchQuery(
                    event.target.value
                  )
                }
                placeholder={
                  activeCategory === 'All'
                    ? 'Search the menu...'
                    : `Search ${activeCategory.toLowerCase()}...`
                }
                className="
                  w-full
                  rounded-full
                  border
                  border-ink/10
                  bg-white
                  py-3
                  pl-11
                  pr-11
                  text-sm
                  text-ink
                  outline-none
                  transition
                  placeholder:text-ink/35
                  focus:border-forest/40
                  focus:ring-2
                  focus:ring-forest/10
                "
              />

              {searchQuery && (

                <button
                  type="button"
                  onClick={() =>
                    setSearchQuery('')
                  }
                  aria-label="Clear search"
                  className="
                    absolute
                    right-3
                    top-1/2
                    grid
                    h-8
                    w-8
                    -translate-y-1/2
                    place-items-center
                    rounded-full
                    text-ink/40
                    transition
                    hover:bg-sand
                    hover:text-forest
                  "
                >
                  <X size={16} />
                </button>

              )}

            </div>

          </div>


          {/* CATEGORIES */}

          <div
            className="
              flex
              gap-2
              overflow-x-auto
              py-3
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >

            {menuCategories.map(
              (category) => {

                const active =
                  activeCategory ===
                  category

                return (

                  <button
                    key={category}
                    type="button"
                    onClick={() =>
                      handleCategoryChange(
                        category
                      )
                    }
                    className={`
                      shrink-0
                      rounded-full
                      px-5
                      py-2.5
                      text-xs
                      font-bold
                      uppercase
                      tracking-[0.1em]
                      transition
                      ${
                        active
                          ? 'bg-forest text-cream'
                          : 'border border-ink/15 bg-white text-ink/60 hover:border-forest hover:text-forest'
                      }
                    `}
                  >
                    {category}
                  </button>

                )
              }
            )}

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

                {searchQuery
                  ? 'Search results'
                  : activeCategory === 'All'
                    ? 'Explore the menu'
                    : activeCategory}

              </h2>

            </div>


            <p className="text-sm text-ink/45">

              {filteredItems.length}{' '}

              {filteredItems.length === 1
                ? 'item'
                : 'items'}

            </p>

          </div>


          {/* ========================================
              NORMAL MENU CARDS

              Appetizers
              Salads
              Tacos
              Favorites
              Burritos
              Sides
              Desserts
          ======================================== */}

          {cardItems.length > 0 && (

            <div className="grid items-start gap-7 md:grid-cols-2 xl:grid-cols-3">

              {cardItems.map((item) => {

                const hasImage =
                  Boolean(item.image)

                const hasDescription =
                  Boolean(
                    item.description?.trim()
                  )

                const isCompactTextCard =
                  !hasImage &&
                  !hasDescription

                return (

                  <article
                    key={item.id}
                    className="
                      overflow-hidden
                      rounded-[1.75rem]
                      bg-white
                      shadow-[0_12px_35px_rgba(39,37,31,0.08)]
                      transition
                      duration-300
                      hover:-translate-y-1
                      hover:shadow-[0_18px_45px_rgba(39,37,31,0.13)]
                    "
                  >

                    {/* ==================================
                        IMAGE

                        No placeholder is rendered.
                    ================================== */}

                    {hasImage && (

                      <button
                        type="button"
                        onClick={() =>
                          setSelectedItem(item)
                        }
                        className="
                          group/image
                          relative
                          block
                          aspect-[4/3]
                          w-full
                          overflow-hidden
                          bg-sand
                        "
                        aria-label={`Enlarge photo of ${item.name}`}
                      >

                        <img
                          src={item.image}
                          alt={item.name}
                          loading="lazy"
                          className="
                            h-full
                            w-full
                            object-cover
                            transition
                            duration-700
                            group-hover/image:scale-[1.04]
                          "
                        />


                        <div
                          className="
                            absolute
                            inset-0
                            flex
                            items-center
                            justify-center
                            bg-forest/0
                            transition
                            duration-300
                            group-hover/image:bg-forest/25
                          "
                        >

                          <span
                            className="
                              translate-y-2
                              rounded-full
                              bg-cream/95
                              px-4
                              py-2
                              text-xs
                              font-bold
                              uppercase
                              tracking-[0.1em]
                              text-forest
                              opacity-0
                              shadow-lg
                              transition
                              duration-300
                              group-hover/image:translate-y-0
                              group-hover/image:opacity-100
                            "
                          >
                            Enlarge photo
                          </span>

                        </div>

                      </button>

                    )}


                    {/* ==================================
                        CONTENT

                        Cards with no description receive
                        less padding and naturally become
                        much shorter.
                    ================================== */}

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
                              font-display
                              leading-none
                              text-forest
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


                        <span
                          className="
                            shrink-0
                            rounded-full
                            bg-gold/15
                            px-4
                            py-2
                            text-sm
                            font-bold
                            text-forest
                          "
                        >
                          {formatPrice(
                            item.price
                          )}
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

                            {item.options.join(
                              ' • '
                            )}

                          </p>

                        </div>

                      )}


                      {/* ADD ONS */}

                      {item.addOns?.map(
                        (addOn) => (

                          <div
                            key={addOn.name}
                            className="
                              mt-5
                              flex
                              justify-between
                              gap-4
                              border-t
                              border-ink/10
                              pt-4
                              text-xs
                              font-semibold
                            "
                          >

                            <span className="text-ink/55">
                              {addOn.name}
                            </span>

                            <span className="shrink-0 text-rust">
                              +
                              {formatPrice(
                                addOn.price
                              )}
                            </span>

                          </div>

                        )
                      )}


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
              WET BURRITO
          ======================================== */}

          {!searchQuery &&
            (activeCategory === 'All' ||
              activeCategory ===
                'Burritos') && (

              <div
                className="
                  mt-12
                  rounded-[1.75rem]
                  bg-rust
                  p-7
                  text-cream
                  sm:p-9
                "
              >

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
                  Make it wet
                </p>


                <div className="mt-3 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

                  <div className="max-w-2xl">

                    <h3 className="font-display text-3xl sm:text-4xl">
                      {burritoExtras.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-cream/70">
                      {
                        burritoExtras.description
                      }
                    </p>

                  </div>


                  <div className="shrink-0 sm:text-right">

                    <p className="font-display text-2xl text-gold">
                      +
                      {formatPrice(
                        burritoExtras.price
                      )}
                    </p>

                    <p className="mt-1 text-xs text-cream/55">

                      One Foot +

                      {formatPrice(
                        burritoExtras.oneFootPrice
                      )}

                    </p>

                  </div>

                </div>

              </div>

            )}


          {/* ========================================
              DRINKS

              Drinks remain compact because there are
              only Small / Large choices.
          ======================================== */}

          {compactItems.length > 0 && (

            <div className="mt-14">

              <div
                className="
                  max-w-2xl
                  rounded-[1.75rem]
                  border
                  border-ink/10
                  bg-white
                  p-7
                  sm:p-8
                "
              >

                <p className="text-xs font-bold uppercase tracking-[0.16em] text-rust">
                  Green Cactus
                </p>

                <h3 className="mt-2 font-display text-4xl text-forest">
                  Drinks
                </h3>


                <div className="mt-6 divide-y divide-ink/10">

                  {compactItems.map(
                    (item) => (

                      <div
                        key={item.id}
                        className="
                          flex
                          items-center
                          justify-between
                          gap-5
                          py-4
                          first:pt-0
                        "
                      >

                        <p className="font-semibold text-ink">
                          {item.name}
                        </p>

                        <span className="shrink-0 font-bold text-rust">

                          {formatPrice(
                            item.price
                          )}

                        </span>

                      </div>

                    )
                  )}

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

              <Search
                size={30}
                className="mx-auto text-forest/25"
              />

              <h3 className="mt-5 font-display text-3xl text-forest">
                Nothing found.
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-ink/50">
                Try another search or explore a
                different menu category.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearchQuery('')
                  setActiveCategory('All')
                  scrollToMenuTop()
                }}
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
          IMAGE LIGHTBOX
      ======================================== */}

      {selectedItem?.image && (

        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-forest/95
            p-4
            backdrop-blur-md
            sm:p-8
          "
          onClick={() =>
            setSelectedItem(null)
          }
        >

          <button
            type="button"
            onClick={() =>
              setSelectedItem(null)
            }
            aria-label="Close image"
            className="
              absolute
              right-5
              top-5
              z-20
              grid
              h-11
              w-11
              place-items-center
              rounded-full
              bg-cream
              text-forest
              shadow-xl
              transition
              hover:scale-105
              sm:right-8
              sm:top-8
            "
          >
            <X size={21} />
          </button>


          <div
            className="max-w-5xl"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <img
              src={selectedItem.image}
              alt={selectedItem.name}
              className="
                max-h-[78vh]
                max-w-full
                rounded-2xl
                object-contain
                shadow-2xl
              "
            />


            <div className="mt-5 text-center">

              <p className="font-display text-3xl text-cream">
                {selectedItem.name}
              </p>

              <p className="mt-1 text-sm font-bold text-gold">

                {formatPrice(
                  selectedItem.price
                )}

              </p>

            </div>

          </div>

        </div>

      )}

    </main>
  )
}