/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,md,njk}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        'sans': ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: theme('colors.gray.800'),
            lineHeight: '1.75',
            fontSize: '1.125rem',
            h1: {
              fontSize: '2.5rem',
              fontWeight: '300',
              lineHeight: '1.2',
              marginBottom: '2rem',
            },
            h2: {
              fontSize: '2rem',
              fontWeight: '400',
              marginTop: '3rem',
              marginBottom: '1.5rem',
            },
            h3: {
              fontSize: '1.5rem',
              fontWeight: '500',
              marginTop: '2rem',
              marginBottom: '1rem',
            },
            p: {
              marginBottom: '1.5rem',
            },
            'blockquote p:first-of-type::before': false,
            'blockquote p:last-of-type::after': false,
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.200'),
            h1: { color: theme('colors.gray.100') },
            h2: { color: theme('colors.gray.100') },
            h3: { color: theme('colors.gray.100') },
            h4: { color: theme('colors.gray.100') },
            strong: { color: theme('colors.gray.100') },
            a: { color: theme('colors.blue.400') },
            blockquote: { color: theme('colors.gray.300') },
            code: { color: theme('colors.gray.200') },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
} 