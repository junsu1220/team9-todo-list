import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [
    { id: 1, username: "crystal", comment: "열심히 하자" },
    { id: 2, username: "new-crystal", comment: "열심히 공부하자" },
  ],
};

export const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addComment(state, action) {
      state.list = [...state.list, action.payload];
    },
    delComment(state, action) {
      state.list = state.list.filter((item) => item.id !== action.payload);
    },
    editComment(state, action) {
      state.list = state.list.map((item) => {
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
  },
});

export const commentsActions = commentSlice.actions;
export default commentSlice;
