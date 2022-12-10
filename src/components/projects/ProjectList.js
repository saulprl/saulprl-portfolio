import { lazy, Suspense, useEffect, useMemo, useState } from "react";
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
        <CSSTransition
          key={proj.id}
          timeout={isMobile ? 450 : 300}
          mountOnEnter={false}
          unmountOnExit={true}
          classNames={{
            enter: classes["fade-enter"],
            enterActive: classes["fade-enter-active"],
            exit: classes["fade-exit"],
            exitActive: classes["fade-exit-active"],
          }}
        >
          <Suspense
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
        </CSSTransition>
      )),
    [projects, props.filters, isMobile]
  );

  return (
    <List disablePadding>
      <TransitionGroup>{projectList}</TransitionGroup>
    </List>
  );
};

const useProjectsData = (filters) => {
  const [projects, setProjects] = useState(projectsData);

  const filterProjects = (filt) => {
    setProjects(
      projectsData.filter((project) =>
        filt.every(
          (filter) =>
            project.database.includes(filter) ||
            project.language.includes(filter)
        )
      )
    );
  };

  useEffect(() => {
    if (filters.length === 0) {
      setProjects(projectsData);
    } else {
      filterProjects(filters);
    }
  }, [filters]);

  return projects;
};

export default ProjectList;
