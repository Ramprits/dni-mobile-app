import { extendTheme } from "native-base";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
const theme = extendTheme({
  colors: {
    primary: {
      50: "#e1fafb",
      100: "#c2ecea",
      200: "#9fded9",
      300: "#7bd0c6",
      400: "#59c3b2",
      500: "#3fa996",
      600: "#2f8472",
      700: "#1e5e55",
      800: "#0c3937",
      900: "#001513",
    },
    secondary: {
      50: "#ddfffd",
      100: "#b5f9f3",
      200: "#8af3e7",
      300: "#5deed7",
      400: "#35e9c6",
      500: "#1ed0a7",
      600: "#11a27d",
      700: "#057360",
      800: "#00463f",
      900: "#001916",
    },
  },
  fontConfig: {
    Montserrat: {
      400: {
        normal: "Montserrat_400Regular",
      },
      500: {
        normal: "Montserrat_500Medium",
      },
      600: {
        normal: "Montserrat_600SemiBold",
      },
      700: {
        normal: "Montserrat_700Bold",
      },
    },
  },
  fonts: {
    heading: "Montserrat",
    body: "Montserrat",
    mono: "Montserrat",
  },

  config,
});
export default theme;
