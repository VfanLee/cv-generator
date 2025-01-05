/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  safelist: [
    {
      pattern: /.*/, // 匹配所有类名
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
