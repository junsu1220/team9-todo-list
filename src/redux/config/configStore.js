import { configureStore } from "@reduxjs/toolkit";

import authContext from "../modules/authContext";
import comments from "../modules/comments";
import todos from "../modules/todos";

const store = configureStore({
  reducer: {
    authContext: authContext.reducer,
    comments: comments.reducer,
    todos: todos.reducer,
  },
});

export default store;
