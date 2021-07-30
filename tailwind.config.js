module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        "first-image": "url(https://scontent-frt3-2.xx.fbcdn.net/v/t1.6435-9/81441129_2607828932638457_2187188000721469440_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=jdyX_tXAzwMAX87tAnL&_nc_ht=scontent-frt3-2.xx&oh=64d668de72a65012647bea685379ed34&oe=6128E207)"
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
