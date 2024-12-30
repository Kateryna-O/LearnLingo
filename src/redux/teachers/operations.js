import { createAsyncThunk } from "@reduxjs/toolkit";
import { URL_DATA_TEACHERS } from "../../constants/constants";
import axios from "axios";

const baseURL = URL_DATA_TEACHERS;

export const fetchTeachers = createAsyncThunk(
  "teachers/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${baseURL}.json`);
      return Object.keys(response.data).map((key) => ({
        id: key,
        ...response.data[key],
      }));
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchTeachersDetails = createAsyncThunk(
  "teachers/fetchId",
  async ({ id }, thunkAPI) => {
    try {
      const response = await axios.get(`${baseURL}/${id}.json`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
