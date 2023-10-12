const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js,njk}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        "sm-down": { max: "639px" },
        md: "768px",
        "md-down": { max: "767px" },
        lg: "1024px",
        "lg-down": { max: "1023px" },
        xl: "1280px",
        "xl-down": { max: "1279px" },
        "2xl": "1920px",
        "2xl-down": { max: "1919px" },
      },
      colors: {
        body: "#222",
        snow: "#fff",
        accent: "#268646",
      },
      fontFamily: {
        poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
        roboto: ["Roboto", ...defaultTheme.fontFamily.sans],
        daxline: ["Daxlinecyrtf", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
