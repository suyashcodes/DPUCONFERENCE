/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html', // Include all HTML files in the root directory
    './path/to/your/components/**/*.html', // Include HTML files in nested directories
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
