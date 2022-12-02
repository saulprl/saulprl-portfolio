import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
  Toolbar,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ClassIcon from "@mui/icons-material/Class";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import FolderIcon from "@mui/icons-material/Folder";
import HomeIcon from "@mui/icons-material/Home";
import LightModeIcon from "@mui/icons-material/LightMode";

import { toggleTheme } from "../../store/uiSlice";

import Presentation from "./Presentation";

const MainDrawer = (props) => {
  const theme = useTheme();
  const history = useHistory();
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const items = [
    {
      label: "Home",
      icon: <HomeIcon />,
      onClick: () => {
        if (isMobile) props.onClose();
        history.push("/home");
      },
    },
    {
      label: "Projects",
      icon: <FolderIcon />,
      onClick: () => {
        if (isMobile) props.onClose();
        history.push("/projects");
      },
    },
    {
      label: "Courses",
      icon: <ClassIcon />,
      onClick: () => {
        if (isMobile) props.onClose();
        history.push("/courses");
      },
    },
  ];

  const drawer = (
    <>
      <AppBar
        position="static"
        color="primary"
        enableColorOnDark
        sx={{ display: { xs: "none", sm: "flex" } }}
      >
        <Toolbar variant="dense" sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" component="div">
            saulprl's portfolio
          </Typography>
          <Tooltip
            title={theme.palette.mode === "dark" ? "Light mode" : "Dark mode"}
            placement="right"
          >
            <IconButton
              onClick={() => dispatch(toggleTheme())}
              sx={{ color: "white" }}
            >
              {theme.palette.mode === "dark" ? (
                <LightModeIcon />
              ) : (
                <DarkModeIcon />
              )}
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <Box component="div" sx={{ padding: "12px" }}>
        <Presentation />
        <List>
          <ListItem sx={{ display: { sm: "none" } }}>
            <ListItemIcon>
              <DarkModeIcon />
            </ListItemIcon>
            <ListItemText primary="Dark mode" />
            <Switch
              edge="end"
              onChange={() => dispatch(toggleTheme())}
              checked={theme.palette.mode === "dark"}
            />
          </ListItem>
          {items.map((item, index) => (
            <ListItemButton
              key={index}
              selected={pathname.includes(item.label.toLowerCase())}
              onClick={item.onClick.bind(null, index)}
              sx={{
                borderRadius: "16px",
                mb: "6px",
                "&.Mui-selected": {
                  backgroundColor:
                    theme.palette.mode === "dark"
                      ? theme.palette.primary.dark
                      : theme.palette.primary.light,
                },
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <Box
        component="nav"
        sx={{ width: { sm: "280px" }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          variant={isMobile ? "temporary" : "permanent"}
          anchor={isMobile ? "top" : "left"}
          open={isMobile ? props.open : true}
          onClose={isMobile ? props.onClose : null}
          ModalProps={{
            keepMounted: true,
            onClose: props.onClose,
          }}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: { xs: "100%", sm: "280px" },
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
