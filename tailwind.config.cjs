/** @type {typeof import('tailwindcss/stubs/defaultConfig.stub')} */
module.exports = {
  purge: {
    content: ["./src/**/*.svelte"],
  },
  theme: {
    fontFamily: {
      main: ["Source Sans Pro", "sans-serif"],
      para: ["Source Sans Pro", "sans-serif"],
    },
    extend: {
      colors: {
        orange: {
          500: "#ff3e00",
        },
      },
    },
  },
  variants: {},
  plugins: [],
}
