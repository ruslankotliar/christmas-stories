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
        red: '#FF5757',
        green: '#3DB490',
        blue: '#22d3ee',
        silver: '#C0C0C0',
        white: '#FFFFFF',
        text: '#E5E5E5'
      },
      backgroundColor: {
        primary: 'white', // Background color for main content (Red)
        secondary: '#3DB490', // Background color for secondary elements (Green)
        accent: '#22d3ee', // Accent color for special elements (Gold)
        header: '#22d3ee8d'
      },
      fontSize: {
        sm: '0.875rem',
        base: '1rem',
        lg: '1.25rem',
        xl: '1.5rem',
        '2xl': '2rem'
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
