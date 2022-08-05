const CREATE = "comment/CREATE";

const initialState = [];

export function addCommnet(payload) {
    return {
      type: CREATE,
      payload,
    };
  };



  const comment = (state = initialState, action) => {
    switch (action.type) {
        case CREATE:
            return {
                ...state,
                list: [...state.list, action.payload],
            };
    default:
        return state;
  }
}

export default comment;