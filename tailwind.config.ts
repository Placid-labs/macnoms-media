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
        paper: {
          50: '#FAF9F5',
          100: '#F5F3EC',
          200: '#EFECE3',
          300: '#E4DFD5',
          400: '#D2CBBF',
          500: '#B8AF9F',
          DEFAULT: '#F5F3EC',
        },
        ink: {
          950: '#0B0B0C',
          900: '#121214',
          850: '#19191C',
          800: '#232327',
          700: '#38383F',
          600: '#54545D',
          500: '#72727D',
          400: '#9494A0',
          300: '#B8B8C2',
          200: '#DADAE0',
          100: '#EAEAEE',
          50: '#F4F4F6',
          DEFAULT: '#121214',
        },
        cream: {
          50: '#FAF9F5',
          100: '#F5F3EC',
          200: '#EFECE3',
          300: '#E4DFD5',
          400: '#D2CBBF',
          500: '#B8AF9F',
        },
        burgundy: {
          950: '#140508',
          900: '#22080D',
          850: '#2E0C12',
          800: '#3D1018',
          700: '#5A1823',
          600: '#7A202E',
          100: '#F5EBEC',
          50: '#FAF5F6',
        },
        gold: {
          300: '#DEC6A3',
          400: '#CFB186',
          500: '#B99665',
          600: '#9E7C4B',
          700: '#7D6036',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"Space Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        display: ['"Space Grotesk"', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 28s linear infinite',
        'marquee-reverse': 'marquee-reverse 28s linear infinite',
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
