import {createStore, combineReducers} from "redux";
import comment from "../modules/comments";
import todos from "../modules/todos";


const roootReducer = combineReducers({comment, todos});


const store = createStore(roootReducer);


export default store;