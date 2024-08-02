import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type userProp = {
  username: string;
  email: string;
  password: string;
  role: string;
};

type initialStateProp = {
  user: any;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: String;
};

const initialState: initialStateProp = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const LoginUser = createAsyncThunk(
  "user/LoginUser",
  async (User: userProp, thunkAPI) => {
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email: User.email,
        password: User.password,
      });
      console.log(response.data);
      //   return response.data;
    } catch (error: any) {
      if (error.response) {
        const message = error.response.data.msg;
        // console.log(error.response);
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

export const getMe = createAsyncThunk("user/getMe", async (_, thunkAPI) => {
  // console.log(req.session.uuid);
  try {
    const response = await axios.get("http://localhost:5000/me");
    return response.data;
  } catch (error: any) {
    if (error.response) {
      const message = error.response.data.msg;
      return thunkAPI.rejectWithValue(message);
    }
  }
});

export const LogOut = createAsyncThunk("user/LogOut", async () => {
  await axios.delete("http://localhost:5000/logout");
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(LoginUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(LoginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
      //   console.log("success");
    });
    builder.addCase(LoginUser.rejected, (state, action: any) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      //   console.log("error");
    });

    // Get User Login
    builder.addCase(getMe.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getMe.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
    });
    builder.addCase(getMe.rejected, (state, action: any) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
