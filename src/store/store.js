import { configureStore } from "@reduxjs/toolkit";

import uiReducer from "./uiSlice";
import coursesReducer from "./coursesSlice";
import projectsReducer from "./projectsSlice";

export default configureStore({
  reducer: {
    ui: uiReducer,
    courses: coursesReducer,
    projects: projectsReducer,
  },
});
