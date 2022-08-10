import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts_list: [],
  isLoading: false,
  error: null,
};

export const _getPosts = createAsyncThunk(
  "posts/getPosts",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3001/posts_list");
      console.log(data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const _addPosts = createAsyncThunk(
  "posts/addPosts",
  async (posts_list, thunkAPI) => {
    try {
      const data = await axios.post(
        "http://localhost:3001/posts_list",
        posts_list
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPosts: (state, action) => {
      console.log(action);
      state.posts_list = [...state.posts_list, action.payload];
    },
  },
  extraReducers: {
    [_getPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [_getPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log("fulfilled 상태", state, action); //promise가 fulfilled일 때 dispatch
      state.posts_list = action.payload;
    },
    [_getPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [_addPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts_list = action.payload;
    },
  },
});

export const { addPosts } = postsSlice.actions;

export default postsSlice.reducer;
