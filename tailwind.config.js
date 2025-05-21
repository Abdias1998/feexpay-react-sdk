/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        colors: {
          primary: {
            orange: '#D45D00',
            blue: '#112C56'
          }
        },
      },
    },
    plugins: [],
  };
  