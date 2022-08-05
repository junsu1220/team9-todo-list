import {createStore, combineReducers} from "redux";
import Comment from "../modules/comment"


const roootReducer = combineReducers({Comment});


const store = createStore(roootReducer);


export default store;