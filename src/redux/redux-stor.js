import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {currencyReducer} from "./reducers/currencyReducers";
import {currencyListReducer} from "./reducers/currencyListReducer";

const rootReducer = combineReducers({
    currency: currencyReducer,
    currencyList: currencyListReducer,
})


export const store = createStore(rootReducer, applyMiddleware(thunk))
