import { Badge, CheckCircle, Pending } from "@mui/icons-material";
import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Chip,
  Divider,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectCourses } from "../../store/coursesSlice";

const Courses = () => {
  const history = useHistory();

  const courses = useSelector(selectCourses);

  const showCertificateHandler = (courseId) => {
    history.push(`/courses/${courseId}`);
  };

  return (
    <CardContent>
      {courses.map((crs) => (
        <Card key={crs.id} sx={{ borderRadius: "8px", mb: "8px" }}>
          <CardActionArea LinkComponent="a" href={crs.link} target="_blank">
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  mb: "4px",
                }}
              >
                <Typography variant="h6" fontSize="18px">
                  {crs.name}
                </Typography>
                <Chip
                  label={crs.status}
                  icon={
                    crs.status === "Completed" ? <CheckCircle /> : <Pending />
                  }
                  color={crs.status === "Completed" ? "success" : "warning"}
                />
              </Box>
              <Typography
                variant="body1"
                fontSize="14px"
                color="rgba(255, 255, 255, 0.7)"
              >
                {crs.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          {crs.certificate && (
            <>
              <Divider />
              <CardActions sx={{ justifyContent: "flex-end" }}>
                <Tooltip title="Show certificate" placement="left">
                  <IconButton
                    onClick={showCertificateHandler.bind(null, crs.id)}
                  >
                    <Badge />
                  </IconButton>
                </Tooltip>
              </CardActions>
            </>
          )}
        </Card>
      ))}
    </CardContent>
  );
};

export default Courses;
