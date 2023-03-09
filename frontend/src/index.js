import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// import { ThemeProvider } from "emotion-theming";
import theme from "@rebass/preset";
import { useTheme, ThemeProvider, withTheme } from "@emotion/react";
import { App } from "./components";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
