import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  list: [],
};

export const __todosThunk = createAsyncThunk(
  "getTodos",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(
        "https://protected-shelf-37411.herokuapp.com/comments"
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const addComment = createAsyncThunk("addTodos", async (payload) => {
  const data = await axios.post(
    "https://protected-shelf-37411.herokuapp.com/comments",
    payload
  );
  return (
    axios.get("https://protected-shelf-37411.herokuapp.com/comments"), data.data
  );
});

export const delComment = createAsyncThunk("delTodos", async (id) => {
  const data = await axios.delete(
    `https://protected-shelf-37411.herokuapp.com/comments/${id}`
  );
  return id;
});

export const editComment = createAsyncThunk(
  "updateTodos",
  async ({ id, username, comment }) => {
    const data = await axios.put(
      `https://protected-shelf-37411.herokuapp.com/comments/${id}`,
      {
        username,
        comment,
      }
    );
    return { id, username, comment };
  }
);

export const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: {
    [__todosThunk.fulfilled]: (state, action) => {
      state.list = action.payload;
    },
    [__todosThunk.rejected]: (state, action) => {
      state.list = action.payload;
    },
    [addComment.fulfilled]: (state, action) => {
      state.list = [...state, action.payload];
    },
  },
  [delComment.fulfilled]: (state, action) => {
    state.filter((item) => item.id !== action.payload);
  },
  [editComment.fulfilled]: (state, action) => {
    state.list.map((item) => {
      if (item.id === action.payload.id) {
        return {
          ...item,
          username: action.payload.username,
          comment: action.payload.comment,
        };
      } else {
        return { ...item };
      }
    });
  },
});
export const commentsActions = commentSlice.actions;
export default commentSlice;
