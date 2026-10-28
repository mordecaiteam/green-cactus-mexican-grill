// src/data/site.js

export const siteInfo = {
  phoneDisplay: '(631) 751-0700',
  phoneHref: 'tel:+16317510700',

  email: 'greencactusmexicangrill@gmail.com',
  emailHref: 'mailto:greencactusmexicangrill@gmail.com',

  instagramUrl:
    'https://www.instagram.com/greencactusmexicangrill/',

  facebookUrl:
    'https://www.facebook.com/profile.php?id=61594967895397',

  addressLine: '1099 N Country Rd, Stony Brook, NY 11790',

  directionsUrl:
    'https://www.google.com/maps/search/?api=1&query=Green+Cactus+Grill+1099+N+Country+Rd+Stony+Brook+NY+11790',

  doorDashUrl:
    'https://www.doordash.com/store/green-cactus-grill-stony-brook-23692859/',

  uberEatsUrl:
    'https://www.ubereats.com/store/green-cactus-fresh-mexican-grill/r_DTFnDzVgOm2WBK1t21zA',

  googleReviewUrl:
    'https://search.google.com/local/writereview?placeid=ChIJO0nUoiY_6IkRJk3smSi9bjc&pli=1',

  hours: [
    { day: 'Monday', hours: '11 AM – 9 PM' },
    { day: 'Tuesday', hours: '11 AM – 9 PM' },
    { day: 'Wednesday', hours: '11 AM – 9 PM' },
    { day: 'Thursday', hours: '11 AM – 9 PM' },
    { day: 'Friday', hours: '11 AM – 9 PM' },
    { day: 'Saturday', hours: '11 AM – 9 PM' },
    { day: 'Sunday', hours: '12 PM – 9 PM' },
  ],
}

export const navigation = [
  { label: 'Home', to: '/' },
  { label: 'Our Story', to: '/our-story' },
  { label: 'Menu', to: '/menu' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact Us', to: '/contact' },
]