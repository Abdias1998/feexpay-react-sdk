/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../src/**/*.{js,ts,jsx,tsx}"  // Inclure les fichiers du SDK
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
