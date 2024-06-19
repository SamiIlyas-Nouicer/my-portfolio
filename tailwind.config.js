// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cinder: {
          50: "#f1f4fe",
          100: "#e1e8fd",
          200: "#bdcffa",
          300: "#82a6f7",
          400: "#407af0",
          500: "#1759e0",
          600: "#0a40bf",
          700: "#09329b",
          800: "#0c2e80",
          900: "#10286a",
          950: "#030714",
        },
      },
    },
  },
  plugins: [],
}
