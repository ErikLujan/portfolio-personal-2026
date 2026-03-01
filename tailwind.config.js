/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
            },
        },
        keyframes: {
            'fade-in-down': {
                '0%': { opacity: '0', transform: 'translateY(-10px)' },
                '100%': { opacity: '1', transform: 'translateY(0)' },
            },
            'fade-in-up': {
                '0%': { opacity: '0', transform: 'translateY(30px)' },
                '100%': { opacity: '1', transform: 'translateY(0)' },
            },
            'slide-in-left': {
                '0%': { opacity: '0', transform: 'translateX(-30px)' },
                '100%': { opacity: '1', transform: 'translateX(0)' },
            },
            scroll: {
                '0%': { transform: 'translateX(0)' },
                '100%': { transform: 'translateX(-50%)' },
            },
        },
        animation: {
            scroll: 'scroll 20s linear infinite',
            'fade-in-down': 'fade-in-down 0.3s ease-out',
            'fade-in-up': 'fade-in-up 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
            'slide-in-left': 'slide-in-left 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        },
    },
    plugins: [],
}