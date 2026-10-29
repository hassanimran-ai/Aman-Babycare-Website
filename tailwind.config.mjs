// Brand tokens, sampled from brand_assets/Logo.png (green #075440, gold #E1A93A, toned down for a calm, premium feel).
// Roles and usage rules: docs/build/design-system.md
/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        green: {
          50: '#EEF5F1',
          100: '#D6E8DF',
          200: '#ADD0BF',
          300: '#7FB39C',
          400: '#3F8A6C',
          500: '#1A6B50',
          600: '#075440', // logo green
          700: '#0A4A38', // primary
          800: '#083B2D',
          900: '#062A20',
          950: '#041C15',
        },
        gold: {
          50: '#FBF6EA',
          100: '#F5EAD0',
          200: '#EBD5A4',
          300: '#DEBC72',
          400: '#D2A955',
          500: '#C69A45', // accent: hairlines, motifs, badges
          600: '#A9802F',
          700: '#8A6421', // gold text on light backgrounds
          800: '#6B4D1A',
        },
        pink: {
          50: '#FCF4F2',
          100: '#F7E4E1', // soft tint for baby moments only
          200: '#EFCBC6',
          300: '#E3A9A2',
          // Muted rose for form errors only (text and outlines), never as decoration.
          700: '#9A4740',
          800: '#7C3630',
          900: '#5C2722',
        },
        cream: {
          50: '#FFFDF9', // cards
          100: '#FBF7F0', // page background
          200: '#F4ECDF',
          300: '#EADFCB',
        },
        ink: {
          400: '#8C857C',
          500: '#6E675F',
          600: '#575049',
          700: '#3F3A35',
          900: '#1F1C19',
        },
      },
      fontFamily: {
        arabic: ['"IBM Plex Sans Arabic"', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 1px 2px rgb(7 84 64 / 0.04), 0 4px 12px rgb(7 84 64 / 0.05)',
        card: '0 1px 2px rgb(7 84 64 / 0.04), 0 12px 32px -8px rgb(7 84 64 / 0.10)',
        float: '0 2px 6px rgb(7 84 64 / 0.08), 0 24px 48px -12px rgb(7 84 64 / 0.22)',
      },
    },
  },
};
