/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'keep-all': 'keep-all',
      },
      wordBreak: {
        keep: 'keep-all',
      },
    },
  },
  plugins: [],
};
