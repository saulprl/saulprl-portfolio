import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TransitionGroup } from "react-transition-group";

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Collapse,
  List,
  Typography,
  useTheme,
} from "@mui/material";

import TechnologyChip from "../technologies/TechnologyChip";

import { projects as projectsData } from "../../data/data";

const ProjectList = (props) => {
  const theme = useTheme();
  const [projects, setProjects] = useState([...projectsData]);

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

  const projectItemBackground =
    theme.palette.mode === "dark"
      ? "default"
      : theme.palette.background.default;

  const projectList = projects.map((proj) => (
    <Collapse
      key={proj.id}
      timeout={{ enter: 450, exit: 350 }}
      unmountOnExit
      easing="easeInOut"
    >
      <Card
        key={proj.id}
        sx={{
          background: projectItemBackground,
          // maxHeight: "136px",
          borderRadius: "8px",
          border: theme.palette.border.default,
          mb: "8px",
        }}
      >
        <CardActionArea LinkComponent={Link} to={`/projects/${proj.id}`}>
          <CardContent>
            <Box
              component="div"
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography variant="h6" fontWeight="bold">
                  {proj.name}
                </Typography>
                <Typography variant="body2">{`${
                  proj.description.length >= 166
                    ? `${proj.description.substring(0, 166)}...`
                    : proj.description
                }`}</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: { sm: "flex-end" },
                }}
              >
                {proj.language.map((lang, index) => (
                  <TechnologyChip
                    key={index}
                    technology={lang}
                    clickable={false}
                    selected={props.filters.includes(lang)}
                  />
                ))}
                {proj.database.map((database, index) => (
                  <TechnologyChip
                    key={index}
                    technology={database}
                    clickable={false}
                    selected={props.filters.includes(database)}
                  />
                ))}
              </Box>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Collapse>
  ));

  return (
    <List disablePadding>
      <TransitionGroup>{projectList}</TransitionGroup>
    </List>
  );
};

export default ProjectList;
