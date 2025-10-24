import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './index.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        background: 'var(--color-background)',
        icons: 'var(--color-icons)', 
        border: 'var(--color-border)',
        text: 'var(--color-text)',
        bgForm: 'var(--color-bg-form)',
        buttonPrimary: 'var(--button-primary)',
      },
      fontFamily: {
        primary: ['var(--font-primary)'],
        secondary: ['var(--font-secondary)']
      }
    },
  },
  plugins: [],
}

export default config