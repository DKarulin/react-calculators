import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {currencyReducer} from "./reducers/currencyReducers";

const rootReducer = combineReducers({
    currency: currencyReducer,
})


export const store = createStore(rootReducer, applyMiddleware(thunk))
