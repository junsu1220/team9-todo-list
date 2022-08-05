const ADD_COMMENT = "comments/ADD_COMMENT";
const DEL_COMMENT = "comments/DEL_COMMENT";
const EDIT_COMMENT = "comments/EDIT_COMMENT";

const initialState = {
  list: [
    { id: 1, username: "crystal", comment: "열심히 하자" },
    { id: 2, username: "new-crystal", comment: "열심히 공부하자" },
  ],
};

export const addComment = (payload) => {
  return {
    type: ADD_COMMENT,
    payload,
  };
};

export const delComment = (payload) => {
  return {
    type: DEL_COMMENT,
    payload,
  };
};

export const editComment = (payload) => {
  return {
    type: EDIT_COMMENT,
    payload,
  };
};

export default function comments(state = initialState, action) {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case DEL_COMMENT:
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.payload),
      };
    case EDIT_COMMENT:
      return {
        ...state,
        list: state.list.map((item) => {
          if (item.id === action.payload.id){
            return{
              ...item,
              comment: action.payload.comment
            };
           
          } return item;
        }),
      };
    default:
      return state;
  }
}
