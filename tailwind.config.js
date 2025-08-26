/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // New palette
        background: {
          DEFAULT: '#0E0E10',
          secondary: '#16161A',
        },
        accent: {
          DEFAULT: '#9D4EDD',
          hover: '#7F5AF0',
        },
        text: {
          primary: '#EDEDED',
          secondary: '#9A9A9A',
        },
        primary: {
          400: '#9D4EDD',
          500: '#9D4EDD',
        },
        secondary: {
          400: '#7F5AF0',
          500: '#7F5AF0',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-mesh': 'linear-gradient(45deg, #9D4EDD 0%, #7F5AF0 100%)',
        'gradient-ocean': 'linear-gradient(135deg, #9D4EDD 0%, #7F5AF0 100%)',
        'gradient-sunset': 'linear-gradient(135deg, #9D4EDD 0%, #7F5AF0 100%)',
        'gradient-forest': 'linear-gradient(135deg, #9D4EDD 0%, #7F5AF0 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
} 