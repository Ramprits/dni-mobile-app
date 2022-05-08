import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import Main from "./src/main";
import colors from "./src/constants/colors";
import fonts from "./src/constants/fonts";
import sizes from "./src/constants/sizes";
import { store } from "./src/redux/store";

const theme = {
  colors,
  fonts,
  sizes,
};

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Main />
      </ThemeProvider>
    </Provider>
  );
}
