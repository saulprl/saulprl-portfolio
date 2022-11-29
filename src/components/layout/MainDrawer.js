import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

import {
  AppBar,
  Avatar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import ClassIcon from "@mui/icons-material/Class";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import EmailIcon from "@mui/icons-material/Email";
import FolderIcon from "@mui/icons-material/Folder";
import GitHubIcon from "@mui/icons-material/GitHub";
import HomeIcon from "@mui/icons-material/Home";
import LightModeIcon from "@mui/icons-material/LightMode";
import TwitterIcon from "@mui/icons-material/Twitter";

import { setHeaderTitle, toggleTheme } from "../../store/uiSlice";

import saulprlPic from "../../assets/pic-squared.jpg";

const MainDrawer = () => {
  const theme = useTheme();
  const history = useHistory();
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const items = [
    {
      label: "Home",
      icon: <HomeIcon />,
      onClick: () => {
        dispatch(setHeaderTitle({ title: "Home" }));
        history.push("/home");
      },
    },
    {
      label: "Projects",
      icon: <FolderIcon />,
      onClick: () => {
        dispatch(setHeaderTitle({ title: "Projects" }));
        history.push("/projects");
      },
    },
    {
      label: "Courses",
      icon: <ClassIcon />,
      onClick: () => {
        dispatch(setHeaderTitle({ title: "Courses" }));
        history.push("/courses");
      },
    },
  ];

  const borderColor = theme.palette.mode === "dark" ? "#282c34" : "gray";

  const drawer = (
    <>
      <AppBar position="static" color="primary" enableColorOnDark>
        <Toolbar variant="dense" sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" component="div">
            saulprl's portfolio
          </Typography>
          <Tooltip
            title={theme.palette.mode === "dark" ? "Light mode" : "Dark mode"}
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
        <Typography variant="h5" textAlign="center">
          Saúl Ramos Laborín
        </Typography>
        <Avatar
          alt="Saúl Ramos"
          src={saulprlPic}
          sx={{
            width: "220px",
            height: "220px",
            margin: "auto",
            mt: "8px",
            border: `1px solid ${borderColor}`,
          }}
        />
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            background: "transparent",
            maxWidth: "180px",
            margin: "auto",
            mt: "8px",
            pt: "2px",
            pb: "2px",
            borderRadius: "6px",
            border: `1px solid ${borderColor}`,
          }}
        >
          <Tooltip title="Twitter">
            <IconButton
              aria-label="twitter.com"
              onClick={() =>
                window.open("https://twitter.com/saulpxrl", "_blank")
              }
            >
              <TwitterIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="GitHub">
            <IconButton
              aria-label="github.com"
              onClick={() =>
                window.open("https://github.com/saulprl", "_blank")
              }
            >
              <GitHubIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Email">
            <IconButton
              aria-label="e-mail"
              onClick={() =>
                window.open("mailto:saulramos378@gmail.com", "_blank")
              }
            >
              <EmailIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <List>
          {items.map((item, index) => (
            <ListItemButton
              key={index}
              sx={{ borderRadius: "16px", mb: "6px" }}
              selected={pathname.includes(item.label.toLowerCase())}
              onClick={item.onClick.bind(null, index)}
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
