// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/styles/index.css',
  ],
  theme: {
    extend: {
      colors: {
        brand: '#905BFF',
      },
    },
  },
  plugins: [require('tw-animate-css')],
};
