import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";

import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

import { selectThemeMode, setHeaderTitle } from "./store/uiSlice";
import MainDrawer from "./components/layout/MainDrawer";

import MainContent from "./components/layout/MainContent";

import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import CoursesPage from "./pages/CoursesPage";

function App() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
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
      border: {
        default:
          themeMode === "dark" ? "1px solid #282c34" : "1px solid #c3c8cb",
      },
    },
  });

  useEffect(() => {
    if (pathname.includes("home")) {
      dispatch(setHeaderTitle({ title: "Home" }));
    }
    if (pathname.includes("projects")) {
      dispatch(setHeaderTitle({ title: "Projects" }));
    }
    if (pathname.includes("courses")) {
      dispatch(setHeaderTitle({ title: "Courses" }));
    }
  }, [dispatch, pathname]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainDrawer />
      <MainContent>
        <Switch>
          <Route path="/" exact render={() => <Redirect to="/home" />} />
          <Route path="/home" exact render={() => <HomePage />} />
          <Route path="/projects" render={() => <ProjectsPage />} />
          <Route path="/courses" render={() => <CoursesPage />} />
        </Switch>
      </MainContent>
    </ThemeProvider>
  );
}

export default App;
