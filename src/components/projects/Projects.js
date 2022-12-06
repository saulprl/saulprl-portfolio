import { useEffect, useState } from "react";

import {
  Card,
  CardContent,
  CardHeader,
  Collapse,
  Divider,
  IconButton,
  useTheme,
} from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import ProjectList from "./ProjectList";
import TechnologyChip from "../technologies/TechnologyChip";

import { technologies as techData } from "../../data/data";

const Projects = () => {
  const theme = useTheme();
  const [filters, setFilters] = useState([]);
  const [expanded, setExpanded] = useState(true);
  const technologies = { ...techData };

  useEffect(() => {
    const timer = setTimeout(() => setExpanded(false), 1100);

    return () => clearTimeout(timer);
  }, [setExpanded]);

  const toggleContent = () => {
    setExpanded((prevState) => !prevState);
  };

  const toggleFilter = (tech) => {
    setFilters((prevState) => {
      return filters.includes(tech)
        ? [...prevState.filter((filter) => filter !== tech)]
        : [...prevState, tech];
    });

    console.log("Filters: ", filters);
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
          }}
        >
          <CardHeader
            title="Filters"
            titleTypographyProps={{ variant: "h6" }}
            action={
              <IconButton onClick={toggleContent} sx={{ color: "white" }}>
                {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </IconButton>
            }
            sx={{ background: theme.palette.secondary.main, color: "white" }}
          />
          <Collapse in={expanded} unmountOnExit easing="easeInOut">
            <Divider />
            <CardContent sx={{ background: theme.palette.background.default }}>
              {techChips}
            </CardContent>
          </Collapse>
        </Card>
        {/* <Card sx={{ borderRadius: "8px" }}> */}
        {/* <CardContent> */}
        <ProjectList filters={filters} />
        {/* </CardContent> */}
        {/* </Card> */}
      </CardContent>
    </>
  );
};

export default Projects;
