// src/data/menu.js

const thumbnailAssets = import.meta.glob('../assets/menu/thumb/**/*.webp', {
  eager: true,
  query: '?url',
  import: 'default',
})

const largeAssets = import.meta.glob('../assets/menu/large/**/*.webp', {
  eager: true,
  query: '?url',
  import: 'default',
})

const namedImages = {
  1: 'salads/salads-tostada.webp',
  4: 'favorites/favorites-chicken-taquitos.webp',
  11: 'burritos/burritos-burrito-grande.webp',
  12: 'appetizers/appetizers-tostones.webp',
  13: 'burritos/burritos-burrito-fajita.webp',
  14: 'tacos/tacos-primo.webp',
  16: 'sides/sides-chips-guacamole.webp',
  17: 'burritos/burritos-green-cactus-burrito.webp',
  18: 'tacos/tacos-pollo.webp',
  20: 'favorites/favorites-fajita-platter.webp',
  23: 'favorites/favorites-quesadilla.webp',
  24: 'salads/salads-cactus-salada.webp',
  25: 'burritos/burritos-burrito-vegetarian.webp',
  28: 'burritos/burritos-bean-and-cheese-burrito.webp',
  33: 'tacos/tacos-asada.webp',
  35: 'appetizers/appetizers-nachos.webp',
  38: 'favorites/favorites-green-cactus-combo.webp',
  39: 'burritos/burritos-burrito-one-foot.webp',
  45: 'sides/sides-guacamole.webp',
  46: 'favorites/favorites-torta.webp',
  47: 'appetizers/appetizers-sombrero-mexican-pizza.webp',
  48: 'tacos/tacos-fish.webp',
}

const imageByPath = (path) =>
  thumbnailAssets[`../assets/menu/thumb/${path}`] ?? null

const image = (id) => {
  const path = namedImages[id]
  return path ? imageByPath(path) : null
}

const largeByThumb = new Map()

for (const [key, thumbnail] of Object.entries(thumbnailAssets)) {
  const largeKey = key.replace('/thumb/', '/large/')
  if (largeAssets[largeKey]) {
    largeByThumb.set(thumbnail, largeAssets[largeKey])
  }
}

export const menuCategories = [
  'All',
  'Appetizers',
  'Salads',
  'Tacos',
  'Favorites',
  'Burritos',
  'Sides',
  'Desserts',
  'Drinks',
]

export const menuInfo = {
  pricingNotice:
    'All prices are credit card pricing. 4% discount if paid in cash.',
  allergyNotice:
    'If you have a food allergy, please notify the cashier.',
  priceNotice:
    'All prices subject to change.',
}

