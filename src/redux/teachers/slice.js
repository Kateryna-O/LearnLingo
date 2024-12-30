import { createSlice } from "@reduxjs/toolkit";
import { fetchTeachers, fetchTeachersDetails } from "./operations";

const initialState = {
  teachers: [],
  teachersDetails: null,
  isLoading: false,
  error: null,
};

export const teachersSlice = createSlice({
  name: "teachers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeachers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTeachers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.teachers = action.payload;
      })
      .addCase(fetchTeachers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchTeachersDetails.pending, (state) => {
        state.isLoading = true;
        state.teachersDetails = null; 
        state.error = null;
      })
      .addCase(fetchTeachersDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.teachersDetails = action.payload;
      })
      .addCase(fetchTeachersDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const teachersReducer = teachersSlice.reducer;
