
const ADD_COMMENT = "comments/ADD_COMMENT";
const DEL_COMMENT = "comments/DEL_COMMENT";

const initialState = {
  list : [
  {id : 1,
  username: "crystal",
  comment: "열심히 하자",
},
{id : 2,
  username: "new-crystal",
  comment: "열심히 공부하자",
},
]}

export const addComment = (payload) => {
  return {
      type: ADD_COMMENT,
      payload,
      
  };
};

export const delComment = (payload) => {
  console.log(payload);
  return {
    type: DEL_COMMENT,
    payload,
  }
}

export default function comments (state = initialState, action) {
    switch (action.type) {
        case ADD_COMMENT:
            return {
                ...state,
                list: [...state.list, action.payload]
            };
        case DEL_COMMENT:
              return {
                  ...state,
                  list: state.list.filter((item) => item.id !== action.payload)
              };
    default:
        return state;
  }
}
