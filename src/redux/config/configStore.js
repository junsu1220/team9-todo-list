import { configureStore } from "@reduxjs/toolkit";

import authContext from "../modules/authContext";
import comments from "../modules/comments";
import todos from "../modules/todos";
import logger from "redux-logger";
import posts from "../modules/postsSlice";

const store = configureStore({
  reducer: {
    authContext: authContext.reducer,
    comments: comments.reducer,
    todos: todos.reducer,
    posts,
  },
});

export default store;
