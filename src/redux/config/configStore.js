import { configureStore } from "@reduxjs/toolkit";
import posts from "../modules/postsSlice";
const store = configureStore({
  reducer: {
    posts,
  },
});

export default store;

// import { createStore, combineReducers } from "redux";
// import todos from "../modules/todos";

// const rootReducer = combineReducers({ todos });

// const store = createStore(rootReducer);

// export default store;
