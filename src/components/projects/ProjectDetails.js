import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
  ImageList,
  ImageListItem,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import { ArrowBack, Collections } from "@mui/icons-material";

import { FaGithubSquare } from "react-icons/fa";

import ProjectImage from "./ProjectImage";
import TechnologyChip from "../technologies/TechnologyChip";

import { projects } from "../../data/data";
import ImageWithFallback from "../layout/ImageWithFallback";

const ProjectDetails = () => {
  const theme = useTheme();
  const { name } = useParams();
  const history = useHistory();
  const [openCarousel, setOpenCarousel] = useState(false);

  const selectedProject = projects.find((proj) => proj.name === name);

  const backClickHandler = () => {
    history.push("/projects");
  };

  const repoClickHandler = () => {
    window.open(selectedProject.repo, "_blank", "noopener,noreferrer");
  };

  const openCarouselHandler = () => {
    setOpenCarousel(true);
  };

  const closeCarouselHandler = () => {
    setOpenCarousel(false);
  };

  const cardBackground =
    theme.palette.mode === "dark"
      ? "default"
      : theme.palette.background.default;
  const iconColor = theme.palette.mode === "dark" ? "default" : "#2C2C2C";

  let images = (
    <Typography variant="body1" textAlign="center">
      No images found
    </Typography>
  );
  if (
    selectedProject.images.length > 0 &&
    selectedProject.fallback.length > 0
  ) {
    images = (
      <ImageList
        cols={3}
        rowHeight={81.5}
        sx={{ height: "131px", overflow: "hidden" }}
      >
        <ImageListItem>
          <ImageWithFallback
            src={selectedProject.images[0]}
            fallback={selectedProject.fallback[0]}
            alt={`${selectedProject.name} 1`}
            style={{ width: "100%" }}
          />
        </ImageListItem>
        <ImageListItem>
          <ImageWithFallback
            src={selectedProject.images[1]}
            fallback={selectedProject.fallback[1]}
            alt={`${selectedProject.name} 2`}
            style={{ width: "100%" }}
          />
        </ImageListItem>
        <ImageListItem>
          <ImageWithFallback
            src={selectedProject.images[2]}
            fallback={selectedProject.fallback[2]}
            alt={`${selectedProject.name} 3`}
            style={{ width: "100%" }}
          />
        </ImageListItem>
      </ImageList>
    );
  }

  return (
    <>
      <CardContent>
        <Card
          sx={{
            background: cardBackground,
            borderRadius: "8px",
            border: theme.palette.border.default,
            mb: "8px",
            transition: "background-color 250ms linear, border 250ms linear",
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
              <Tooltip title="Open gallery" placement="left">
                <IconButton
                  onClick={openCarouselHandler}
                  disabled={selectedProject.images.length === 0}
                  sx={{ color: iconColor }}
                >
                  <Collections />
                </IconButton>
              </Tooltip>
            </Box>
            {selectedProject.images.length > 0 ? (
              <CardActionArea
                LinkComponent="button"
                onClick={openCarouselHandler}
              >
                {images}
              </CardActionArea>
            ) : (
              images
            )}
          </CardContent>
        </Card>
      </CardContent>
      <ProjectImage
        open={openCarousel}
        onClose={closeCarouselHandler}
        images={selectedProject.images}
        fallback={selectedProject.fallback}
      />
    </>
  );
};

export default ProjectDetails;
