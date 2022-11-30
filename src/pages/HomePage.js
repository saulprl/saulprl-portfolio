import {
  Avatar,
  Box,
  Card,
  CardContent,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";

import { IconContext } from "react-icons";
import { FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiAngular,
  SiFirebase,
  SiFlutter,
  SiJava,
  SiJavascript,
  SiMicrosoftsqlserver,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiTypescript,
} from "react-icons/si";
import { TbCSharp } from "react-icons/tb";

const HomePage = () => {
  const theme = useTheme();

  const avatarBackgroundColor =
    theme.palette.mode === "dark"
      ? theme.palette.secondary.dark
      : theme.palette.secondary.light;

  const iconColor = theme.palette.mode === "dark" ? "#FFFFFF" : "#121212";

  return (
    <>
      <CardContent>
        <Box component="div" sx={{ mb: "1rem" }}>
          <Typography variant="h6">About me</Typography>
          <Typography variant="body1">
            I am a Software/Web Developer based in Sonora, México. At the
            beginning of my journey, I mainly focused on desktop apps and
            back-end, but have since branched out to designing and building
            full-stack web/mobile apps.
            <br />I am passionate about learning, and I believe there is no
            better way to do it than through practice.
          </Typography>
        </Box>
        <Box component="div" sx={{ mb: "1rem" }}>
          <Typography variant="h6">Experience</Typography>
          <Typography variant="body1">
            I have mainly worked on personal and school projects built on
            Angular, Flutter, React, and Java, while also exploring languages
            such as C# and Visual Basic.
            <br />
            Regarding database engines, I've worked with MySQL, SQL Server,
            PostgreSQL, Firebase RTDB, Firebase Firestore, and MongoDB.
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6">Technologies & languages</Typography>
          <Card
            variant="outlined"
            sx={{
              // width: { xs: "100%", md: "75%" },
              padding: "1rem",
              margin: "auto",
              background: theme.palette.background.default,
            }}
          >
            <IconContext.Provider value={{ color: iconColor }}>
              <Box
                component="div"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  mb: "0.5rem",
                }}
              >
                <Tooltip title="React" placement="top">
                  <Avatar sx={{ bgcolor: avatarBackgroundColor }}>
                    <FaReact />
                  </Avatar>
                </Tooltip>
                <Tooltip title="Flutter" placement="top">
                  <Avatar sx={{ bgcolor: avatarBackgroundColor }}>
                    <SiFlutter />
                  </Avatar>
                </Tooltip>
                <Tooltip title="Node.js" placement="top">
                  <Avatar sx={{ bgcolor: avatarBackgroundColor }}>
                    <FaNodeJs />
                  </Avatar>
                </Tooltip>
                <Tooltip title="Angular" placement="top">
                  <Avatar sx={{ bgcolor: avatarBackgroundColor }}>
                    <SiAngular />
                  </Avatar>
                </Tooltip>
                <Tooltip title="MySQL" placement="top">
                  <Avatar sx={{ bgcolor: avatarBackgroundColor }}>
                    <SiMysql />
                  </Avatar>
                </Tooltip>
                <Tooltip title="PostgreSQL" placement="top">
                  <Avatar sx={{ bgcolor: avatarBackgroundColor }}>
                    <SiPostgresql />
                  </Avatar>
                </Tooltip>
                <Tooltip title="SQL Server" placement="top">
                  <Avatar sx={{ bgcolor: avatarBackgroundColor }}>
                    <SiMicrosoftsqlserver />
                  </Avatar>
                </Tooltip>
              </Box>
              <Box
                component="div"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                }}
              >
                <Tooltip title="JavaScript">
                  <Avatar sx={{ bgcolor: avatarBackgroundColor }}>
                    <SiJavascript />
                  </Avatar>
                </Tooltip>
                <Tooltip title="TypeScript">
                  <Avatar sx={{ bgcolor: avatarBackgroundColor }}>
                    <SiTypescript />
                  </Avatar>
                </Tooltip>
                <Tooltip title="Java">
                  <Avatar sx={{ bgcolor: avatarBackgroundColor }}>
                    <SiJava />
                  </Avatar>
                </Tooltip>
                <Tooltip title="C#">
                  <Avatar sx={{ bgcolor: avatarBackgroundColor }}>
                    <TbCSharp />
                  </Avatar>
                </Tooltip>
                <Tooltip title="Firebase">
                  <Avatar sx={{ bgcolor: avatarBackgroundColor }}>
                    <SiFirebase />
                  </Avatar>
                </Tooltip>
                <Tooltip title="MongoDB">
                  <Avatar sx={{ bgcolor: avatarBackgroundColor }}>
                    <SiMongodb />
                  </Avatar>
                </Tooltip>
              </Box>
            </IconContext.Provider>
          </Card>
        </Box>
      </CardContent>
    </>
  );
};

export default HomePage;
