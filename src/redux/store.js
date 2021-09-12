import {createStore, combineReducers, applyMiddleware} from "redux";
import {offersReducer} from "./offersReducer";
import thunkMiddleware from "redux-thunk";
import {offerInfoReducer} from "./offerInfoReducer";

const reducers = combineReducers({
    offersPage: offersReducer,
    offerInfoPage: offerInfoReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;