import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  List,
  Typography,
  useTheme,
} from "@mui/material";

import TechnologyChip from "../technologies/TechnologyChip";

import { selectProjects } from "../../store/projectsSlice";

const ProjectList = (props) => {
  const theme = useTheme();
  const projects = useSelector(selectProjects);

  const projectItemBackground =
    theme.palette.mode === "dark"
      ? "default"
      : theme.palette.background.default;

  return (
    <List disablePadding>
      {projects.map((proj) => (
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
            {/* <ListItem sx={{ alignItems: "flex-start" }}> */}
            {/* <ListItemText
              primary={proj.name}
              secondary={`${
                proj.description.length >= 166
                  ? `${proj.description.substring(0, 166)}...`
                  : proj.description
              }`}
              primaryTypographyProps={{ fontWeight: "bold" }}
            /> */}
            <CardContent>
              <Box
                component="div"
                sx={{
                  display: "flex",
                  flexDirection: "row",
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
              </Box>
            </CardContent>
            {/* </ListItem> */}
          </CardActionArea>
        </Card>
      ))}
    </List>
  );
};

export default ProjectList;
