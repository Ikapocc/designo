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
        'peach': "#e88069",
        'foot' : "#1d1c1e",
        'line' : "#979797",
      },
      fontSize: {
        '2xl' : "1.3rem",
        '3xl' : "1.4rem",
        '5xl' : ["3.4rem", "4rem"]
      },
      textColor: {
        'gray-custom' : "#fff",
        'strong-orange': "#e78168",
      }
    },
  },
  plugins: [],
}
