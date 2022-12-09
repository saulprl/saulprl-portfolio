import { memo, useCallback, useState } from "react";

import { CardContent } from "@mui/material";

import ProjectList from "./ProjectList";
import ProjectFilters from "./ProjectFilters";

import { technologies as techData } from "../../data/data";

const Projects = () => {
  const [filters, setFilters] = useState([]);
  const technologies = { ...techData };

  const toggleFilter = useCallback(
    (tech) =>
      setFilters((prevState) =>
        filters.includes(tech)
          ? [...prevState.filter((filter) => filter !== tech)]
          : [...prevState, tech]
      ),
    [filters]
  );

  return (
    <>
      <CardContent>
        <ProjectFilters
          filters={filters}
          technologies={technologies}
          onToggleFilter={toggleFilter}
        />
        <ProjectList filters={filters} />
      </CardContent>
    </>
  );
};

export default memo(Projects);
