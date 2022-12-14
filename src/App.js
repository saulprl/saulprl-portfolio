import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import {
  createTheme,
  CssBaseline,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";

import MainAppBar from "./components/layout/MainAppBar";
import MainContent from "./components/layout/MainContent";
import MainDrawer from "./components/layout/MainDrawer";

import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import CoursesPage from "./pages/CoursesPage";

import classes from "./App.module.css";

function App() {
  const { location, headerTitle, contentRef } = usePathname();
  const [themeMode, setThemeMode] = useState("dark");

  const theme = useMemo(
    () =>
      createTheme({
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
      }),
    [themeMode]
  );

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleThemeHandler = useCallback(() => {
    setThemeMode((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  }, [setThemeMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      {isMobile ? (
        <MainAppBar onToggleTheme={toggleThemeHandler} />
      ) : (
        <MainDrawer onClose={null} onToggleTheme={toggleThemeHandler} />
      )}
      <MainContent ref={contentRef} title={headerTitle}>
        <TransitionGroup>
          <CSSTransition
            key={location.pathname}
            timeout={250}
            classNames={{
              enter: classes["fade-enter"],
              enterActive: classes["fade-enter-active"],
              exit: classes["fade-exit"],
              exitActive: classes["fade-exit-active"],
            }}
          >
            <Switch location={location}>
              <Route path="/" exact render={() => <Redirect to="/home" />} />
              <Route path="/home" exact render={() => <HomePage />} />
              <Route path="/projects" render={() => <ProjectsPage />} />
              <Route path="/courses" render={() => <CoursesPage />} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </MainContent>
    </ThemeProvider>
  );
}

const usePathname = () => {
  const contentRef = useRef();
  const location = useLocation();
  const [headerTitle, setHeaderTitle] = useState("Home");

  useEffect(() => {
    if (location.pathname.startsWith("/home")) {
      setHeaderTitle("Home");
    } else if (location.pathname.startsWith("/projects")) {
      setHeaderTitle("Projects");
    } else if (location.pathname.startsWith("/courses")) {
      setHeaderTitle("Courses");
    }
    contentRef.current.scrollTop = 0;
  }, [setHeaderTitle, location.pathname]);

  return { location, headerTitle, contentRef };
};

export default App;
