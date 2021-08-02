module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "gray-text": "#566573",
        "main-bg": "#F2F4F3",
        brown: "#C78F6D",
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ["hover", "focus"],
    },
  },
  plugins: [],
};
