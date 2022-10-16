/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        'BaiJamjuree': ['Bai Jamjuree', "sans-serif"]
      },
      colors: {
        StrongCyan: "hsl(171, 66%, 44%)",
        LightBlue: "hsl(233, 100%, 69%)",
        DarkGrayishBlue: "hsl(210, 10%, 33%)",
        GrayishBlue: "hsl(201, 11%, 66%)",
      }
    },
  },
  plugins: [],
}
