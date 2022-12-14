/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            spacing: {
                '5.5/12': '48%',
                '1.5/4': '32%',
            },
            minWidth: {
                375: '375px',
            },
            transitionProperty: {
                'top-opacity': 'top, opacity',
                top: 'top',
            },
        },
        screens: {
            xs: '0px',
            ...defaultTheme.screens,
            // 'sm': '640px',
            // => @media (min-width: 640px) { ... }
            // 'md': '768px',
            // => @media (min-width: 768px) { ... }
            // 'lg': '1024px',
            // => @media (min-width: 1024px) { ... }
            // 'xl': '1280px',
            // => @media (min-width: 1280px) { ... }
            // '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
        },
        minHeight: {
            mch: 'calc(100vh - 72px)',
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
