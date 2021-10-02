module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        garantido: "url('~/static/garantido-bg.jpg')",
        caprichoso: "url('~/static/caprichoso-bg.jpg')",
        capvsred: "url('~/static/capvsred.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
