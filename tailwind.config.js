export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
  extend: {
    colors: {
      brand: {
        primary: "#12372A",
        secondary: "#C79A3B",
        cream: "#F8F4EC",
        terracotta: "#A44A3F",
        brown: "#6D4C41",
        muted: "#6B7280",
        light: "#FAF8F3",
        border: "#E7E0D5"
      }
    },

    borderRadius: {
      xl: "1rem",
      "2xl": "1.5rem",
      "3xl": "2rem"
    },

    boxShadow: {
      card: "0 8px 30px rgba(0,0,0,0.08)",
      hover: "0 20px 45px rgba(0,0,0,0.12)"
    },

    fontFamily: {
      heading: ["Playfair Display", "serif"],
      body: ["Inter", "sans-serif"]
    }
  }
},
  plugins: [],
}
