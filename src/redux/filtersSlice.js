import { createSlice } from "@reduxjs/toolkit";

export const selectNameFilter = (state) => state.filters.name;

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    changeContactsFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { changeContactsFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
