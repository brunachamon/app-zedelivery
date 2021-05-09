import { createSlice } from "@reduxjs/toolkit";

export const locationSlice = createSlice({
  name: "location",
  initialState: {},
  reducers: {
    setLocation: (state, { payload = {} }) => {
      state.location = payload;
    }
  },
});

export const { setLocation } = locationSlice.actions;

export default locationSlice.reducer;
