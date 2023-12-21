/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  purge: ["./src/components/**/*.{ts,tsx}"],
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
          // DEFAULT: "#5DB84B",
        },
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
