import { useState, memo, lazy, Suspense } from "react";

import { CardContent, Skeleton } from "@mui/material";

import { technologies } from "../../data/data";

const ProjectFilters = lazy(() => import("./ProjectFilters"));
const ProjectList = lazy(() => import("./ProjectList"));

const Projects = () => {
  const [filters, setFilters] = useState([]);

  const addFilter = (tech) => setFilters((prevState) => [...prevState, tech]);

  const removeFilter = (tech) =>
    setFilters((prevState) => prevState.filter((filter) => filter !== tech));

  const listSuspenseFallback = (
    <>
      <Skeleton
        variant="rounded"
        animation="wave"
        sx={{ height: "100px", mb: "8px" }}
      />
      <Skeleton
        variant="rounded"
        animation="wave"
        sx={{ height: "90px", mb: "8px" }}
      />
      <Skeleton
        variant="rounded"
        animation="wave"
        sx={{ height: "50px", mb: "8px" }}
      />
    </>
  );

  return (
    <>
      <CardContent>
        <Suspense
          fallback={
            <Skeleton
              variant="rounded"
              animation="wave"
              sx={{ height: "110px", mb: "8px" }}
            />
          }
        >
          <ProjectFilters
            filters={filters}
            technologies={technologies}
            onAddFilter={addFilter}
            onRemoveFilter={removeFilter}
          />
        </Suspense>
        <Suspense fallback={listSuspenseFallback}>
          <ProjectList filters={filters} />
        </Suspense>
      </CardContent>
    </>
  );
};

export default memo(Projects);
