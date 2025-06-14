/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
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
        surface: {
          dark: '#231F20',
          soft: '#F1F3F5',
          mid: '#505050',
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
        card: '0 6px 12px rgba(0, 0, 0, 0.12), 0 10px 24px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 14px 28px rgba(0, 0, 0, 0.18), 0 18px 40px rgba(0, 0, 0, 0.16)',
      },
    },
  },
  plugins: [
    require('tailwindcss/plugin')(function ({ matchVariant }) {
      // Tablet-only responsive variant
      matchVariant(
        'tab',
        () => '@media (min-width: 768px) and (max-width: 1023px)'
      );

      // Additional coarse-pointer variant scoped to tablets
      matchVariant(
        'tab-touch',
        () =>
          '@media (pointer: coarse) and (min-width: 768px) and (max-width: 1023px)'
      );
    }),
  ],
}; 