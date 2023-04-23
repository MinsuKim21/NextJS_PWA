/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      spacing: {
        18: '4.5rem',
        30: '7.5rem',
        88: '22rem',
        104: '26rem',
        112: '28rem',
        128: '32rem',
        mobileScreen: 'calc(var(--vh, 1vh) * 100)',
      },
      colors: {
        myGreen: '#00Fd00',
        myPupple: '#BE19FC',
      },
      keyframes: {
        typingCursor: {
          from: {
            borderRight: '2px solid white',
          },
          to: { borderRight: '2px solid black' },
        },
        bounceSlow: {
          '0%, 100%': {
            transform: 'translateY(-30%)',
            animationTimingFunction: 'cubic-bezier(0.5,0,0,0)',
          },
          '50%': {
            transform: 'none',
            animationTimingFunction: 'cubic-bezier(0.5,0,0,0)',
          },
        },
      },
      animation: {
        typingCursor: 'typingCursor 0.7s ease-in-out 0ms 5',
        'bounce-slow': 'bounceSlow 1.5s infinite',
        'bounce-slow': 'bounceSlow 1.5s infinite',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light', 'forest'],
    darkTheme: 'forest',
  },
}
