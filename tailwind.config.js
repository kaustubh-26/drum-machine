/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'element-shadow': 'black 3px 3px 5px',
      },
    },
  },
  plugins: [],
};
