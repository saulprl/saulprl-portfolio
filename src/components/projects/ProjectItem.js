import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Skeleton,
  Typography,
  useTheme,
} from "@mui/material";

import classes from "./Projects.module.css";

const TechnologyChip = lazy(() => import("../technologies/TechnologyChip"));

const ProjectItem = (props) => {
  const proj = props.project;
  const theme = useTheme();

  const projectItemBackground =
    theme.palette.mode === "dark"
      ? "default"
      : theme.palette.background.default;

  return (
    <Card
      key={proj.id}
      sx={{
        background: projectItemBackground,
        borderRadius: "8px",
        border: theme.palette.border.default,
        mb: "8px",
        transition: "background-color 250ms linear, border 250ms linear",
      }}
      className={classes["project-item"]}
    >
      <CardActionArea LinkComponent={Link} to={`/projects/${proj.id}`}>
        <CardContent>
          <Box
            component="div"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography variant="h6" fontWeight="bold">
                {proj.name}
              </Typography>
              <Typography variant="body2">{`${
                proj.description.length >= 166
                  ? `${proj.description.substring(0, 166)}...`
                  : proj.description
              }`}</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: { sm: "flex-end" },
              }}
            >
              {proj.language.map((lang, index) => (
                <Suspense
                  key={index}
                  fallback={
                    <Skeleton
                      variant="rounded"
                      animation="wave"
                      height={45}
                      width={135}
                    />
                  }
                >
                  <TechnologyChip
                    technology={lang}
                    clickable={false}
                    selected={props.filters.includes(lang)}
                  />
                </Suspense>
              ))}
              {proj.database.map((database, index) => (
                <Suspense
                  key={index}
                  fallback={
                    <Skeleton
                      variant="rounded"
                      animation="wave"
                      height={45}
                      width={135}
                    />
                  }
                >
                  <TechnologyChip
                    technology={database}
                    clickable={false}
                    selected={props.filters.includes(database)}
                  />
                </Suspense>
              ))}
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProjectItem;
