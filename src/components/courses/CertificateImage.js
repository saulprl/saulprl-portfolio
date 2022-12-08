import {
  Box,
  IconButton,
  Modal,
  Tooltip,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Close } from "@mui/icons-material";

const CertificateImage = (props) => {
  const { open, onClose, image } = props;
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const closeModalHandler = (event) => {
    onClose();
  };

  const keyPressHandler = (event) => {
    if (event.key === "Escape") {
      closeModalHandler(event);
    }
  };

  return (
    <Modal open={open} onClose={closeModalHandler}>
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
          }}
        >
          <img
            src={image}
            alt={"Completion certificate"}
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
