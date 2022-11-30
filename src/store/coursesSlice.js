import { createSlice } from "@reduxjs/toolkit";
import { courses } from "../data/data";

const coursesSlice = createSlice({
  name: "courses",
  initialState: {
    courses: courses,
  },
  reducers: {
    resetCourses: (state) => {
      state.courses = courses;
    },
  },
});

export const { resetCourses } = coursesSlice.actions;

export const selectCourses = (state) => state.courses.courses;

export default coursesSlice.reducer;
