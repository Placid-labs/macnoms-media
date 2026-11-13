import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#200D13',
          darker: '#18090E',
          rust: '#B85D3D',
          tan: '#E8D4BA',
          tanLight: '#F3E5D4',
          badge: '#ECD7BF',
          badgeText: '#7A3F2A',
          bg: '#F6F3EB',
          text: '#1E0C12',
          sub: '#524944',
          accent: '#E28D75',
        },
        paper: {
          50: '#FAF9F5',
          100: '#F6F3EB',
          200: '#EFECE3',
          300: '#E4DFD5',
          400: '#D2CBBF',
          500: '#B8AF9F',
          DEFAULT: '#F6F3EB',
        },
        ink: {
          950: '#18090E',
          900: '#200D13',
          850: '#261118',
          800: '#321620',
          700: '#524944',
          600: '#675C56',
          500: '#8A7D76',
          400: '#AEA29B',
          300: '#D2C8C2',
          200: '#E7DFD9',
          100: '#F2ECE7',
          50: '#FAF7F5',
          DEFAULT: '#200D13',
        },
        burgundy: {
          950: '#18090E',
          900: '#200D13',
          850: '#261118',
          800: '#321620',
          700: '#4D1D2C',
          600: '#732A42',
          500: '#B85D3D',
          100: '#F5EBEC',
          50: '#FAF5F6',
        },
      },
      fontFamily: {
        stencil: ['"Black Ops One"', 'cursive', 'sans-serif'],
        display: ['"Black Ops One"', 'cursive', 'sans-serif'],
        sans: ['"Nunito Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'marquee-slow': 'marquee 35s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;