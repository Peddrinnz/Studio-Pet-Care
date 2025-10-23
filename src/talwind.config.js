module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
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
    },
  },
  plugins: [],
}