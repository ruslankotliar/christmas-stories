import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        red: '#CA2725',
        green: '#6a994e',
        darkGreen: '#386641',
        lightGreen: '#DFEADA',
        beige: '#BBA791'
      },
      backgroundColor: {
        red: '#CA2725',
        green: '#6a994e',
        beige: '#BBA791',
        darkGreen: '#386641'
      },
      fontSize: {
        sm: '0.875rem',
        base: '1rem',
        lg: '1.25rem',
        xl: '1.5rem',
        '2xl': '2rem',
        '3xl': '2.75rem'
      },
      spacing: {
        xl: '1.75rem'
      },
      borderRadius: {
        xl: '1rem'
      },
      boxShadow: {
        christmas: '0 4px 6px -1px rgba(255, 87, 87, 0.1), 0 2px 4px -1px rgba(255, 87, 87, 0.06)'
      },
      darkMode: 'class'
    }
  },

  plugins: []
};
export default config;
