import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import agent from "../helper/axios";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (user, thunkApi) => {
    try {
      const response = await agent.Account.login(user);
      axios.defaults.headers["xc-auth"] = response.token;
      await agent.Account.current();
      return response.token;
    } catch (error) {
      return thunkApi.rejectWithValue("somethings went wrong");
    }
  }
);

const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    accessToken: null,
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.accessToken = action.payload;
    });
  },
});

export default authSlice.reducer;
