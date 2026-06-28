export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'forest-green': '#12372A',
        'cream': '#F8F4EC',
        'terracotta': '#A44A3F',
        'mustard': '#C79A3B',
        'muted-brown': '#6D4C41',
      },
      fontFamily: {
        'serif': ['Georgia', 'serif'],
        'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
