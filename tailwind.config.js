/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFE5EB',
          100: '#FFD6DE',
          200: '#FFB3C1',
          300: '#FF8096',
          400: '#FF4D6B',
          500: '#C2002F',
          600: '#e00000',
          700: '#ed2d26',
          800: '#580017',
          900: '#33000C',
        },
        blue: {
          50: '#FFE5EB',
          100: '#FFD6DE',
          200: '#FFB3C1',
          300: '#FF8096',
          400: '#FF4D6B',
          500: '#C2002F',
          600: '#A00027',
          700: '#7C001F',
          800: '#580017',
          900: '#33000C',
        },
        secondary: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
      },
      fontFamily: {
        sans: ['Lato', 'Helvetica Neue', 'Arial Black', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}; 