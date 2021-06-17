const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: ['./src/**/*.html', './src/**/*.md', './src/**/*.njk'],
  darkMode: false,
  corePlugins: {
    listStyleType: false,
    listStylePosition: false,
    ol: false,
    ul: false,
    list: false,
  },

  theme: {
    screens: {
      sm: '480px',
      md: '640px',
      lg: '800px',
      xl: '880px',
    },
    extend: {
      fontFamily: {
        display: ['Barlow Condensed', ...defaultTheme.fontFamily.sans],
      },
      inset: {
        '-20': '-5rem',
      },
      margin: {
        '-2px': '-2px',
      },
    },
  },
  variants: {
    inset: ['responsive', 'focus'],
    textDecoration: ['responsive', 'hover', 'focus'],
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    fontFamily: ['responsive', 'hover', 'focus'],
  },
  plugins: [
    require('@tailwindcss/typography'),
    plugin(function ({ addBase, config }) {
      addBase({
        h1: { fontSize: config('theme.fontSize.4xl') },
        h2: { fontSize: config('theme.fontSize.xl') },
        h3: { fontSize: config('theme.fontSize.lg') },
      });
    }),
  ],
};
