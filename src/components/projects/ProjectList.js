import { useSelector } from "react-redux";

import { Box, Card, List, ListItem, ListItemText } from "@mui/material";
import { selectProjects } from "../../store/projectsSlice";
import TechnologyChip from "../technologies/TechnologyChip";

const ProjectList = (props) => {
  const projects = useSelector(selectProjects);

  return (
    <List disablePadding>
      {projects.map((proj) => (
        <Card
          key={proj.id}
          sx={{
            borderRadius: "8px",
            mb: "8px",
            // display: "flex",
            // flexDirection: "row",
          }}
        >
          <ListItem>
            <ListItemText primary={proj.name} secondary={proj.description} />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
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
        </Card>
      ))}
    </List>
  );
};

export default ProjectList;
