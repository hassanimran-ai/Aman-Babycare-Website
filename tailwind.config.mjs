// Brand tokens. Base values sampled from brand_assets/logo.jpg and the reference mock-up;
// confirm exact hex codes with the client.
/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        green: {
          50: '#EEF6F2',
          100: '#D5EAE0',
          200: '#A9D3C0',
          300: '#76B69A',
          400: '#3F8D6C',
          500: '#1E6E50',
          600: '#0F5640', // primary
          700: '#0C4734',
          800: '#093628',
          900: '#06261C',
        },
        pink: {
          50: '#FDF2F3',
          100: '#FBE3E6',
          200: '#F8CBD1',
          300: '#F4A7B0', // accent
          400: '#EC8592',
          500: '#DE6474',
          600: '#C44A5B',
          700: '#A13A49',
        },
        cream: {
          50: '#FFFDF9',
          100: '#FBF5EC', // page background
          200: '#F5EAD9',
          300: '#EDDCC2',
        },
        ink: {
          400: '#8A8178',
          500: '#6B635B',
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
        soft: '0 1px 2px rgb(15 86 64 / 0.04), 0 4px 12px rgb(15 86 64 / 0.06)',
        card: '0 2px 4px rgb(15 86 64 / 0.04), 0 12px 32px rgb(15 86 64 / 0.08)',
        float: '0 4px 8px rgb(196 74 91 / 0.06), 0 20px 48px rgb(15 86 64 / 0.14)',
      },
    },
  },
};
