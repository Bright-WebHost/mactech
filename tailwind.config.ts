import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#111111',
          900: '#171717',
          800: '#222222',
          700: '#2d2d2d',
          600: '#3a3a3a',
        },
        blue: {
          accent: '#E20010',
          light: '#ff3b47',
          dark: '#b4000d',
        },
        amber: {
          accent: '#D7B569',
          light: '#edd39a',
          dark: '#b89242',
        },
        gray: {
          muted: '#6b6b6b',
          border: '#2a2a2a',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-right': 'slideRight 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        }
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(rgba(226,0,16,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(226,0,16,0.05) 1px, transparent 1px)",
        'hero-gradient': 'linear-gradient(135deg, #111111 0%, #1a1a1a 50%, #2a2a2a 100%)',
        'card-gradient': 'linear-gradient(135deg, #171717 0%, #252525 100%)',
      },
      backgroundSize: {
        'grid': '40px 40px',
      }
    },
  },
  plugins: [],
}
export default config
