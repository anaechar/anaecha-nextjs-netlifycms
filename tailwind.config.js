module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './layouts/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {},
    typography: (theme) => ({
      DEFAULT: {
        css: {
          color: theme('colors.gray.700'),
          'h2,h3,h4': {
            color: theme('colors.indigo.700'),
            'border-bottom': `2px solid ${theme('colors.indigo.400')}`
          }
        }
      },
      dark: {
        css: {
          color: theme('colors.gray.300'),
          'h2,h3,h4': {
            color: theme('colors.indigo.300'),
            'border-bottom': `2px solid ${theme('colors.indigo.400')}`
          }
        }
      }
    })
  },
  variants: {
    extend: {
      typography: ['dark']
    }
  },
  plugins: [require('@tailwindcss/typography')]
};