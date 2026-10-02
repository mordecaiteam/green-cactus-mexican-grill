import {
  useMemo,
  useRef,
  useState,
} from 'react'

import { X } from 'lucide-react'

import {
  galleryCategories,
  galleryImages,
} from '../data/gallery'


export default function Gallery() {
  const [activeCategory, setActiveCategory] =
    useState('All')

  const [selectedImage, setSelectedImage] =
    useState(null)

  // Stable scroll target positioned before
  // the sticky gallery filters.
  const galleryTopRef = useRef(null)


  // ========================================
  // FILTER IMAGES
  // ========================================

  const filteredImages = useMemo(() => {
    if (activeCategory === 'All') {
      return galleryImages
    }

    return galleryImages.filter(
      (image) =>
        image.category === activeCategory
    )
  }, [activeCategory])


  // ========================================
  // SCROLL TO GALLERY TOP
  // ========================================

  const scrollToGalleryTop = () => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (!galleryTopRef.current) return

        window.scrollTo({
          top: galleryTopRef.current.offsetTop,
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

    scrollToGalleryTop()
  }


  return (
    <main
      id="main-content"
      className="bg-cream"
    >

      {/* ========================================
          STABLE SCROLL TARGET
      ======================================== */}

      <div
        ref={galleryTopRef}
        aria-hidden="true"
        className="h-0"
      />


      {/* ========================================
          FILTERS
      ======================================== */}

      <section className="sticky top-[72px] z-20 border-b border-ink/10 bg-cream/95 backdrop-blur">

        <div className="page-shell">

          <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">

            {galleryCategories.map(
              (category) => {

                const active =
                  activeCategory === category

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
                      text-sm
                      font-semibold
                      transition
                      ${
                        active
                          ? 'bg-forest text-cream'
                          : 'border border-ink/15 bg-white text-ink hover:border-forest hover:text-forest'
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
          GALLERY
      ======================================== */}

      <section className="py-12 sm:py-16">

        <div className="page-shell">

          {/* Category Header */}

          <div className="mb-7 flex items-end justify-between gap-4">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-rust">
                {activeCategory}
              </p>

              <p className="mt-1 text-sm text-ink/55">

                {filteredImages.length}{' '}

                {filteredImages.length === 1
                  ? 'photo'
                  : 'photos'}

              </p>

            </div>

          </div>


          {/* Gallery Grid */}

          <div className="columns-2 gap-3 sm:columns-3 sm:gap-4 lg:columns-4">

            {filteredImages.map((image) => (

              <button
                key={image.id}
                type="button"
                onClick={() =>
                  setSelectedImage(image)
                }
                className="
                  group
                  relative
                  mb-3
                  block
                  w-full
                  overflow-hidden
                  rounded-2xl
                  bg-sand
                  text-left
                  sm:mb-4
                "
                aria-label={`View ${image.alt}`}
              >

                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="
                    block
                    h-auto
                    w-full
                    transition
                    duration-500
                    group-hover:scale-[1.04]
                  "
                />


                {/* Hover Overlay */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/45
                    via-transparent
                    to-transparent
                    opacity-0
                    transition
                    duration-300
                    group-hover:opacity-100
                  "
                />


                {/* Category Label */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    translate-y-2
                    p-4
                    opacity-0
                    transition
                    duration-300
                    group-hover:translate-y-0
                    group-hover:opacity-100
                  "
                >

                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-white">
                    {image.category}
                  </span>

                </div>

              </button>

            ))}

          </div>

        </div>

      </section>


      {/* ========================================
          LIGHTBOX
      ======================================== */}

      {selectedImage && (

        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-black/85
            p-4
            backdrop-blur-sm
          "
          onClick={() =>
            setSelectedImage(null)
          }
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image"
        >

          {/* Close Button */}

          <button
            type="button"
            onClick={() =>
              setSelectedImage(null)
            }
            className="
              absolute
              right-5
              top-5
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              bg-white/10
              text-white
              transition
              hover:bg-white/20
            "
            aria-label="Close image"
          >
            <X size={22} />
          </button>


          {/* Image */}

          <div
            className="relative max-h-[88vh] max-w-5xl"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="
                max-h-[82vh]
                max-w-full
                rounded-2xl
                object-contain
                shadow-2xl
              "
            />

            <p className="mt-3 text-center text-sm font-medium text-white/75">
              {selectedImage.category}
            </p>

          </div>

        </div>

      )}

    </main>
  )
}