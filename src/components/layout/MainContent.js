import { useSelector } from "react-redux";

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

import { selectHeaderTitle } from "../../store/uiSlice";

const MainContent = (props) => {
  const theme = useTheme();
  const headerTitle = useSelector(selectHeaderTitle);

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
        }}
      >
        <CardHeader
          title={headerTitle}
          titleTypographyProps={{ fontWeight: "bold" }}
          action={
            <Tooltip title="Resume" placement="left">
              <IconButton onClick={resumeClickHandler}>
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
