/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        viva: {
          50: '#fef2f3',
          100: '#fce7e8',
          200: '#f9d2d7',
          300: '#f4adb5',
          400: '#ed7f8e',
          500: '#e25169',
          600: '#cd3152',
          700: '#bb2649',
          800: '#91203e',
          900: '#7c1f3a',
          950: '#450c1b',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
