import { memo } from "react";
import { Route } from "react-router-dom";

import { Box } from "@mui/material";

import ProjectDetails from "../components/projects/ProjectDetails";
import Projects from "../components/projects/Projects";

import classes from "./Page.module.css";

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
      <Route
        path="/projects/:id"
        render={() => (
          <Box className={classes["page-content"]}>
            <ProjectDetails />
          </Box>
        )}
      />
    </>
  );
};

export default memo(ProjectsPage);
