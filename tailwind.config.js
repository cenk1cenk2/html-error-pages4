// @ts-check
import typography from '@tailwindcss/typography'
import defaultTheme from 'tailwindcss/defaultTheme'
import { getColors } from 'theme-colors'

/** @type {import("tailwindcss").Config} */
export default {
  content: [ './src/**/*.{html,js,svelte,ts,css}' ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: [ 'DM Sans', ...defaultTheme.fontFamily.sans ],
        mono: [ 'DM Mono', ...defaultTheme.fontFamily.mono ]
      },
      colors: {
        primary: getColors('#cd0043'),
        gray: getColors('#434951'),
        orange: getColors('#fa8350')
      },
      maxHeight: {
        '(screen-16)': 'calc(100vh - 4rem)'
      },
      inset: {
        16: '4rem'
      },
      transitionProperty: {
        padding: 'padding'
      },
      typography: (theme) => {
        return {
          DEFAULT: {
            css: {
              a: {
                color: theme('colors.primary.500'),
                'text-decoration': 'none'
              },
              h2: {
                paddingBottom: theme('padding.2'),
                borderBottomWidth: '1px',
                borderBottomColor: theme('colors.gray.200')
              },
              h3: {
                paddingBottom: theme('padding.2'),
                borderBottomWidth: '1px',
                borderBottomColor: theme('colors.gray.200')
              }
            }
          },
          dark: {
            css: {
              color: theme('colors.gray.100'),
              a: {
                color: theme('colors.primary.500')
              },
              strong: {
                color: theme('colors.gray.100')
              },
              hr: {
                borderColor: theme('colors.gray.700')
              },
              h1: {
                color: theme('colors.gray.100')
              },
              h2: {
                color: theme('colors.gray.100'),
                borderBottomColor: theme('colors.gray.800')
              },
              h3: {
                color: theme('colors.gray.100'),
                borderBottomColor: theme('colors.gray.800')
              },
              h4: {
                color: theme('colors.gray.100')
              },
              p: {
                color: theme('colors.gray.100')
              }
            }
          }
        }
      }
    }
  },
  plugins: [ typography ]
}