export const menuItems = [
  // APPETIZERS
  {
    id: 'sombrero',
    name: 'Sombrero',
    subtitle: 'Mexican Pizza',
    category: 'Appetizers',
    description:
      'Crisp 6" flour tortilla topped with black or pinto beans, sour cream, guacamole, jack & cheddar cheese, and fresh Pico de Gallo.',
    price: 8.99,
    image: image(47),
  },
  {
    id: 'nachos',
    name: 'Nachos',
    category: 'Appetizers',
    description:
      'Fresh corn chips topped with black or pinto beans, guacamole, sour cream, melted jack & cheddar cheese, and fresh Pico de Gallo.',
    price: 14.45,
    addOns: [{ name: 'Add Chicken or Steak', price: 3.49 }],
    image: image(35),
  },
  {
    id: 'jalapeno-poppers',
    name: 'Jalapeño Poppers',
    category: 'Appetizers',
    description:
      'Jalapeños stuffed with cheddar cheese, served on a bed of lettuce with sour cream.',
    price: 8.95,
    image: null,
  },
  {
    id: 'tostones',
    name: 'Tostones',
    category: 'Appetizers',
    description:
      'Deep-fried green plantains served with a spicy dressing.',
    price: 7.99,
    image: image(12),
  },
  {
    id: 'queso-chips',
    name: 'Queso & Chips',
    category: 'Appetizers',
    description: '8 oz queso served with fresh tortilla chips.',
    price: 10.49,
    image: null,
  },
  {
    id: 'queso-french-fries',
    name: 'Queso & French Fries',
    category: 'Appetizers',
    description: '8 oz queso served with crispy french fries.',
    price: 12.95,
    image: null,
  },
  {
    id: 'zucchini-sticks',
    name: 'Zucchini Sticks',
    category: 'Appetizers',
    description: 'Served with chipotle dressing.',
    price: 10.95,
    image: null,
  },
  {
    id: 'sweet-corn-tamales',
    name: 'Sweet Corn Tamales',
    category: 'Appetizers',
    description: '',
    price: 7.25,
    image: null,
  },

  // SALADS
  {
    id: 'tostada',
    name: 'Tostada',
    category: 'Salads',
    description:
      'A crisp flour tortilla shell filled with mixed greens, black or pinto beans, guacamole, sour cream, jack cheese, and fresh Pico de Gallo salsa.',
    price: 13.75,
    addOns: [{ name: 'Add Chicken or Steak', price: 3.49 }],
    image: image(1),
  },
  {
    id: 'grilled-chicken-caesar-salad',
    name: 'Grilled Chicken Caesar Salad',
    category: 'Salads',
    description:
      'Romaine lettuce, charbroiled chicken, fresh avocado, Romano cheese, and savory flavored croutons, served with creamy Caesar dressing.',
    price: 15.99,
    image: null,
  },
  {
    id: 'cactus-salada',
    name: 'Cactus Salada',
    category: 'Salads',
    description:
      'Romaine lettuce, your choice of chicken or steak, fresh Pico de Gallo, served with our own salad dressing, topped with crushed corn chips & shaved Romano cheese. All tossed to order.',
    price: 15.99,
    options: ['Chicken', 'Steak'],
    image: image(24),
  },

  // TACOS
  {
    id: 'asada-taco',
    name: 'Asada',
    category: 'Tacos',
    description:
      'Charbroiled steak in a soft corn tortilla with chopped onions and cilantro, served with hot or mild salsa.',
    price: 4.75,
    image: image(33),
  },
  {
    id: 'fish-taco',
    name: 'Fish',
    category: 'Tacos',
    description:
      'Fresh fish lightly breaded, fresh Pico de Gallo topped with shredded cabbage, along with our own tangy dressing.',
    price: 4.95,
    image: image(48),
  },
  {
    id: 'pollo-taco',
    name: 'Pollo',
    category: 'Tacos',
    description:
      'Charbroiled chicken in a soft corn tortilla with chopped onions and cilantro, served with hot or mild salsa.',
    price: 4.75,
    image: image(18),
  },
  {
    id: 'green-cactus-shrimp-taco',
    name: 'Green Cactus Shrimp',
    category: 'Tacos',
    description:
      'Charbroiled shrimp in a soft tortilla with chopped onions and cilantro, served with hot or mild salsa.',
    price: 4.95,
    image: imageByPath('tacos/tacos-green-cactus-shrimp.webp'),
  },
  {
    id: 'chorizo-taco',
    name: 'Chorizo',
    category: 'Tacos',
    description:
      'Charbroiled chorizo in a soft corn tortilla with chopped onions and cilantro, served hot or mild.',
    price: 4.75,
    image: null,
  },
  {
    id: 'birria-taco',
    name: 'Birria Taco',
    category: 'Tacos',
    description:
      'Perfectly seasoned birria in a soft tortilla, topped with onions and cilantro, served with hot or mild salsa.',
    price: 4.75,
    image: null,
  },
  {
    id: 'taco-primo',
    name: 'Taco Primo',
    category: 'Tacos',
    description:
      'Crispy corn shell filled with seasoned ground beef topped with red leaf lettuce, chopped red tomato, and cheddar cheese, served with hot or mild salsa.',
    price: 4.45,
    note: 'May substitute chicken.',
    image: image(14),
  },
  {
    id: 'taco-ranchero',
    name: 'Taco Ranchero',
    category: 'Tacos',
    description:
      'Soft flour tortilla with chicken or steak, black or pinto beans, lettuce, sour cream, guacamole, jack cheese, and fresh Pico de Gallo, served hot or mild.',
    price: 9.99,
    options: ['Chicken', 'Steak'],
    image: imageByPath('tacos/tacos-taco-ranchero.webp'),
  },

  // FAVORITES
  {
    id: 'quesadilla',
    name: 'Quesadilla',
    category: 'Favorites',
    description:
      'Melted jack cheese in a flour tortilla served with fresh Pico de Gallo, guacamole, and sour cream.',
    price: 12.49,
    addOns: [
      {
        name: 'Add Chicken, Shrimp, Steak, Chorizo, or Birria',
        price: 3.49,
      },
    ],
    image: image(23),
    featured: true,
  },
  {
    id: 'vegetarian-quesadilla',
    name: 'Vegetarian Quesadilla',
    category: 'Favorites',
    description:
      'Sautéed green bell peppers, tomatoes, onions, mushrooms, and melted jack cheese in a flour tortilla, served with fresh Pico de Gallo, guacamole, and sour cream.',
    price: 14.75,
    image: null,
  },
  {
    id: 'green-cactus-combo',
    name: 'Green Cactus Combo',
    category: 'Favorites',
    description:
      'On a plate, strips of charbroiled chicken or steak, black or pinto beans, rice, lettuce, fresh Pico de Gallo, and flour or corn tortilla.',
    price: 17.49,
    options: ['Chicken', 'Steak'],
    image: image(38),
  },
  {
    id: 'fajita-platter',
    name: 'Fajita Platter',
    category: 'Favorites',
    description:
      'Charbroiled chicken or steak, sautéed mushrooms, bell peppers, tomatoes, onions, black or pinto beans, rice, and flour or corn tortilla.',
    price: 17.79,
    options: ['Chicken', 'Steak'],
    image: image(20),
  },
  {
    id: 'chicken-taquitos',
    name: 'Chicken Taquitos',
    category: 'Favorites',
    description:
      'Three fried corn tortillas filled with chicken, served on a bed of lettuce with Green Cactus salsa, fresh Pico de Gallo, sour cream, and guacamole.',
    price: 12.85,
    image: image(4),
  },
  {
    id: 'torta',
    name: 'Torta',
    subtitle: 'Mexican Sandwich',
    category: 'Favorites',
    description:
      'Charbroiled chicken or steak on a Mexican roll with guacamole, sour cream, mayonnaise, lettuce, and tomato.',
    price: 15.99,
    options: ['Chicken', 'Steak'],
    image: image(46),
  },
  {
    id: 'enchiladas',
    name: 'Enchiladas',
    category: 'Favorites',
    description:
      'Two soft corn tortillas filled with chicken or steak, cheese, and rice, topped with cactus green salsa, served on a plate with a choice of black or pinto beans, rice, tomato, and sour cream.',
    price: 14.99,
    options: ['Chicken', 'Steak'],
    image: imageByPath('favorites/favorites-enchiladas.webp'),
  },
  {
    id: 'quesabirria-taco',
    name: 'Quesabirria Taco',
    category: 'Favorites',
    description:
      'Perfectly seasoned birria and Monterey jack cheese served inside 3 corn tortillas, accompanied by onions and cilantro, hot or mild salsa, and braised broth for dipping.',
    price: 17.49,
    image: null,
  },
  {
    id: 'chicken-fingers-french-fries',
    name: 'Chicken Fingers & French Fries',
    category: 'Favorites',
    description:
      'Perfectly seasoned birria and Monterey jack cheese served inside 3 corn tortillas, accompanied by onions and cilantro, hot or mild salsa, and braised broth for dipping.',
    price: 15.75,
    image: null,
  },

  // BURRITOS
  {
    id: 'green-cactus-burrito',
    name: 'Green Cactus Burrito',
    category: 'Burritos',
    description:
      'Charbroiled chicken, steak, chorizo, or birria, melted jack cheese, guacamole, and fresh Pico de Gallo.',
    price: 14.95,
    options: ['Chicken', 'Steak', 'Chorizo', 'Birria'],
    image: image(17),
    featured: true,
  },
  {
    id: 'burrito-grande',
    name: 'Burrito Grande',
    category: 'Burritos',
    description:
      'Charbroiled chicken, steak, chorizo, or birria, rice, black or pinto beans, chopped onions, cilantro, served hot or mild.',
    price: 14.95,
    options: ['Chicken', 'Steak', 'Chorizo', 'Birria'],
    image: image(11),
  },
  {
    id: 'burrito-vegetarian',
    name: 'Burrito Vegetarian',
    category: 'Burritos',
    description:
      'Fresh lettuce with guacamole, sour cream, rice, jack cheese, black or pinto beans, fresh Pico de Gallo served with hot or mild salsa.',
    price: 13.95,
    image: imageByPath('burritos/burritos-burrito-vegetarian.webp'),
  },
  {
    id: 'burrito-fajita',
    name: 'Burrito Fajita',
    category: 'Burritos',
    description:
      'Charbroiled chicken, steak, chorizo, or birria, sautéed mushrooms, green bell peppers, tomato, onions, jack cheese, and guacamole served in a flour tortilla.',
    price: 14.95,
    options: ['Chicken', 'Steak', 'Chorizo', 'Birria'],
    image: image(13),
  },
  {
    id: 'burrito-americano',
    name: 'Burrito Americano',
    category: 'Burritos',
    description:
      'Seasoned ground beef, rice, tomato, queso, sour cream, and french fries all wrapped in a flour tortilla.',
    price: 14.70,
    image: null,
  },
  {
    id: 'fish-burrito',
    name: 'Fish Burrito',
    category: 'Burritos',
    description:
      'Fresh fish lightly breaded, shredded cabbage, fresh Pico de Gallo, and our own tangy dressing.',
    price: 15.25,
    image: imageByPath('burritos/burritos-fish-burrito.webp'),
  },
  {
    id: 'shrimp-burrito',
    name: 'Shrimp Burrito',
    category: 'Burritos',
    description:
      'Sautéed shrimp with melted jack and cheddar cheese, grilled onions, rice, cabbage, sour cream with a slice of fresh avocado, served hot or mild.',
    price: 15.25,
    note: 'May substitute fish.',
    image: imageByPath('burritos/burritos-shrimp-burrito.webp'),
  },
  {
    id: 'one-foot-burrito',
    name: 'Burrito "One Foot"',
    category: 'Burritos',
    description:
      'Charbroiled chicken or steak, rice, black or pinto beans, grilled onions, peppers, jack cheese, sour cream, and fresh Pico de Gallo in an extra-large tortilla.',
    price: 24.45,
    options: ['Chicken', 'Steak'],
    image: image(39),
  },
  {
    id: 'bean-cheese-burrito',
    name: 'Bean and Cheese Burrito',
    category: 'Burritos',
    description:
      'Black or pinto beans and melted jack cheese, served in a flour tortilla.',
    price: 13.45,
    image: image(28),
  },
  {
    id: 'tinga-burrito',
    name: 'Tinga Burrito',
    category: 'Burritos',
    description:
      'Our very own Tinga (spicy chipotle chicken), rice, sour cream, jack cheese, and shredded cabbage, served inside a flour tortilla.',
    price: 14.95,
    image: image(36),
  },
  {
    id: 'buffalo-chicken-burrito',
    name: 'Buffalo Chicken Burrito',
    category: 'Burritos',
    description:
      'Spicy crispy chicken tenderloins, lettuce, and tomato, all tossed together with blue cheese dressing.',
    price: 14.95,
    image: null,
  },
  {
    id: 'crispy-chipotle-chicken-burrito',
    name: 'Crispy Chipotle Chicken Burrito',
    category: 'Burritos',
    description:
      'Crispy chicken tenderloins, lettuce, tomato, melted cheddar cheese, all tossed together with homemade chipotle ranch dressing.',
    price: 14.95,
    image: null,
  },

  // SIDES
  {
    id: 'rice',
    name: 'Rice',
    category: 'Sides',
    price: 3.80,
    image: null,
  },
  {
    id: 'chips-salsa',
    name: 'Chips & Salsa',
    category: 'Sides',
    price: 7.35,
    image: null,
  },
  {
    id: 'chips-queso',
    name: 'Chips & Queso',
    category: 'Sides',
    description: '8 oz.',
    price: 10.49,
    image: null,
  },
  {
    id: 'chips-guacamole',
    name: 'Chips & Guacamole',
    category: 'Sides',
    description: '8 oz.',
    price: 10.50,
    image: image(16),
  },
  {
    id: 'guacamole',
    name: 'Guacamole',
    category: 'Sides',
    description: '2 oz.',
    price: 2.49,
    image: image(45),
  },
  {
    id: 'pinto-beans',
    name: 'Pinto Beans',
    category: 'Sides',
    price: 3.80,
    image: null,
  },
  {
    id: 'black-beans',
    name: 'Black Beans',
    category: 'Sides',
    price: 3.80,
    image: null,
  },

  // DESSERTS
  {
    id: 'churro',
    name: 'Churro',
    category: 'Desserts',
    price: 2.55,
    image: null,
  },
  {
    id: 'flan',
    name: 'Flan',
    category: 'Desserts',
    price: 6.20,
    image: null,
  },
  {
    id: 'tres-leches-cake',
    name: 'Tres Leches Cake',
    category: 'Desserts',
    price: 6.65,
    image: null,
  },
  {
    id: 'rice-pudding',
    name: 'Rice Pudding',
    category: 'Desserts',
    price: 6.45,
    image: null,
  },
  {
    id: 'fried-plantains',
    name: 'Fried Plantains',
    category: 'Desserts',
    price: 6.55,
    image: null,
  },

  // DRINKS
  {
    id: 'small-drink',
    name: 'Small',
    category: 'Drinks',
    price: 2.89,
    image: null,
  },
  {
    id: 'large-drink',
    name: 'Large',
    category: 'Drinks',
    price: 3.14,
    image: null,
  },
]

// Attach the large version of each menu photo.
for (const item of menuItems) {
  item.imageLarge = item.image
    ? largeByThumb.get(item.image) ?? item.image
    : null
}

export const burritoExtras = {
  title: 'Try it Enchilada Style "Wet Burrito"',
  description:
    'Any of the above burritos topped with melted jack and cheddar cheese, our own special salsa, and sour cream on the side.',
  price: 4.20,
  oneFootPrice: 5.25,
}

export const drinkNote = 'Assorted bottled beverages available.'

export const getMenuItemsByCategory = (category) => {
  if (category === 'All') return menuItems
  return menuItems.filter((item) => item.category === category)
}

export const getMenuItem = (id) =>
  menuItems.find((item) => item.id === id)

export default menuItems