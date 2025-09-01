/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        PaletteGreen: "#A8BBA3",
        PaletteWhite: "#F7F4EA",
        PalettePink: "#EBD9D1",
        PaletteBrown: "#B87C4C",
      },
      screens: {
        "max-sm": { max: "375px" },
      },
    },
  },
  plugins: [],
}

