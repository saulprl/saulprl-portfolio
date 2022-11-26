import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

import logo from "./logo.svg";
import "./App.css";
import MainDrawer from "./components/layout/MainDrawer";

function App() {
  const theme = createTheme({
    palette: {
      mode: "dark",
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
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainDrawer />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
