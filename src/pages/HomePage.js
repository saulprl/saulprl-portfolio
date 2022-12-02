import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
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

  const iconColor = theme.palette.mode === "dark" ? "#FFFFFF" : "#FFFFFF";

  const techBox = (
    <Grid container spacing={1}>
      <Grid item xs={3} sm={2} justifyContent="space-evenly">
        <Tooltip title="React" placement="top">
          <Avatar sx={{ bgcolor: avatarBackgroundColor }}>
            <FaReact />
          </Avatar>
        </Tooltip>
      </Grid>
      <Grid item xs={3} sm={2}>
        <Tooltip title="Flutter" placement="top">
          <Avatar sx={{ bgcolor: avatarBackgroundColor }}>
            <SiFlutter />
          </Avatar>
        </Tooltip>
      </Grid>
      <Grid item xs={3} sm={2}>
        <Tooltip title="Node.js" placement="top">
          <Avatar sx={{ bgcolor: avatarBackgroundColor }}>
            <FaNodeJs />
          </Avatar>
        </Tooltip>
      </Grid>
      <Grid item xs={3} sm={2}>
        <Tooltip title="Angular" placement="top">
          <Avatar sx={{ bgcolor: avatarBackgroundColor }}>
            <SiAngular />
          </Avatar>
        </Tooltip>
      </Grid>
      <Grid item xs={3} sm={2}>
        <Tooltip title="MySQL" placement="top">
          <Avatar sx={{ bgcolor: avatarBackgroundColor }}>
            <SiMysql />
          </Avatar>
        </Tooltip>
      </Grid>
      <Grid item xs={3} sm={2}>
        <Tooltip title="PostgreSQL" placement="top">
          <Avatar sx={{ bgcolor: avatarBackgroundColor }}>
            <SiPostgresql />
          </Avatar>
        </Tooltip>
      </Grid>
      <Grid item xs={3} sm={2}>
        <Tooltip title="SQL Server" placement="top">
          <Avatar sx={{ bgcolor: avatarBackgroundColor }}>
            <SiMicrosoftsqlserver />
          </Avatar>
        </Tooltip>
      </Grid>
      <Grid item xs={3} sm={2}>
        <Tooltip title="JavaScript">
          <Avatar sx={{ bgcolor: avatarBackgroundColor }}>
            <SiJavascript />
          </Avatar>
        </Tooltip>
      </Grid>
      <Grid item xs={3} sm={2}>
        <Tooltip title="TypeScript">
          <Avatar sx={{ bgcolor: avatarBackgroundColor }}>
            <SiTypescript />
          </Avatar>
        </Tooltip>
      </Grid>
      <Grid item xs={3} sm={2}>
        <Tooltip title="Java">
          <Avatar sx={{ bgcolor: avatarBackgroundColor }}>
            <SiJava />
          </Avatar>
        </Tooltip>
      </Grid>
      <Grid item xs={3} sm={2}>
        <Tooltip title="C#">
          <Avatar sx={{ bgcolor: avatarBackgroundColor }}>
            <TbCSharp />
          </Avatar>
        </Tooltip>
      </Grid>
      <Grid item xs={3} sm={2}>
        <Tooltip title="Firebase">
          <Avatar sx={{ bgcolor: avatarBackgroundColor }}>
            <SiFirebase />
          </Avatar>
        </Tooltip>
      </Grid>
      <Grid item xs={3} sm="auto">
        <Tooltip title="MongoDB" placement="right">
          <Avatar sx={{ bgcolor: avatarBackgroundColor }}>
            <SiMongodb />
          </Avatar>
        </Tooltip>
      </Grid>
    </Grid>
  );

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
              width: "100%",
              padding: "1rem",
              margin: "auto",
              background: theme.palette.background.default,
            }}
          >
            <IconContext.Provider value={{ color: iconColor }}>
              {techBox}
            </IconContext.Provider>
          </Card>
        </Box>
      </CardContent>
    </>
  );
};

export default HomePage;
