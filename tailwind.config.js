/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#06120D',
          900: '#0A1C14',
          800: '#0F2A1C',
          700: '#15392A',
        },
        accent: {
          DEFAULT: '#2ECC71',
          soft: '#34D399',
          dim: '#1E8A56',
        },
      },
      fontFamily: {
        display: ['"Sora"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-glow':
          'radial-gradient(circle at 20% 0%, rgba(46,204,113,0.12), transparent 45%), radial-gradient(circle at 80% 10%, rgba(52,211,153,0.08), transparent 40%)',
      },
    },
  },
  plugins: [],
}
