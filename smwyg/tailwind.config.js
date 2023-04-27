/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontSize: {
        '2xs': '0.6rem',
        '3xs': '0.375rem',
      },
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
        myGreen: '#0BE649',
        myPurple: '#BE19FC',
        myOrange: '#FAA937',
      },
      keyframes: {
        typingCursor: {
          from: {
            borderRight: '2px solid white',
          },
          to: { borderRight: '2px solid black' },
        },
        'slide-top': {
          from: { transform: 'translateY(100%)', opacity: 0 },
          to: { transform: 'translateY(0)', opacity: 1 },
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
        'slide-top': 'slide-top 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        'bounce-slow': 'bounceSlow 1.5s infinite',
        'bounce-slow': 'bounceSlow 1.5s infinite',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      'emerald',
      'forest',
      {
        mytheme: {
          primary: '#1EB854',
          secondary: '#537BF8',
          accent: '#D99330',
          neutral: '#110E0E',
          'base-100': '#171212',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272',
        },
      },
    ],
    darkTheme: 'mytheme',
  },
}
