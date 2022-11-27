import { configureStore } from "@reduxjs/toolkit";

import uiReducer from "./uiSlice";
import projectsReducer from "./projectsSlice";

export default configureStore({
  reducer: {
    ui: uiReducer,
    projects: projectsReducer,
  },
});
