/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF", // Swedish blue
        secondary: "#FBBF24", // Gold/yellow for contrast
        accent: "#EAB308",
        "sek-blue": "#006AA7", // Swedish flag blue
        "sek-yellow": "#FECC00", // Swedish flag yellow
      },
    },
  },
  plugins: [],
};
