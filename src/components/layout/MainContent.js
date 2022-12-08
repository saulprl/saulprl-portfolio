import {
  Box,
  Card,
  CardHeader,
  Divider,
  IconButton,
  Tooltip,
  useTheme,
} from "@mui/material";
import { Article } from "@mui/icons-material";

const MainContent = (props) => {
  const theme = useTheme();
  const { title } = props;

  const iconColor = theme.palette.mode === "dark" ? "#FFFFFF" : "#2C2C2C";

  const resumeClickHandler = (event) => {
    window.open(
      "https://drive.google.com/file/d/1CUI2A35QdO5em1i3ycHzgtu3hm2R57su/view?usp=sharing",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <Box
      sx={{
        height: { sm: "100vh" },
        width: { sm: "calc(100% - 280px)" },
        ml: { sm: "280px" },
        padding: "8px",
        overflow: "auto",
      }}
    >
      <Card
        variant="outlined"
        sx={{
          minHeight: "97vh",
          margin: "auto",
          ml: { md: "0" },
          borderRadius: "16px",
          border: theme.palette.border.default,
          width: { xs: "100%", md: "530px" },
          transition: "all 250ms linear",
        }}
      >
        <CardHeader
          title={title}
          titleTypographyProps={{ fontWeight: "bold" }}
          action={
            <Tooltip title="Resume" placement="left">
              <IconButton
                onClick={resumeClickHandler}
                sx={{ color: iconColor }}
              >
                <Article />
              </IconButton>
            </Tooltip>
          }
        />
        <Divider />
        {props.children}
      </Card>
    </Box>
  );
};

export default MainContent;
