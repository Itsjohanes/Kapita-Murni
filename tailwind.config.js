/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Bangers: ["Bangers", "cursive"],
        DM: ["DM Sans", "sans-serif"],
        Noto: ["Noto Sans", "sans-serif"],
     },
     colors:  {
      primary: '#B0F095',
      secondary: '#FFE381',
      button: '#AFF096',
      gray: '#F1DDC9',
     }
    },
  },
  plugins: [],
}

