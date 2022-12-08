import { useState } from "react";
import { CSSTransition } from "react-transition-group";

import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

import ProjectList from "./ProjectList";
import TechnologyChip from "../technologies/TechnologyChip";

import { technologies as techData } from "../../data/data";

import classes from "./Projects.module.css";

const Projects = () => {
  const theme = useTheme();
  const [filters, setFilters] = useState([]);
  const [expanded, setExpanded] = useState(true);
  const technologies = { ...techData };

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleContent = () => {
    setExpanded((prevState) => !prevState);
  };

  const toggleFilter = (tech) => {
    setFilters((prevState) => {
      return filters.includes(tech)
        ? [...prevState.filter((filter) => filter !== tech)]
        : [...prevState, tech];
    });
  };

  const techArray = [];
  for (const key of Object.keys(technologies)) {
    techArray.push(technologies[key]);
  }

  const techChips = techArray.map((tech) => (
    <TechnologyChip
      key={tech.name}
      technology={tech}
      clickable={true}
      selected={filters.includes(tech)}
      onToggle={toggleFilter}
      sx={{ fontSize: "11px" }}
    />
  ));

  return (
    <>
      <CardContent>
        <Card
          sx={{
            borderRadius: "8px",
            border: theme.palette.border.default,
            mb: "8px",
            transition: "border 250ms linear",
          }}
        >
          <CardHeader
            title="Filters"
            titleTypographyProps={{ variant: "h6" }}
            action={
              <IconButton onClick={toggleContent} sx={{ color: "white" }}>
                <ExpandLessIcon
                  sx={{
                    transition: "transform 400ms",
                    transform: `rotate(${expanded ? -180 : 0}deg)`,
                  }}
                />
              </IconButton>
            }
            sx={{ background: theme.palette.secondary.main, color: "white" }}
          />
          <CSSTransition
            in={expanded}
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
            <Box className={classes["filters-content"]}>
              <Divider />
              <CardContent
                sx={{
                  background: theme.palette.background.default,
                  transition: "background-color 250ms linear",
                }}
              >
                {techChips}
              </CardContent>
            </Box>
          </CSSTransition>
        </Card>
        <ProjectList filters={filters} />
      </CardContent>
    </>
  );
};

export default Projects;
