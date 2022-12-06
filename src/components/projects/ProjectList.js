import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

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

import { selectProjects } from "../../store/projectsSlice";
import { TransitionGroup } from "react-transition-group";

const ProjectList = () => {
  const theme = useTheme();
  const projects = useSelector(selectProjects);

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
                  />
                ))}
                {proj.database.map((database, index) => (
                  <TechnologyChip
                    key={index}
                    technology={database}
                    clickable={false}
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
