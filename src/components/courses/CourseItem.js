import { memo } from "react";

import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Chip,
  Divider,
  Typography,
  useTheme,
} from "@mui/material";
import { Badge, CheckCircle, Pending } from "@mui/icons-material";

const CourseItem = ({ course, onShowCertificate }) => {
  const theme = useTheme();

  const cardBackground =
    theme.palette.mode === "dark"
      ? "default"
      : theme.palette.background.default;

  const showCertificateHandler = (cert, fallback) => {
    onShowCertificate(cert, fallback);
  };

  return (
    <Card
      sx={{
        background: cardBackground,
        borderRadius: "8px",
        border: theme.palette.border.default,
        mb: "8px",
        transition: "background-color 250ms linear, border 250ms linear",
      }}
    >
      <CardActionArea LinkComponent="a" href={course.link} target="_blank">
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
              {course.name}
            </Typography>
            <Chip
              label={course.status}
              icon={
                course.status === "Completed" ? <CheckCircle /> : <Pending />
              }
              color={course.status === "Completed" ? "success" : "warning"}
              sx={{ mb: { xs: "6px", sm: 0 } }}
            />
          </Box>
          <Typography variant="body1">{course.description}</Typography>
        </CardContent>
      </CardActionArea>
      {course.certificate && (
        <>
          <Divider />
          <CardActions
            sx={{ justifyContent: { xs: "center", sm: "flex-end" } }}
          >
            <Button
              variant="contained"
              onClick={showCertificateHandler.bind(
                null,
                course.certificate,
                course.fallbackCert
              )}
              startIcon={<Badge />}
              sx={{ textTransform: "none" }}
            >
              Show certificate
            </Button>
          </CardActions>
        </>
      )}
    </Card>
  );
};

export default memo(CourseItem);
