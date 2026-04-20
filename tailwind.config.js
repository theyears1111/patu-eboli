/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
      },
      colors: {
        olive: {
          50: '#f4f6ee',
          100: '#e5ecd5',
          200: '#ccd9ae',
          300: '#aabf7e',
          400: '#8ba457',
          500: '#6B7F4A',
          600: '#536338',
          700: '#404d2c',
          800: '#353f25',
          900: '#2d3621',
        },
        terracotta: {
          50: '#fdf5f1',
          100: '#fbe8df',
          200: '#f7d0be',
          300: '#f0ae91',
          400: '#e68461',
          500: '#C17B5C',
          600: '#ad5f3e',
          700: '#924d33',
          800: '#78412e',
          900: '#633929',
        },
        cream: '#F9F6F1',
        charcoal: '#2C2C2C',
      },
      borderRadius: {
        pill: '50px',
        card: '12px',
      },
    },
  },
  plugins: [],
};
