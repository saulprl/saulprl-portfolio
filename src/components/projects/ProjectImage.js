import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import { Box, IconButton, Modal, Tooltip, useTheme } from "@mui/material";
import { ArrowBack, ArrowForward, Close } from "@mui/icons-material";

const ProjectImage = (props) => {
  const { images } = props;

  const theme = useTheme();
  const { id } = useParams();
  const history = useHistory();
  const [index, setIndex] = useState(0);

  // const projects = useSelector(selectProjects);

  // const selectedProject = projects.find((proj) => proj.id === id);
  const imageSource = images[index];

  const closeModalHandler = (event) => {
    history.replace(`/projects/${id}`);
  };

  const previousImageHandler = (event) => {
    if (index === 0) {
      setIndex(images.length - 1);
    } else {
      setIndex((prevIndex) => prevIndex - 1);
    }
  };

  const nextImageHandler = (event) => {
    if (index + 1 === images.length) {
      setIndex(0);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
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
            display: "flex",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            // height: isMobile ? "80vh" : "100vh",
            // width: isMobile ? "auto" : "auto",
            padding: "8px",
          }}
        >
          {/* <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              display: "flex",
              padding: "8px",
            }}
          > */}
          <img
            src={imageSource}
            alt={`Screenshot ${index + 1}`}
            style={{
              margin: "auto",
              maxHeight: "100vh",
              maxWidth: "100vw",
            }}
          />
          {/* </Box> */}
        </Box>
      </div>
    </Modal>
  );
};

export default ProjectImage;
