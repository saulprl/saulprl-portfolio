const { createSlice } = require("@reduxjs/toolkit");

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    themeMode: "dark",
    headerTitle: "Home",
  },
  reducers: {
    toggleTheme: (state) => {
      state.themeMode = state.themeMode === "dark" ? "light" : "dark";
    },
    setHeaderTitle: (state, action) => {
      state.headerTitle = action.payload.title;
    },
  },
});

export const { toggleTheme, setHeaderTitle } = uiSlice.actions;

export const selectThemeMode = (state) => state.ui.themeMode;
export const selectHeaderTitle = (state) => state.ui.headerTitle;

export default uiSlice.reducer;
