/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#101010",
        cultured: "#f0f3f6",
        red: "#CA2828",
        darkGray: "#272727",
        grey: "#ccc",
        charcoal: "#000",
        tuftsBlue: "#5390D9",
        madderLake: "#CC2936",
        oxfordBlue: "#0A2239",
        kellyGreen: "#29BF12",
        lightBlue: "#a8dadc",
        cardBg: "#ebf2fd",
        darkBlue: "#2563eb",
        violet: "#4c1d95",
        fuchsia: "#c026d3",
      },
    },
  },
  plugins: [],
};
