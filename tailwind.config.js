/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
       gridTemplateColumns: {
                'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
            },
            fontFamily: {
                Outfit: ["Outfit", "sans-serif"],
                // Ovo: ["Ovo", "serif"]
            },
            animation: {
                spin_slow: 'spin 6s linear infinite',
                wave: 'wave 1.8s ease-in-out infinite',
            },
             keyframes: {
              wave: {
                '0%, 100%': { transform: 'rotate(0deg)' },
                '20%': { transform: 'rotate(14deg)' },
                '40%': { transform: 'rotate(-8deg)' },
                '60%': { transform: 'rotate(14deg)' },
                '80%': { transform: 'rotate(-4deg)' },
              },
            },
            colors: {
                lightHover: '#fcf4ff',
                darkHover: '#2a004a',
                darkTheme: '#11001F'
            },
            boxShadow: {
                'black': '4px 4px 0 #000',
                'white': '4px 4px 0 #fff',
            },
    },
  },
//   darkMode: 'selector',
darkMode: ['attribute', 'data-theme'],
  plugins: [],
};
