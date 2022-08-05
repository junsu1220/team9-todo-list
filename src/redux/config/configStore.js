import {createStore, combineReducers} from "redux";
import Comment from "../../components/Detail/Comment";


const roootReducer = combineReducers({Comment});


const store = createStore(roootReducer);


export default store;