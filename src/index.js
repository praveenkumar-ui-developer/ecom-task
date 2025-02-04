import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalProvider, GlobalContext } from "./context/GlobalContext";
import "./styles/global.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const Root = () => {
  const { darkMode } = useContext(GlobalContext);
  // Create MUI theme based on darkMode
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });
  
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GlobalProvider>
    <Root />
  </GlobalProvider>
);
