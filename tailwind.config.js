/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')


export const content = [
  './src/pages/**/*.{js,ts,jsx,tsx}',
  './src/components/**/*.{js,ts,jsx,tsx}',
  './src/app/**/*.{js,ts,jsx,tsx}',
]
export const theme = {
  extend: {
    backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
    },
    screens: {
      'xs': '360px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
}
export const plugins = []
