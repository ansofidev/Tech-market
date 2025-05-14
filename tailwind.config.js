// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/styles/index.css',
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ['Mont', 'sans-serif'],
        montBold: ['MontBold', 'sans-serif'],
        montSemiBold: ['MontSemiBold', 'sans-serif'],
      },
      colors: {
        brand: '#905BFF',
      },
      screens: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1200px',
        xl: '1440px',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out',
      },
    },
  },
  plugins: [require('tw-animate-css')],
};
