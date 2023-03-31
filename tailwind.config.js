/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['media', '[data-mode="dark"]'],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      /* LIGHT THEME */
    'light-primary': '#6750A4',
    'light-on-primary': '#FFFFFF',
    'light-primary-container': '#EADDFF',
    'light-on-primary-container': '#21005D',

    'light-secondary': '#625B71',
    'light-on-secondary': '#FFFFFF',
    'light-secondary-container': '#E8DEF8',
    'light-on-secondary-container': '#1D192B',

    'light-tertiary': '#7D5260',
    'light-on-tertiary': '#FFFFFF',
    'light-tertiary-container': '#FFD8E4',
    'light-on-tertiary-container': '#31111D',

    'light-error': '#B3261E',
    'light-on-error': '#FFFFFF',
    'light-error-container': '#F9DEDC',
    'light-on-error-container': '#410E0B',

    'light-background': '#FFFBFE',
    'light-on-background': '#1C1B1F',
    'light-surface': '#FFFBFE',
    'light-on-surface': '#1C1B1F',

    'light-outline': '#79747E',
    'light-surface-variant': '#E7E0EC',
    'light-on-surface-variant': '#49454F',


    /** DARK THEME */
    'dark-primary': '#D0BCFF',
    'dark-on-primary': '#381E72',
    'dark-primary-container': '#4F378B',
    'dark-on-primary-container': '#EADDFF',

    'dark-secondary': '#CCC2DC',
    'dark-on-secondary': '#332D41',
    'dark-secondary-container': '#4A4458',
    'dark-on-secondary-container': '#E8DEF8',

    'dark-tertiary': '#EFB8C8',
    'dark-on-tertiary': '#492532',
    'dark-tertiary-container': '#633B48',
    'dark-on-tertiary-container': '#FFD8E4',

    'dark-error': '#F2B8B5',
    'dark-on-error': '#601410',
    'dark-error-container': '#8C1D18',
    'dark-on-error-container': '#F9DEDC',

    'dark-background': '#1C1B1F',
    'dark-on-background': '#E6E1E5',
    'dark-surface': '#1C1B1F',
    'dark-on-surface': '#E6E1E5',

    'dark-outline': '#938F99',
    'dark-surface-variant': '#49454F',
    'dark-on-surface-variant': '#CAC4D0',
    }
  },
  plugins: [],
}

