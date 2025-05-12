import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-hot-toast";

const setAuthHeader = (value) => {
  axios.defaults.headers.common.Authorization = value;
};
export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    console.log("register", credentials);
    try {
      const response = await axios.post("/users/signup", credentials);
      setAuthHeader(`Bearer ${response.data.token}`);
      return response.data;
    } catch (error) {
      const message =
        error.response?.status === 400
          ? "User with this email is already registered"
          : error.response?.data?.message || error.message;

      toast.error(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    console.log("login", credentials);
    try {
      const response = await axios.post("/users/login", credentials);
      setAuthHeader(`Bearer ${response.data.token}`);
      return response.data;
    } catch (error) {
      const message =
        error.response?.status === 400
          ? "Invalid username or password"
          : error.response?.data?.message || error.message;

      toast.error(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async () => {
  await axios.post("/users/logout");
  setAuthHeader("");
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    try {
      const reduxState = thunkAPI.getState();
      setAuthHeader(`Bearer ${reduxState.auth.token}`);
      const response = await axios.get("/users/current");
      return response.data;
    } catch (error) {
      toast.error("Oops...try again!");
      return thunkAPI.rejectWithValue();
    }
  },
  {
    condition: (_, thunkAPI) => {
      const reduxState = thunkAPI.getState();
      return reduxState.auth.token !== null;
    },
  }
);
