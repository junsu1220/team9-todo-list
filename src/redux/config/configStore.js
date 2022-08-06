import {configureStore} from "@reduxjs/toolkit";
import comments from "../modules/comments";
import todos from "../modules/todos";

const store = configureStore({
    reducer: {
        comments,
        todos
    },
});

export default store;