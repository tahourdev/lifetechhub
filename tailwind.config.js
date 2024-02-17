/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["var(--font-outfit)"],
        in: ["var(--font-in)"],
      },

      colors: {
        primary: "#f1f1f1",
        secondary: "#92B973",
      },
    },
    screens: {
      xs: "379px",
      sm: "479px",
      md: "639px",
      lg: "767px",
      xl: "867px",
      "2xl": "947px",
      "3xl": "1023px",
      "4xl": "1179px",
      "5xl": "1279px",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
