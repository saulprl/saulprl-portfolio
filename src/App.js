import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";

import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

import { selectThemeMode } from "./store/uiSlice";
import MainDrawer from "./components/layout/MainDrawer";

import "./App.css";
import MainContent from "./components/layout/MainContent";
import HomePage from "./pages/HomePage";

function App() {
  const themeMode = useSelector(selectThemeMode);

  const theme = createTheme({
    palette: {
      mode: themeMode,
      primary: {
        light: "#EE588A",
        main: "#E91E63",
        dark: "#BA124A",
      },
      secondary: {
        light: "#7DA1A0",
        main: "#5A7D7C",
        dark: "#455F5E",
      },
      success: {
        light: "#93DD2C",
        main: "#72B01D",
        dark: "#507B14",
      },
      warning: {
        light: "#FFD685",
        main: "#FFC145",
        dark: "#FFAD0A",
      },
      error: {
        light: "#FE8534",
        main: "#F46201",
        dark: "#CB5201",
      },
      background: {
        default: themeMode === "dark" ? "#282c34" : "#DEE4E7",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainDrawer />
      <MainContent>
        <Switch>
          <Route path="*">
            <HomePage />
          </Route>
        </Switch>
      </MainContent>
    </ThemeProvider>
  );
}

export default App;
