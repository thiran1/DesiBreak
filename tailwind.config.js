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
        secondary: "var(--color-accent)",
        accent: "var(--color-accent)",
        cream: "var(--color-background)",
        terracotta: "var(--color-accent)",
        brown: "var(--color-accent)",
        muted: "rgba(31, 92, 58, 0.6)",
        light: "var(--color-background)",
        border: "rgba(31, 92, 58, 0.12)",
        highlight: "var(--color-highlight)",
        badge: "var(--color-badge-border)"
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
      heading: ["Perpetua MT Std", "Perpetua", "Georgia", "serif"],
      logo: ["Perpetua MT Std", "Perpetua", "Georgia", "serif"],
      tagline: ["Candara", "Trebuchet MS", "sans-serif"],
      body: ["Candara", "Trebuchet MS", "sans-serif"]
    }
  }
},
  plugins: [],
}
