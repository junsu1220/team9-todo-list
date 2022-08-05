import {createStore, combineReducers} from "redux";
import comment from "../modules/comments"


const roootReducer = combineReducers({comment});


const store = createStore(roootReducer);


export default store;