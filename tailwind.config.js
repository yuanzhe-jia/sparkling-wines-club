/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sunshine: '#FBE29D',
        seafoam: '#C0DDDA',
        caramel: '#775537',
        cloud: '#F1F1F1',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
