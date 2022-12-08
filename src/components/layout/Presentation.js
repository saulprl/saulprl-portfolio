import {
  Avatar,
  Box,
  IconButton,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import { Email, GitHub, Twitter } from "@mui/icons-material";

import saulprlPic from "../../assets/pic-squared.jpg";

const Presentation = () => {
  const theme = useTheme();

  const iconColor = theme.palette.mode === "dark" ? "#FFFFFF" : "#2C2C2C";

  const avatar = (
    <Avatar
      alt="Saúl Ramos"
      src={saulprlPic}
      sx={{
        width: { xs: "170px", sm: "220px" },
        height: { xs: "170px", sm: "220px" },
        margin: "auto",
        mt: "8px",
        mr: "8px",
        border: theme.palette.border.default,
        transition: "border 250ms linear",
      }}
    />
  );

  const socials = (
    <>
      <Tooltip title="Twitter">
        <IconButton
          aria-label="twitter.com"
          onClick={() => window.open("https://twitter.com/saulpxrl", "_blank")}
          sx={{ color: iconColor }}
        >
          <Twitter />
        </IconButton>
      </Tooltip>
      <Tooltip title="GitHub">
        <IconButton
          aria-label="github.com"
          onClick={() => window.open("https://github.com/saulprl", "_blank")}
          sx={{ color: iconColor }}
        >
          <GitHub />
        </IconButton>
      </Tooltip>
      <Tooltip title="Email">
        <IconButton
          aria-label="e-mail"
          onClick={() => window.open("mailto:saulramos378@gmail.com", "_blank")}
          sx={{ color: iconColor }}
        >
          <Email />
        </IconButton>
      </Tooltip>
    </>
  );

  return (
    <>
      <Typography variant="h5" textAlign="center">
        Saúl Ramos Laborín
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "row", sm: "column" },
          justifyContent: { xs: "center", sm: "flex-start" },
          alignItems: { xs: "center" },
        }}
      >
        <Box>{avatar}</Box>
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-around",
            background: theme.palette.background.default,
            maxWidth: "180px",
            // mx: "auto",
            mt: { sm: "8px" },
            pt: "2px",
            pb: "2px",
            borderRadius: "6px",
            border: theme.palette.border.default,
            transition: "all 250ms linear",
          }}
        >
          {socials}
        </Box>
      </Box>
    </>
  );
};

export default Presentation;
