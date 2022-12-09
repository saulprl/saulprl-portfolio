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

import Presentation from "./Presentation";

import classes from "./Layout.module.css";

const MainDrawer = (props) => {
  const { onClose, onToggleTheme } = props;

  const theme = useTheme();
  const history = useHistory();
  const { pathname } = useLocation();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const iconColor = theme.palette.mode === "dark" ? "#FFFFFF" : "#2C2C2C";

  const toggleThemeHandler = () => {
    setTimeout(() => onToggleTheme(), 250);
    const themeIcon = document.getElementById("theme-icon");
    themeIcon.classList.remove(classes["enter-icon"]);
    themeIcon.classList.add(classes["exit-icon"]);
  };

  const pushRoute = (path) => {
    // if (isMobile) onClose();
    history.push(path);
  };

  const items = [
    {
      label: "Home",
      icon: <HomeIcon id="home-icon" />,
      onClick: () => {
        const homeIcon = document.getElementById("home-icon");
        homeIcon.classList.add(classes["bump-icon"]);

        pushRoute("/home");
        setTimeout(() => {
          if (isMobile) onClose();
          homeIcon.classList.remove(classes["bump-icon"]);
        }, 350);
      },
    },
    {
      label: "Projects",
      icon: <FolderIcon id="projects-icon" />,
      onClick: () => {
        const projectsIcon = document.getElementById("projects-icon");
        projectsIcon.classList.remove(classes["bump-icon"]);

        pushRoute("/projects");
        setTimeout(() => {
          if (isMobile) onClose();
          projectsIcon.classList.add(classes["bump-icon"]);
        }, 350);
      },
    },
    {
      label: "Courses",
      icon: <ClassIcon id="courses-icon" />,
      onClick: () => {
        const coursesIcon = document.getElementById("courses-icon");
        coursesIcon.classList.add(classes["bump-icon"]);

        pushRoute("/courses");
        setTimeout(() => {
          if (isMobile) onClose();
          coursesIcon.classList.remove(classes["bump-icon"]);
        }, 350);
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
            <IconButton onClick={toggleThemeHandler} sx={{ color: "white" }}>
              {theme.palette.mode === "dark" ? (
                <LightModeIcon
                  id="theme-icon"
                  className={classes["enter-icon"]}
                />
              ) : (
                <DarkModeIcon
                  id="theme-icon"
                  className={classes["enter-icon"]}
                />
              )}
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <Box component="div" sx={{ padding: "12px" }}>
        <Presentation />
        <List>
          <ListItem sx={{ display: { sm: "none" } }}>
            <ListItemButton
              disableGutters
              disableRipple
              onClick={onToggleTheme}
            >
              <ListItemIcon sx={{ color: iconColor }}>
                <DarkModeIcon />
              </ListItemIcon>
              <ListItemText primary="Dark mode" />
            </ListItemButton>
            <Switch
              edge="end"
              onChange={onToggleTheme}
              checked={theme.palette.mode === "dark"}
            />
          </ListItem>
          {items.map((item, index) => (
            <ListItemButton
              key={index}
              selected={pathname.startsWith(`/${item.label.toLowerCase()}`)}
              onClick={item.onClick.bind(null, index)}
              sx={{
                borderRadius: "16px",
                mb: "6px",
                "&.Mui-selected": {
                  backgroundColor:
                    theme.palette.mode === "dark"
                      ? theme.palette.primary.dark
                      : theme.palette.primary.light,
                  transition: "background-color 250ms linear",
                },
                "&.Mui-selected:hover": {
                  backgroundColor: "rgba(233, 30, 99, 0.65)",
                },
                "&:hover": {
                  backgroundColor: "rgba(125, 161, 160, 0.65)",
                },
              }}
            >
              <ListItemIcon sx={{ color: iconColor }}>{item.icon}</ListItemIcon>
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
              transition: "background-color 250ms linear",
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
