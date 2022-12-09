import { useEffect, useMemo, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { List, useMediaQuery, useTheme } from "@mui/material";

import ProjectItem from "./ProjectItem";

import { projects as projectsData } from "../../data/data";

import classes from "./Projects.module.css";

const ProjectList = (props) => {
  const theme = useTheme();
  const [projects, setProjects] = useState([...projectsData]);

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    setProjects([...projectsData]);

    setProjects((prevState) => {
      return prevState.filter((project) => {
        return props.filters.every((filter) => {
          for (const lang of project.language) {
            if (lang.name === filter.name) {
              return true;
            }
          }
          for (const database of project.database) {
            if (database.name === filter.name) {
              return true;
            }
          }
          return false;
        });
      });
    });
  }, [props.filters]);

  const projectList = useMemo(
    () =>
      projects.map((proj) => (
        <CSSTransition
          key={proj.id}
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
          <ProjectItem project={proj} filters={props.filters} />
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

export default ProjectList;
