import { useState } from "react";
import { Link, Route, useHistory, useParams } from "react-router-dom";

import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Collapse,
  Divider,
  IconButton,
  ImageList,
  ImageListItem,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import { ArrowBack, ExpandLess, ExpandMore } from "@mui/icons-material";

import { FaGithubSquare } from "react-icons/fa";

import ProjectImage from "./ProjectImage";
import TechnologyChip from "../technologies/TechnologyChip";

import { projects } from "../../data/data";

const ProjectDetails = (props) => {
  const theme = useTheme();
  const { id } = useParams();
  const history = useHistory();
  const [expanded, setExpanded] = useState(false);

  const selectedProject = projects.find((proj) => proj.id === id);

  const backClickHandler = () => {
    history.push("/projects");
  };

  const repoClickHandler = () => {
    window.open(selectedProject.repo, "_blank", "noopener,noreferrer");
  };

  const toggleGallery = () => {
    setExpanded((prevState) => !prevState);
  };

  const cardBackground =
    theme.palette.mode === "dark"
      ? "default"
      : theme.palette.background.default;
  const iconColor = theme.palette.mode === "dark" ? "default" : "#2C2C2C";

  return (
    <>
      <CardContent>
        <Card
          sx={{
            background: cardBackground,
            borderRadius: "8px",
            border: theme.palette.border.default,
            mb: "8px",
          }}
        >
          <CardHeader
            avatar={
              <Tooltip title="Back" enterDelay={400}>
                <IconButton
                  onClick={backClickHandler}
                  sx={{ color: iconColor }}
                >
                  <ArrowBack />
                </IconButton>
              </Tooltip>
            }
            title={selectedProject.name}
            titleTypographyProps={{ variant: "h6", fontWeight: "bold" }}
          />
          <Divider />
          <CardContent>
            <Typography variant="body1" sx={{ mb: "4px" }}>
              {selectedProject.description}
            </Typography>
            <Divider />
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: "space-between",
                mt: "8px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  justifyContent: "flex-start",
                }}
              >
                {selectedProject.language.map((lang) => (
                  <TechnologyChip
                    key={lang.name}
                    technology={lang}
                    clickable={false}
                  />
                ))}
                {selectedProject.database.map((database) => (
                  <TechnologyChip
                    key={database.name}
                    technology={database}
                    clickable={false}
                  />
                ))}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                }}
              >
                <Tooltip title="GitHub repository" placement="left">
                  <IconButton
                    onClick={repoClickHandler}
                    sx={{ color: iconColor }}
                  >
                    <FaGithubSquare />
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                mb: "4px",
              }}
            >
              <Typography variant="h6">Images</Typography>
              <IconButton onClick={toggleGallery} sx={{ color: iconColor }}>
                {expanded ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
            </Box>
            {selectedProject.images.length > 0 && (
              <Collapse in={expanded} collapsedSize={130}>
                <ImageList cols={3}>
                  {selectedProject.images.map((item, index) => (
                    <Link key={index} to={`/projects/${id}/images`}>
                      <ImageListItem>
                        <img
                          src={item}
                          alt={`Screenshot ${index + 1}`}
                          loading="lazy"
                        />
                      </ImageListItem>
                    </Link>
                  ))}
                </ImageList>
              </Collapse>
            )}
            {selectedProject.images.length === 0 && (
              <Typography variant="body1" textAlign="center">
                No images found.
              </Typography>
            )}
          </CardContent>
        </Card>
      </CardContent>
      <Route
        path="/projects/:id/images"
        exact
        render={() => <ProjectImage images={selectedProject.images} />}
      />
    </>
  );
};

export default ProjectDetails;
