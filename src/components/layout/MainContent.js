import { Box } from "@mui/material";

const MainContent = (props) => {
  return (
    <Box
      sx={{
        width: { sm: "calc(100% - 280px)" },
        ml: { sm: "280px" },
      }}
    >
      {props.children}
    </Box>
  );
};

export default MainContent;
