/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'desktop-dark': "url('./assets/images/bg-desktop-dark.jpg')",
        'desktop-light': "url('./assets/images/bg-desktop-light.jpg')",
        'mobile-dark': "url('./assets/images/bg-mobile-dark.jpg')",
        'mobile-light': "url('./assets/images/bg-mobile-light.jpg')",
      },
    
    },
  },
  plugins: [],
}

