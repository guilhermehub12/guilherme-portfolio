module.exports = {
  content: ["./index.html", "./src/**/*.{jsx, js}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ["inter", "serif"],
        primary: "Orbitron",
        secondary: "Rajdhani",
        tertiary: "Aldrich",
      },
      container: {
        padding: {
          DEFAULT: "15px",
        },
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "960px",
        xl: "1200px",
      },
      extend: {
        colors: {
          primary: "#0a0a0a",
          accent: "#B809C3",
        },
        // backgroundImage: {
        //   site: "url('./assets/site-bg.jpg')",
        //   about: "url('./assets/about.png')",
        //   services: "url('./assets/services.png')",
        // },
      },
    },
  },
  plugins: [],
};
