import { Menu } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import MainDrawer from "./MainDrawer";

const MainAppBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <MainDrawer open={drawerOpen} onClose={closeDrawerHandler} />
      <AppBar
        position="sticky"
        color="primary"
        enableColorOnDark
        sx={{ display: { sm: "none" } }}
      >
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            onClick={openDrawerHandler}
            sx={{ color: "white" }}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6">saulprl's portfolio</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default MainAppBar;
