/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors:{
      primaryCOlor:"#014693",
      footerbgcolor:"#E4F1FF"
    },
    fontFamily: {
      sans: ['Avenir', 'Helvetica', 'Arial', 'sans-serif']
    },
    animation: {
      'loop-scroll': 'loop-scroll 50s linear infinite',
      'reverse-loop-scroll': 'reverse-loop-scroll 50s linear infinite',
    },
    keyframes: {
      'loop-scroll': {
        from: { transform: 'translateX(0)' },
        to: { transform: 'translateX(-100%)' },
      },
      'reverse-loop-scroll': {
        from: { transform: 'translateX(-100%)' },
        to: { transform: 'translateX(0)' },
      },
    },
  },
  plugins: [],
};
