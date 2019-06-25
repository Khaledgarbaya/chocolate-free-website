module.exports = {
  theme: {
    extend: {}
  },
  variants: {},
  plugins: [
    require('tailwindcss-aspect-ratio')({
      ratios: {
        square: [1, 1],
        '16x9': [16, 9],
        '4x3': [4, 3],
        '21x9': [21, 9]
      }
    })
  ]
}
