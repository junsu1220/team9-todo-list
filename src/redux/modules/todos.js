import { createSlice } from "@reduxjs/toolkit";

const todos = createSlice({
  name: "todos",
  initialState: {
    todos: [
      {
        id: 1,
        userName: "개똥이",
        title: "만화 보자",
        comment: "무엇을 볼까요?",
      },
    ],
  },

  reducers: {
    addTodo(state, action) {
      state.todos = [...state.todos, action.payload];
    },
  },
});

export const todosActions = todos.actions;

export default todos;
