import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  Box,
  Card,
  CardActionArea,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

import TechnologyChip from "../technologies/TechnologyChip";

import { selectProjects } from "../../store/projectsSlice";

const ProjectList = (props) => {
  const projects = useSelector(selectProjects);

  return (
    <List disablePadding>
      {projects.map((proj) => (
        <Card
          key={proj.id}
          sx={{
            maxHeight: "136px",
            borderRadius: "8px",
            mb: "8px",
          }}
        >
          <CardActionArea LinkComponent={Link} to={`/projects/${proj.id}`}>
            <ListItem sx={{ alignItems: "flex-start" }}>
              <ListItemText
                primary={proj.name}
                secondary={`${
                  proj.description.length >= 166
                    ? `${proj.description.substring(0, 166)}...`
                    : proj.description
                }`}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                }}
              >
                {proj.language.map((lang, index) => (
                  <TechnologyChip
                    key={index}
                    technology={lang}
                    clickable={false}
                    sx={{ alignSelf: "flex-end" }}
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
            </ListItem>
          </CardActionArea>
        </Card>
      ))}
    </List>
  );
};

export default ProjectList;
