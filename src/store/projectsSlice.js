import { createSlice } from "@reduxjs/toolkit";

import { projects, technologies } from "../data/data";

const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    technologies: { ...technologies },
    projects: [...projects],
  },
  reducers: {
    resetProjects: (state) => {
      state.projects = [...projects];
    },
    filterByLanguage: (state, action) => {
      state.projects = state.projects.filter((proj) =>
        proj.language.includes(action.payload.language)
      );
    },
    filterByDatabase: (state, action) => {
      state.projects = state.projects.filter((proj) =>
        proj.database.includes(action.payload.database)
      );
    },
  },
});

export const { resetProjects, filterByLanguage, filterByDatabase } =
  projectsSlice.actions;

export const selectProjects = (state) => state.projects.projects;
export const selectTechnologies = (state) => state.projects.technologies;

export default projectsSlice.reducer;
