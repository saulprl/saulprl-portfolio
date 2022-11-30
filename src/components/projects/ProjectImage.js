import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { Box, IconButton, Modal, Tooltip, useTheme } from "@mui/material";
import { ArrowBack, ArrowForward, Close } from "@mui/icons-material";

import { selectProjects } from "../../store/projectsSlice";

const ProjectImage = () => {
  const theme = useTheme();
  const { id, imgIndex } = useParams();
  const history = useHistory();

  const projects = useSelector(selectProjects);

  const selectedProject = projects.find((proj) => proj.id === id);
  const imageSource = selectedProject.images[imgIndex];

  const closeModalHandler = (event) => {
    history.push(`/projects/${id}`);
  };

  const previousImageHandler = (event) => {
    if (+imgIndex === 0) {
      history.push(`/projects/${id}/${selectedProject.images.length - 1}`);
    } else {
      history.push(`/projects/${id}/${+imgIndex - 1}`);
    }
  };

  const nextImageHandler = (event) => {
    if (selectedProject.images[+imgIndex + 1]) {
      history.push(`/projects/${id}/${+imgIndex + 1}`);
    } else {
      history.push(`/projects/${id}/0`);
    }
  };

  const keyPressHandler = (event) => {
    if (event.key === "Escape") {
      closeModalHandler(event);
    }
    if (event.key === "ArrowLeft") {
      previousImageHandler(event);
    }
    if (event.key === "ArrowRight") {
      nextImageHandler(event);
    }
  };

  const iconColor = theme.palette.mode === "dark" ? "default" : "white";

  return (
    <Modal open={true} onClose={closeModalHandler}>
      <div onKeyDown={keyPressHandler}>
        <Tooltip title="Close" placement="bottom">
          <IconButton
            onClick={closeModalHandler}
            sx={{
              color: iconColor,
              position: "fixed",
              zIndex: "999",
              top: "8px",
              right: "8px",
            }}
          >
            <Close />
          </IconButton>
        </Tooltip>
        <Tooltip title="Previous" placement="right">
          <IconButton
            onClick={previousImageHandler}
            sx={{
              color: iconColor,
              position: "fixed",
              zIndex: "999",
              top: "50%",
              left: "0",
              transform: "translateY(-50%)",
            }}
          >
            <ArrowBack />
          </IconButton>
        </Tooltip>
        <Tooltip title="Next" placement="left">
          <IconButton
            onClick={nextImageHandler}
            sx={{
              color: iconColor,
              position: "fixed",
              zIndex: "999",
              top: "50%",
              right: "0",
              transform: "translateY(-50%)",
            }}
          >
            <ArrowForward />
          </IconButton>
        </Tooltip>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            height: "95vh",
          }}
        >
          <img
            height="100%"
            src={imageSource}
            alt={`Screenshot ${imgIndex + 1}`}
          />
        </Box>
      </div>
    </Modal>
  );
};

export default ProjectImage;
