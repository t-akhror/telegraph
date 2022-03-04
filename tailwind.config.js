module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0px 0px 25px rgba(0, 0, 0, 0.03)',
        '4xl':'0px 0px 25px rgba(0, 0, 0, 0.03)',
      },
      lineHeight: {
        '12': '5.3rem',
        '13': '3.12rem',
      },
      maxWidth: {
        '220': '13.75rem',
      }
    },
  },
  plugins: [],
}
