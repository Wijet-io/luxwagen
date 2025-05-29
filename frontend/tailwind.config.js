/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#D4AF37',
          50: '#FAF6E8',
          100: '#F4EDCA',
          200: '#EADA8E',
          300: '#E0C752',
          400: '#D4AF37',
          500: '#B8860B',
          600: '#9D7209',
          700: '#825F07',
          800: '#664C06',
          900: '#4A3804',
        },
        platinum: {
          DEFAULT: '#E5E4E2',
          50: '#FBFBFA',
          100: '#F7F7F5',
          200: '#EFEEEB',
          300: '#E7E6E1',
          400: '#E5E4E2',
          500: '#D3D2CE',
          600: '#B8B7B1',
          700: '#9C9B94',
          800: '#7E7D76',
          900: '#616058',
        },
        luxury: {
          black: '#000000',
          charcoal: '#36454F',
          bronze: '#CD7F32',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'Consolas', 'monospace'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },
      boxShadow: {
        'gold': '0 4px 14px 0 rgba(212, 175, 55, 0.25)',
        'gold-lg': '0 10px 25px 0 rgba(212, 175, 55, 0.35)',
        'luxury': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'inner-luxury': 'inset 0 2px 4px 0 rgba(212, 175, 55, 0.06)',
      },
      gradientColorStops: {
        'gold-start': '#D4AF37',
        'gold-end': '#F4E4BC',
      },
      screens: {
        'xs': '475px',
        '3xl': '1600px',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
