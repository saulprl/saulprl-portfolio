import { useSelector } from "react-redux";

import { Box, Card, CardHeader, Divider } from "@mui/material";

import { selectHeaderTitle } from "../../store/uiSlice";

const MainContent = (props) => {
  const headerTitle = useSelector(selectHeaderTitle);

  return (
    <Box
      sx={{
        height: { sm: "100vh" },
        width: { sm: "calc(100% - 280px)" },
        ml: { sm: "280px" },
        padding: "1rem",
        overflow: "auto",
      }}
    >
      <Card
        variant="outlined"
        sx={{
          minHeight: "95vh",
          margin: "auto",
          ml: { md: "0" },
          borderRadius: "16px",
          width: { xs: "100%", md: "530px" },
        }}
      >
        <CardHeader title={headerTitle} />
        <Divider />
        {props.children}
      </Card>
    </Box>
  );
};

export default MainContent;
