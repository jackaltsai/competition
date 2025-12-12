/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./app/**/*.{js,vue,ts}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'title': ['"GenYoMin TW"', '"GenSenRounded TW"', '"jf-openhuninn-2.0"', 'cursive', 'sans-serif'],
        'body': ['"Noto Sans TC"', '"Source Han Sans TC"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}