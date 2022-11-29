import { createSlice } from "@reduxjs/toolkit";

import { projects, technologies } from "../data/data";

const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    technologies: { ...technologies },
    projects: [...projects],
    filters: [],
  },
  reducers: {
    resetProjects: (state) => {
      state.projects = [...projects];
    },
    addFilter: (state, action) => {
      state.filters.push(action.payload.technology);
      state.projects = state.projects.filter((proj) => {
        return state.filters.every((filter) => {
          for (const lang of proj.language) {
            if (lang.name === filter.name) {
              return true;
            }
          }
          for (const database of proj.database) {
            if (database.name === filter.name) {
              return true;
            }
          }
          return false;
        });
      });
    },
    removeFilter: (state, action) => {
      state.filters = state.filters.filter(
        (filter) => filter.name !== action.payload.technology.name
      );
      state.projects = state.projects.filter((proj) => {
        return state.filters.every((filter) => {
          for (const lang of proj.language) {
            if (lang.name === filter.name) {
              return true;
            }
          }
          for (const database of proj.database) {
            if (database.name === filter.name) {
              return true;
            }
          }
          return false;
        });
      });
    },
  },
});

export const { resetProjects, addFilter, removeFilter } = projectsSlice.actions;

export const selectFilters = (state) => state.projects.filters;
export const selectProjects = (state) => state.projects.projects;
export const selectTechnologies = (state) => state.projects.technologies;

export default projectsSlice.reducer;
