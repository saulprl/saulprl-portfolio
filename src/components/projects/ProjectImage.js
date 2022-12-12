import { useState } from "react";

import { Box, IconButton, Modal, Tooltip, useTheme } from "@mui/material";
import { ArrowBack, ArrowForward, Close } from "@mui/icons-material";
import ImageWithFallback from "../layout/ImageWithFallback";

const ProjectImage = (props) => {
  const { open, onClose, images, fallback } = props;

  const theme = useTheme();
  const [index, setIndex] = useState(0);

  const imageSource = images[index];
  const fallbackSource = fallback[index];

  const closeModalHandler = (event) => {
    onClose();
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
    <Modal open={open} onClose={onClose}>
      <div onKeyDown={keyPressHandler}>
        <Tooltip title="Close" placement="bottom">
          <IconButton
            onClick={onClose}
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
            padding: "8px",
          }}
        >
          <ImageWithFallback
            src={imageSource}
            fallback={fallbackSource}
            alt={`Screenshot ${index + 1}`}
            style={{
              margin: "auto",
              maxHeight: "100vh",
              maxWidth: "100vw",
            }}
          />
        </Box>
      </div>
    </Modal>
  );
};

export default ProjectImage;
