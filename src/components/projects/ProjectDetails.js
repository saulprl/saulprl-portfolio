import { useState } from "react";
import { useSelector } from "react-redux";
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
} from "@mui/material";
import { ArrowBack, ExpandLess, ExpandMore } from "@mui/icons-material";

import { FaGithubSquare } from "react-icons/fa";

import { selectProjects } from "../../store/projectsSlice";
import TechnologyChip from "../technologies/TechnologyChip";
import ProjectImage from "./ProjectImage";

const ProjectDetails = (props) => {
  const { id } = useParams();
  const history = useHistory();
  const projects = useSelector(selectProjects);
  const [expanded, setExpanded] = useState(false);

  const selectedProject = projects.find((proj) => proj.id === id);

  const backClickHandler = () => {
    history.goBack();
  };

  const repoClickHandler = () => {
    window.open(selectedProject.repo, "_blank", "noopener,noreferrer");
  };

  const toggleGallery = () => {
    setExpanded((prevState) => !prevState);
  };

  return (
    <>
      <CardContent>
        <Card sx={{ borderRadius: "8px", mb: "8px" }}>
          <CardHeader
            avatar={
              <Tooltip title="Back" enterDelay={400}>
                <IconButton onClick={backClickHandler}>
                  <ArrowBack />
                </IconButton>
              </Tooltip>
            }
            title={selectedProject.name}
            titleTypographyProps={{ variant: "h6" }}
            // action={
            //   <Tooltip title="GitHub repository" placement="left">
            //     <IconButton
            //       color="secondary"
            //       onClick={repoClickHandler}
            //       sx={{ mt: "4px" }}
            //     >
            //       <FaGithubSquare />
            //     </IconButton>
            //   </Tooltip>
            // }
          />
          {/* <CardMedia
            component="img"
            height={300}
            image={selectedProject.images[0]}
          /> */}
          <Divider />
          <CardContent>
            {/* <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            > */}
            <Typography variant="body1" sx={{ mb: "4px" }}>
              {selectedProject.description}
            </Typography>
            <Divider />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                mt: "8px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
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
                <Tooltip title="GitHub repository" placement="bottom">
                  <IconButton onClick={repoClickHandler}>
                    <FaGithubSquare />
                  </IconButton>
                </Tooltip>
                {/* <Tooltip title="Gallery">
                  <IconButton>
                    <Collections />
                  </IconButton>
                </Tooltip> */}
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
              <IconButton onClick={toggleGallery}>
                {expanded ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
            </Box>
            {selectedProject.images.length > 0 && (
              <Collapse in={expanded} collapsedSize={130}>
                <ImageList cols={3}>
                  {selectedProject.images.map((item, index) => (
                    <Link key={index} to={`/projects/${id}/${index}`}>
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
            {/* </Box> */}
          </CardContent>
        </Card>
      </CardContent>
      <Route
        path="/projects/:id/:imgIndex"
        exact
        render={() => <ProjectImage />}
      />
    </>
  );
};

export default ProjectDetails;
