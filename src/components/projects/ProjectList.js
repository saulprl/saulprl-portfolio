import { lazy, Suspense, useMemo, useRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { List, Skeleton, useMediaQuery, useTheme } from "@mui/material";

import { projects as projectsData } from "../../data/data";

import classes from "./Projects.module.css";

const ProjectItem = lazy(() => import("./ProjectItem"));

const ProjectList = (props) => {
  const theme = useTheme();
  const projects = useProjectsData(props.filters);

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const projectList = useMemo(
    () =>
      projects.map((proj) => (
        <Suspense
          key={proj.id}
          fallback={
            <Skeleton
              variant="rounded"
              animation="wave"
              height={75}
              // width={}
              sx={{ mx: "auto", mb: "8px" }}
            />
          }
        >
          <ProjectItem project={proj} filters={props.filters} />
        </Suspense>
      )),
    [projects, props.filters]
  );

  return (
    <List disablePadding>
      <TransitionGroup>
        <CSSTransition
          timeout={isMobile ? 450 : 300}
          mountOnEnter={true}
          unmountOnExit={true}
          classNames={{
            enter: classes["fade-enter"],
            enterActive: classes["fade-enter-active"],
            exit: classes["fade-exit"],
            exitActive: classes["fade-exit-active"],
          }}
        >
          <>{projectList}</>
        </CSSTransition>
      </TransitionGroup>
    </List>
  );
};

const useProjectsData = (filters) => {
  const projects = useRef(projectsData);

  const filteredProjects = useMemo(
    () =>
      projects.current.filter((proj) =>
        filters.every(
          (filter) =>
            proj.database.includes(filter) || proj.language.includes(filter)
        )
      ),
    [filters]
  );

  return filteredProjects;
};

export default ProjectList;
