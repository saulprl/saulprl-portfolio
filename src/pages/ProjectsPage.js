import { lazy, memo, Suspense } from "react";
import { Route } from "react-router-dom";

import { Box, Skeleton } from "@mui/material";

import Projects from "../components/projects/Projects";

import classes from "./Page.module.css";

const ProjectDetails = lazy(() =>
  import("../components/projects/ProjectDetails")
);

const ProjectsPage = () => {
  return (
    <>
      <Route
        path="/projects"
        exact
        render={() => (
          <Box className={classes["page-content"]}>
            <Projects />
          </Box>
        )}
      />
      <Suspense
        fallback={
          <Skeleton variant="rounded" animation="wave" sx={{ height: "75%" }} />
        }
      >
        <Route
          path="/projects/:id"
          render={() => (
            <Box className={classes["page-content"]}>
              <ProjectDetails />
            </Box>
          )}
        />
      </Suspense>
    </>
  );
};

export default memo(ProjectsPage);
