import { useState, useMemo, lazy, Suspense, useCallback } from "react";
import { CSSTransition } from "react-transition-group";

import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
  Skeleton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ExpandLess } from "@mui/icons-material";

import classes from "./Projects.module.css";

const TechnologyChip = lazy(() => import("../technologies/TechnologyChip"));

const ProjectFilters = (props) => {
  const { filters, technologies, onAddFilter, onRemoveFilter } = props;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [expanded, setExpanded] = useState(!isMobile);

  const toggleContent = () => {
    setExpanded((prevState) => !prevState);
  };

  const toggleFilter = useCallback(
    (tech, selected) => {
      if (selected) {
        onRemoveFilter(tech);
      } else {
        onAddFilter(tech);
      }
    },
    [onAddFilter, onRemoveFilter]
  );

  const techChips = useMemo(() => {
    const values = [];
    Object.keys(technologies).forEach((key) => values.push(technologies[key]));

    return values.map((tech) => (
      <Suspense
        key={tech.name}
        fallBack={<Skeleton variant="rounded" width={75} height={65} />}
      >
        <TechnologyChip
          technology={tech}
          clickable={true}
          selected={filters.includes(tech)}
          onToggle={toggleFilter}
          sx={{ fontSize: "11px" }}
        />
      </Suspense>
    ));
  }, [toggleFilter, technologies, filters]);

  return (
    <Card
      sx={{
        borderRadius: "8px",
        border: theme.palette.border.default,
        mb: "8px",
        transition: "border 250ms linear",
      }}
    >
      <CardHeader
        title="Filters"
        titleTypographyProps={{ variant: "h6" }}
        action={
          <IconButton onClick={toggleContent} sx={{ color: "white" }}>
            <ExpandLess
              sx={{
                transition: "transform 400ms",
                transform: `rotate(${expanded ? -180 : 0}deg)`,
              }}
            />
          </IconButton>
        }
        sx={{ background: theme.palette.secondary.main, color: "white" }}
      />
      <CSSTransition
        in={expanded}
        timeout={isMobile ? 250 : 100}
        mountOnEnter={false}
        unmountOnExit={true}
        classNames={{
          enter: classes["fade-enter"],
          enterActive: classes["fade-enter-active"],
          exit: classes["fade-exit"],
          exitActive: classes["fade-exit-active"],
        }}
      >
        <Box className={classes["filters-content"]}>
          <Divider />
          <CardContent
            sx={{
              background: theme.palette.background.default,
              transition: "background-color 250ms linear",
            }}
          >
            {techChips}
          </CardContent>
        </Box>
      </CSSTransition>
    </Card>
  );
};

export default ProjectFilters;
