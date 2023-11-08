const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            background: "#000000", // or DEFAULT
            foreground: "#ECEDEE", // or 50 to 900 DEFAULT
            primary: {
              //... 50 to 900
              100: "#CFDCFB",
              200: "#A2B8F7",
              300: "#708EE9",
              400: "#4A69D3",
              500: "#1939B7",
              600: "#122B9D",
              700: "#0C1F83",
              800: "#07156A",
              900: "#040E57",
              foreground: "#FFFFFF",
              DEFAULT: "#4A69D3",
            },
            warning :{
              100: "#FBF1CB",
              200: "#F8E098",
              300: "#EAC363",
              400: "#D6A43B",
              500: "#BC7A07",
              600: "#A16205",
              700: "#874D03",
              800: "#6D3A02",
              900: "#5A2C01",
              foreground: "#FFFFFF",
              DEFAULT: "#BC7A07",
            },
          },
        },
      },
    }),
  ],
};


