import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import {
  Card,
  CardContent,
  CardHeader,
  Collapse,
  Divider,
  IconButton,
} from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { selectTechnologies } from "../../store/projectsSlice";

import ProjectList from "./ProjectList";
import TechnologyChip from "../technologies/TechnologyChip";

const Projects = () => {
  const [expanded, setExpanded] = useState(true);
  const technologies = useSelector(selectTechnologies);

  useEffect(() => {
    const timer = setTimeout(() => setExpanded(false), 1100);

    return () => clearTimeout(timer);
  }, [setExpanded]);

  const toggleContent = () => {
    setExpanded((prevState) => !prevState);
  };

  const techArray = [];
  for (const key of Object.keys(technologies)) {
    techArray.push(technologies[key]);
  }

  return (
    <>
      <CardContent>
        <Card sx={{ borderRadius: "8px", mb: "8px" }}>
          <CardHeader
            title="Filters"
            titleTypographyProps={{ variant: "h6" }}
            action={
              <IconButton onClick={toggleContent}>
                {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </IconButton>
            }
          />
          <Collapse in={expanded}>
            <Divider />
            <CardContent>
              {techArray.map((tech) => (
                <TechnologyChip
                  key={tech.name}
                  technology={tech}
                  clickable={true}
                  sx={{ fontSize: "11px" }}
                />
              ))}
            </CardContent>
          </Collapse>
        </Card>
        {/* <Card sx={{ borderRadius: "8px" }}> */}
        {/* <CardContent> */}
        <ProjectList />
        {/* </CardContent> */}
        {/* </Card> */}
      </CardContent>
    </>
  );
};

export default Projects;
