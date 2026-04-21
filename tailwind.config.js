export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        hand: ['"Caveat"', 'cursive'],
      },
      colors: {
        cream: '#F9F5EE',
        tulip: '#C8483A',
        primary: { DEFAULT: '#7BAF7A', foreground: '#ffffff' },
        accent: { DEFAULT: '#E8857A', foreground: '#ffffff' },
      },
      borderRadius: {
        pill: '50px',
      },
      boxShadow: {
        soft: '0 10px 40px -15px rgba(100,80,40,0.15)',
        warm: '0 20px 50px -20px rgba(150,100,50,0.25)',
      }
    }
  },
  plugins: []
};
