// src/pages/Gallery.jsx

import { useEffect, useState } from 'react'
import { X, ArrowUpRight } from 'lucide-react'

import { galleryImages } from '../data/gallery'

// ========================================
// CACTUS BACKGROUNDS
// ========================================

import cactusDesktop from '../assets/misc/background-desktop.webp'
import cactusMobile from '../assets/misc/background-mobile.webp'

// ========================================
// MENU PHOTOGRAPHY
// ========================================

import quesadillaThumb from '../assets/menu/thumb/favorites/favorites-quesadilla.webp'
import quesadillaLarge from '../assets/menu/large/favorites/favorites-quesadilla.webp'

import burritoThumb from '../assets/menu/thumb/burritos/burritos-green-cactus-burrito.webp'
import burritoLarge from '../assets/menu/large/burritos/burritos-green-cactus-burrito.webp'

import tostadaThumb from '../assets/menu/thumb/salads/salads-tostada.webp'
import tostadaLarge from '../assets/menu/large/salads/salads-tostada.webp'

import fajitaThumb from '../assets/menu/thumb/favorites/favorites-fajita-platter.webp'
import fajitaLarge from '../assets/menu/large/favorites/favorites-fajita-platter.webp'

import tacosThumb from '../assets/menu/thumb/tacos/tacos-primo.webp'
import tacosLarge from '../assets/menu/large/tacos/tacos-primo.webp'

import saladThumb from '../assets/menu/thumb/salads/salads-cactus-salada.webp'
import saladLarge from '../assets/menu/large/salads/salads-cactus-salada.webp'

import tortaThumb from '../assets/menu/thumb/favorites/favorites-torta.webp'
import tortaLarge from '../assets/menu/large/favorites/favorites-torta.webp'

// ========================================
// ADDITIONAL MENU IMAGES
// ========================================

const menuGalleryImages = [
  {
    id: 'menu-quesadilla',
    alt: 'Freshly made Green Cactus quesadilla',
    src: quesadillaThumb,
    srcLarge: quesadillaLarge,
  },
  {
    id: 'menu-burrito',
    alt: 'Green Cactus signature burrito',
    src: burritoThumb,
    srcLarge: burritoLarge,
  },
  {
    id: 'menu-tostada',
    alt: 'Fresh Green Cactus tostada',
    src: tostadaThumb,
    srcLarge: tostadaLarge,
  },
  {
    id: 'menu-fajitas',
    alt: 'Green Cactus fajita platter',
    src: fajitaThumb,
    srcLarge: fajitaLarge,
  },
  {
    id: 'menu-tacos',
    alt: 'Green Cactus primo tacos',
    src: tacosThumb,
    srcLarge: tacosLarge,
  },
  {
    id: 'menu-salad',
    alt: 'Green Cactus fresh cactus salad',
    src: saladThumb,
    srcLarge: saladLarge,
  },
  {
    id: 'menu-torta',
    alt: 'Green Cactus torta',
    src: tortaThumb,
    srcLarge: tortaLarge,
  },
]

// ========================================
// COMBINED GALLERY
// ========================================

const allImages = [...galleryImages, ...menuGalleryImages]

// ========================================
// RESPONSIVE CACTUS BACKGROUND
// ========================================

function CactusBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      {/* Mobile */}

      <div
        className="absolute inset-0 bg-top bg-repeat-y md:hidden"
        style={{
          backgroundImage: `url(${cactusMobile})`,
          backgroundSize: '100% auto',
          opacity: 0.3,
        }}
      />

      {/* Desktop */}

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
// GALLERY PAGE
// ========================================

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  // ========================================
  // LIGHTBOX BEHAVIOR
  // ========================================

  useEffect(() => {
    if (!selectedImage) return undefined

    const previousOverflow = document.body.style.overflow

    document.body.style.overflow = 'hidden'

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedImage(null)
      }
    }

    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [selectedImage])

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
          GALLERY GRID
          NO HEADER OR FILTER BAR
      ======================================== */}

      <section className="relative z-10 py-8 sm:py-12">
        <div className="page-shell">

          <div className="columns-2 gap-3 sm:columns-3 sm:gap-4 lg:columns-4">

            {allImages.map((image, index) => (
              <button
                key={image.id}
                type="button"
                onClick={() => setSelectedImage(image)}
                aria-label={`View ${image.alt}`}
                className="
                  group
                  relative
                  mb-3
                  block
                  w-full
                  break-inside-avoid
                  overflow-hidden
                  rounded-2xl
                  bg-sand
                  text-left
                  shadow-md
                  shadow-forest/10
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                  sm:mb-4
                "
              >
                {/* Gallery image */}

                <img
                  src={image.src}
                  alt={image.alt}
                  loading={index < 4 ? 'eager' : 'lazy'}
                  decoding="async"
                  width="640"
                  className="
                    block
                    h-auto
                    w-full
                    transition
                    duration-500
                    group-hover:scale-[1.05]
                  "
                />

                {/* Hover overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                {/* Expand icon */}

                <div className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-forest opacity-0 shadow-lg transition duration-300 group-hover:opacity-100">
                  <ArrowUpRight size={18} />
                </div>

              </button>
            ))}

          </div>

        </div>
      </section>

      {/* ========================================
          IMAGE LIGHTBOX
      ======================================== */}

      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image"
        >
          {/* Close button */}

          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            aria-label="Close image"
          >
            <X size={22} />
          </button>

          {/* Full-size image */}

          <div
            className="relative max-h-[88vh] max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedImage.srcLarge ?? selectedImage.src}
              alt={selectedImage.alt}
              decoding="async"
              className="max-h-[82vh] max-w-full rounded-2xl object-contain shadow-2xl"
            />
          </div>

        </div>
      )}

    </main>
  )
}