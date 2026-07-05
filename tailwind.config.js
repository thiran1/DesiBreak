export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
  extend: {
    colors: {
      brand: {
        primary: "var(--color-primary)",
        secondary: "var(--color-accent)", // Terracotta for highlights
        accent: "var(--color-accent)",   // CTA sections (Terracotta)
        cream: "var(--color-background)",
        terracotta: "var(--color-accent)",
        brown: "var(--color-accent)",
        muted: "rgba(31, 92, 58, 0.6)",
        light: "var(--color-background)",
        border: "rgba(31, 92, 58, 0.12)",
        highlight: "var(--color-highlight)" // Muted Gold
      },
      // Support direct utility names
      "forest-green": "var(--color-primary)",
      cream: "var(--color-background)",
      terracotta: "var(--color-accent)",
      mustard: "var(--color-highlight)"
    },

    borderRadius: {
      xl: "var(--radius)",
      "2xl": "var(--radius)",
      "3xl": "var(--radius)",
      brand: "var(--radius)"
    },

    boxShadow: {
      card: "var(--shadow)",
      hover: "0 6px 16px rgba(31, 92, 58, 0.12)", // Soft hover shadow
      brand: "var(--shadow)"
    },

    fontFamily: {
      heading: ["Playfair Display", "serif"],
      body: ["Inter", "sans-serif"]
    }
  }
},
  plugins: [],
}
