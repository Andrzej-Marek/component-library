/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#000",
        light: "#FFF",
        white: "#FFF",
        panel: "#F5F5F5",
        gray: {
          200: "#E1E1E1",
          LIGHT: "#B3B3B3",
          DEFAULT: "#828282",
          disabled: "#EBEBE4",
        },
        primary: {
          100: "#DBE7FE",
          DEFAULT: "#0B7DDA",
          700: "#173E8E",
          900: "#0F2655",
        },
        secondary: {
          DEFAULT: "#0CDAAC",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
