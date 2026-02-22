/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#1e3a8a',
          DEFAULT: '#2563eb',
          light: '#3b82f6',
        },
        secondary: {
          dark: '#92400e',
          DEFAULT: '#f59e0b',
          light: '#fbbf24',
        },
        neutral: {
          darkest: '#1f2937',
          dark: '#374151',
          DEFAULT: '#6b7280',
          light: '#d1d5db',
          lightest: '#f9fafb',
        },
        success: '#10b981',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
