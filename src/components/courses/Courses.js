import { useState } from "react";

import { Badge, CheckCircle, Pending } from "@mui/icons-material";
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

import CertificateImage from "./CertificateImage";

import { courses as coursesData } from "../../data/data";

const Courses = () => {
  const theme = useTheme();
  const [showCertificate, setShowCertificate] = useState(false);
  const [certificate, setCertificate] = useState(null);

  const courses = [...coursesData];

  const showCertificateHandler = (cert) => {
    setCertificate(cert);
    setShowCertificate(true);
  };

  const closeCertificateHandler = () => {
    setShowCertificate(false);
    setCertificate(null);
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
          <CardActions
            sx={{ justifyContent: { xs: "center", sm: "flex-end" } }}
          >
            <Button
              variant="contained"
              onClick={showCertificateHandler.bind(null, crs.certificate)}
              startIcon={<Badge />}
              sx={{ textTransform: "none" }}
            >
              Show certificate
            </Button>
          </CardActions>
        </>
      )}
    </Card>
  ));

  return (
    <>
      <CardContent>{coursesList}</CardContent>
      <CertificateImage
        open={showCertificate}
        onClose={closeCertificateHandler}
        image={certificate}
      />
    </>
  );
};

export default Courses;
