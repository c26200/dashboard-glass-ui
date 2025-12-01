/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        glass: {
          100: 'rgba(255, 255, 255, 0.1)', // Vidrio muy transparente
          200: 'rgba(255, 255, 255, 0.2)', // Vidrio medio
          300: 'rgba(255, 255, 255, 0.3)', // Borde brillante
        },
        dark: {
          bg: '#0f172a', // Azul noche profundo (Slate 900)
          card: '#1e293b', // Un poco más claro
        }
      },
    },
  },
  plugins: [],
}