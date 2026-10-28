// src/data/gallery.js

// ========================================
// OPTIMIZED GALLERY IMAGE IMPORTS
// ========================================

// 640px thumbnails
import gallery01Thumb from '../assets/gallery/thumb/gallery-01.webp'
import gallery02Thumb from '../assets/gallery/thumb/gallery-02.webp'
import gallery03Thumb from '../assets/gallery/thumb/gallery-03.webp'
import gallery04Thumb from '../assets/gallery/thumb/gallery-04.webp'
import gallery05Thumb from '../assets/gallery/thumb/gallery-05.webp'
import gallery06Thumb from '../assets/gallery/thumb/gallery-06.webp'
import gallery07Thumb from '../assets/gallery/thumb/gallery-07.webp'
import gallery08Thumb from '../assets/gallery/thumb/gallery-08.webp'

// 1600px large images
import gallery01Large from '../assets/gallery/large/gallery-01.webp'
import gallery02Large from '../assets/gallery/large/gallery-02.webp'
import gallery03Large from '../assets/gallery/large/gallery-03.webp'
import gallery04Large from '../assets/gallery/large/gallery-04.webp'
import gallery05Large from '../assets/gallery/large/gallery-05.webp'
import gallery06Large from '../assets/gallery/large/gallery-06.webp'
import gallery07Large from '../assets/gallery/large/gallery-07.webp'
import gallery08Large from '../assets/gallery/large/gallery-08.webp'

// ========================================
// GALLERY CATEGORIES
// ========================================

// Categories can be restored after the
// restaurant owner verifies the photos.

export const galleryCategories = [
  'All',
]

// ========================================
// GALLERY IMAGES
// ========================================

// src      = optimized thumbnail
// srcLarge = optimized full-size image
//
// Large images are only downloaded by the
// browser when requested by the lightbox.

export const galleryImages = [
  {
    id: 1,
    src: gallery01Thumb,
    srcLarge: gallery01Large,
    category: 'All',
    alt: 'Green Cactus Mexican Grill photo 1',
  },
  {
    id: 2,
    src: gallery02Thumb,
    srcLarge: gallery02Large,
    category: 'All',
    alt: 'Green Cactus Mexican Grill photo 2',
  },
  {
    id: 3,
    src: gallery03Thumb,
    srcLarge: gallery03Large,
    category: 'All',
    alt: 'Green Cactus Mexican Grill photo 3',
  },
  {
    id: 4,
    src: gallery04Thumb,
    srcLarge: gallery04Large,
    category: 'All',
    alt: 'Green Cactus Mexican Grill photo 4',
  },
  {
    id: 5,
    src: gallery05Thumb,
    srcLarge: gallery05Large,
    category: 'All',
    alt: 'Green Cactus Mexican Grill photo 5',
  },
  {
    id: 6,
    src: gallery06Thumb,
    srcLarge: gallery06Large,
    category: 'All',
    alt: 'Green Cactus Mexican Grill photo 6',
  },
  {
    id: 7,
    src: gallery07Thumb,
    srcLarge: gallery07Large,
    category: 'All',
    alt: 'Green Cactus Mexican Grill photo 7',
  },
  {
    id: 8,
    src: gallery08Thumb,
    srcLarge: gallery08Large,
    category: 'All',
    alt: 'Green Cactus Mexican Grill photo 8',
  },
]

// ========================================
// HELPER FUNCTIONS
// ========================================

// Get images by category
export const getGalleryImagesByCategory = (category) => {
  if (category === 'All') {
    return galleryImages
  }

  return galleryImages.filter(
    (image) => image.category === category
  )
}

// Get a specific image by ID
export const getGalleryImage = (id) =>
  galleryImages.find((image) => image.id === id)

// ========================================
// DEFAULT EXPORT
// ========================================

export default galleryImages