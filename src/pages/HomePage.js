import { lazy, memo, Suspense } from "react";

import { Box, CardContent, Skeleton, Typography } from "@mui/material";

import classes from "./Page.module.css";

const TechnologyGrid = lazy(() =>
  import("../components/technologies/TechnologyGrid")
);

const HomePage = () => {
  return (
    <Box className={classes["page-content"]}>
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
          <Suspense
            fallback={
              <Skeleton variant="rounded" animation="wave" height={100} />
            }
          >
            <TechnologyGrid />
          </Suspense>
        </Box>
      </CardContent>
    </Box>
  );
};

export default memo(HomePage);
