import { AppBar, Box, Drawer, Toolbar, Typography } from "@mui/material";

const MainDrawer = () => {
  const drawer = (
    <>
      <AppBar position="static" color="primary" enableColorOnDark>
        <Toolbar variant="dense">
          <Typography variant="h6" component="div">
            saulprl's portfolio
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <Box
        component="nav"
        sx={{ width: { sm: "280px" }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          variant="permanent"
          sx={{
            display: {
              xs: "none",
              sm: "block",
            },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "280px",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default MainDrawer;
