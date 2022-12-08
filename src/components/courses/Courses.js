import { useHistory } from "react-router-dom";

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
  useTheme,
} from "@mui/material";

import { courses as coursesData } from "../../data/data";

const Courses = () => {
  const theme = useTheme();
  const history = useHistory();
  const courses = [...coursesData];

  const iconColor = theme.palette.mode === "dark" ? "#FFFFFF" : "#2C2C2C";

  const showCertificateHandler = (courseId) => {
    history.push(`/courses/${courseId}`);
  };

  const cardBackground =
    theme.palette.mode === "dark"
      ? "default"
      : theme.palette.background.default;

  const coursesList = courses.map((crs) => (
    <Card
      key={crs.id}
      sx={{
        background: cardBackground,
        borderRadius: "8px",
        border: theme.palette.border.default,
        mb: "8px",
      }}
    >
      <CardActionArea LinkComponent="a" href={crs.link} target="_blank">
        <CardContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-between",
              mb: "4px",
            }}
          >
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ mr: "6px", mb: { xs: "6px", sm: 0 } }}
            >
              {crs.name}
            </Typography>
            <Chip
              label={crs.status}
              icon={crs.status === "Completed" ? <CheckCircle /> : <Pending />}
              color={crs.status === "Completed" ? "success" : "warning"}
              sx={{ mb: { xs: "6px", sm: 0 } }}
            />
          </Box>
          <Typography variant="body1">{crs.description}</Typography>
        </CardContent>
      </CardActionArea>
      {crs.certificate && (
        <>
          <Divider />
          <CardActions sx={{ justifyContent: "flex-end" }}>
            <Tooltip title="Show certificate" placement="left">
              <IconButton
                onClick={showCertificateHandler.bind(null, crs.id)}
                sx={{ color: iconColor }}
              >
                <Badge />
              </IconButton>
            </Tooltip>
          </CardActions>
        </>
      )}
    </Card>
  ));

  return <CardContent>{coursesList}</CardContent>;
};

export default Courses;
