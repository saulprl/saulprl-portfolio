import { Close } from "@mui/icons-material";
import { Box, IconButton, Modal, Tooltip } from "@mui/material";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { selectCourses } from "../../store/coursesSlice";

const CertificateImage = () => {
  const { id } = useParams();
  const history = useHistory();

  const courses = useSelector(selectCourses);
  const selectedCourse = courses.find((crs) => crs.id === id);
  const imageSource = selectedCourse.certificate;

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
            sx={{ position: "fixed", zIndex: "999", top: "8px", right: "8px" }}
          >
            <Close />
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
            src={imageSource}
            alt={`${selectedCourse.name} completion certificate`}
            height="100%"
          />
        </Box>
      </div>
    </Modal>
  );
};

export default CertificateImage;
