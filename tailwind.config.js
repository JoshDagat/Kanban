/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'main-purple': "#635fc7",
        'main-purple-hover' : "#a8a4ff",
        'main-black' : "#000112",
        'very-dark-grey' : "#20212c",
        'dark-grey':"#2b2c37",
        'lines-dark': "#3e3f4e",
        'lines-light': "#e4ebfa",
        'medium-grey' : "#828fa3",
        'light-grey' : "#f4f7fd",
        'main-red' : "#ea5555",
        'main-red-hover' : "ff9898"
      },
      fontFamily: {
        sans: ['var(--font-pjs)']
      }
    },
  },
  plugins: [],
}
