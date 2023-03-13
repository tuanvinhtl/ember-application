/* eslint-disable prettier/prettier */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{hbs,html,js}'],
  theme: {
    colors: {
      primary: 'var(--primary)',
      'p—light': 'var(--p—light)',
      'p—dark': 'var(--p—dark)',
      secondary: 'var(--secondary)',
      's—light': 'var(--s—light)',
      's—dark': 'var(--s—dark)',
      'p-text': 'var(--p-text)',
      's-text': 'var(--s-text)',
    },
    fontFamily: {
      roboto: ['Roboto', 'serif'],
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
};
