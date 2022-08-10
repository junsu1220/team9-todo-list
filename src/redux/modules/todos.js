// const ADDTODO = "todo/ADDTODO";

// export function addTodo(todo) {
//   return { type: ADDTODO, todo };
// }

// const initialState = {
//   todos: [
//     {
//       id: 1,
//       userName: "아무개",
//       title: "밥 먹자",
//       comment: "어디에서 먹을까요?",
//     },
//   ],
// };

// export default function reducer(state = initialState, action) {
//   switch (action.type) {
//     case "todo/ADDTODO": {
//       return { ...state, todos: [...state.todos, action.todo] };
//     }
//     default:
//       return state;
//   }
// }
