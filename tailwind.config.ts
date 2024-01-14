import type { Config } from 'tailwindcss'
const defaultTheme = require('tailwindcss/defaultTheme')
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: [
    './app/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Wotfard"', ...defaultTheme.fontFamily.sans],
        'mono': ['"League Mono"', ...defaultTheme.fontFamily.mono]
      },
    },
  },
  plugins: [require("daisyui")],
} satisfies Config);

