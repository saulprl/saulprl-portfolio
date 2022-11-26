const { createSlice } = require("@reduxjs/toolkit");

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    themeMode: "dark",
  },
  reducers: {
    toggleTheme: (state) => {
      state.themeMode = state.themeMode === "dark" ? "light" : "dark";
    },
  },
});

export const { toggleTheme } = uiSlice.actions;

export const selectThemeMode = (state) => state.ui.themeMode;

export default uiSlice.reducer;
