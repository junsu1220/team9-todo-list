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
      const data = await axios.get(
        "https://protected-shelf-37411.herokuapp.com/posts_list"
      );
      console.log(data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      //   console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const _addPosts = createAsyncThunk(
  "posts/addPosts",
  async (posts_list, thunkAPI) => {
    try {
      const data = await axios.post(
        "https://protected-shelf-37411.herokuapp.com/posts_list",
        posts_list
      );
      //   console.log(data.data.id);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const _delPosts = createAsyncThunk(
  "posts/delPosts",
  async (id, thunkAPI) => {
    try {
      await axios.delete(
        `https://protected-shelf-37411.herokuapp.com/posts_list/${id}`
      );
      console.log(id);

      //   thunkAPI.dispatch(_getPosts(id));
      return thunkAPI.fulfillWithValue(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const _findPosts = createAsyncThunk(
  "posts/findPosts",
  async (id, thunkAPI) => {
    try {
      const data = await axios.get(
        `https://protected-shelf-37411.herokuapp.com/posts_list/${id}`
      );
      console.log(data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      //   console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const _editPosts = createAsyncThunk(
  "posts/editPosts",
  async ({ id, title, userName }, thunkAPI) => {
    const res = await axios.put(
      `https://protected-shelf-37411.herokuapp.com/posts_list/${id}`,
      {
        title: title,
        userName: userName,
      }
    );
    thunkAPI.dispatch(_getPosts(id));
    return thunkAPI.fulfillWithValue(id, title, userName);
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
      state.posts_list = [...state.posts_list, action.payload];
    },
    [_delPosts.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.posts_list = state.posts_list.filter(
        (post) => post.id !== action.payload
      );
    },
    [_findPosts.fulfilled]: (state, action) => {
      console.log(action.payload["id"]);
      state.posts_list = state.posts_list.filter(
        (post) => post.id === action.payload["id"]
      );
    },
    [_editPosts.fulfilled]: (state, action) => {
      state.posts_list.map((post) => {
        if (post.id === action.payload.id) {
          return {
            ...post,
            title: action.payload.title,
            userName: action.payload.userName,
          };
        } else {
          return {
            post,
          };
        }
      });
    },
  },
});

export const { addPosts } = postsSlice.actions;

export default postsSlice.reducer;
