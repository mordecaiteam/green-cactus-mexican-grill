/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#f7f1e5',
        sand: '#e8dcc3',
        forest: '#263c2b',
        rust: '#9d4c2d',
        gold: '#d99025',
        ink: '#27251f',
        sage: '#73805d',
      },
    },
  },
  plugins: [],
}
