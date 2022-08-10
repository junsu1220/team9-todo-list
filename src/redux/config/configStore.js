import { configureStore } from "@reduxjs/toolkit";

import logger from "redux-logger";
import posts from "../modules/postsSlice";
const store = configureStore({
  reducer: {
    posts,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;

// import { createStore, combineReducers } from "redux";
// import todos from "../modules/todos";

// const rootReducer = combineReducers({ todos });

// const store = createStore(rootReducer);

// export default store;
