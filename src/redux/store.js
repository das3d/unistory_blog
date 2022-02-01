import {applyMiddleware, combineReducers, createStore} from "redux";
import postReducer from "./postReducer";

let RootReducer = combineReducers({
    postReducer,
})

export let store = createStore(RootReducer, applyMiddleware())