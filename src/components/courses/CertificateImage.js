import { useHistory, useParams } from "react-router-dom";

import {
  Box,
  IconButton,
  Modal,
  Tooltip,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Close } from "@mui/icons-material";

import { courses } from "../../data/data";

const CertificateImage = () => {
  const theme = useTheme();
  const { id } = useParams();
  const history = useHistory();

  const selectedCourse = courses.find((crs) => crs.id === id);
  const imageSource = selectedCourse.certificate;

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const closeModalHandler = (event) => {
    history.push("/courses");
  };

  const keyPressHandler = (event) => {
    if (event.key === "Escape") {
      closeModalHandler(event);
    }
  };

  return (
    <Modal open={true} onClose={closeModalHandler}>
      <div onKeyDown={keyPressHandler}>
        <Tooltip title="Close" placement="bottom">
          <IconButton
            onClick={closeModalHandler}
            sx={{
              position: "fixed",
              zIndex: "999",
              top: "8px",
              right: "8px",
              background: theme.palette.background.default,
            }}
          >
            <Close />
          </IconButton>
        </Tooltip>
        <Box
          sx={{
            display: "flex",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            // height: "95vh",
            // pt: { xs: "50%", sm: "0" },
          }}
        >
          <img
            src={imageSource}
            alt={`${selectedCourse.name} completion certificate`}
            // height={isMobile ? "60%" : "100%"}
            style={{
              margin: "auto",
              transform: isMobile ? "rotate(90deg)" : "none",
              maxHeight: "100vh",
              maxWidth: "100vw",
            }}
          />
        </Box>
      </div>
    </Modal>
  );
};

export default CertificateImage;
