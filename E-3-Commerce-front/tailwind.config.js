/** @type {import('tailwindcss').Config} */
export default {

  tailwindConfig: './styles/tailwind.config.js',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#b000ff',
        'secondary': '#bfc2fc',
      },
      colors: {  'primary': '#b000ff',
        'secondary': '#bfc2fc',
      }
    },
  },
    
  plugins: [
    ['prettier-plugin-tailwindcss'],
  ],
}