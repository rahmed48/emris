import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDirty: false,
};

export const dirtyFormSlice = createSlice({
  name: "dirtyForm",
  initialState,
  reducers: {
    setDirtyForm: (state, action) => {
      state.isDirty = action.payload;
    },
  },
});
