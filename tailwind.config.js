/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'float-left': 'float-left 15s ease-in-out infinite',
        'float-right': 'float-right 18s ease-in-out infinite',
        'float-left-slow': 'float-left-slow 25s ease-in-out infinite',
        'float-right-slow': 'float-right-slow 22s ease-in-out infinite',
        'gradient': 'gradient 3s ease infinite',
        'fadeIn': 'fadeIn 0.8s ease-out',
        'slideDown': 'slideDown 0.3s ease-out',
        'bounce-horizontal': 'bounce-horizontal 1s infinite',
      },
      keyframes: {
        'float-left': {
          '0%, 100%': { transform: 'translateX(0) translateY(0)' },
          '50%': { transform: 'translateX(-20px) translateY(-10px)' },
        },
        'float-right': {
          '0%, 100%': { transform: 'translateX(0) translateY(0)' },
          '50%': { transform: 'translateX(20px) translateY(-10px)' },
        },
        'float-left-slow': {
          '0%, 100%': { transform: 'translateX(0) translateY(0)' },
          '50%': { transform: 'translateX(-30px) translateY(15px)' },
        },
        'float-right-slow': {
          '0%, 100%': { transform: 'translateX(0) translateY(0)' },
          '50%': { transform: 'translateX(30px) translateY(15px)' },
        },
        'gradient': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'fadeIn': {
          'from': { opacity: 0, transform: 'translateY(20px)' },
          'to': { opacity: 1, transform: 'translateY(0)' },
        },
        'slideDown': {
          'from': { opacity: 0, transform: 'translateY(-10px)' },
          'to': { opacity: 1, transform: 'translateY(0)' },
        },
        'bounce-horizontal': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(5px)' },
        },
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["dark"],
  },
}