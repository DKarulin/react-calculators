import {applyMiddleware, combineReducers, createStore} from "redux";
import {userReducer} from "./reducers/redusers"
import {pageReducer} from "./reducers/testREdusers"
import thunk from "redux-thunk";
import {currencyReducer} from "./reducers/currencyReducers";

const rootReducer = combineReducers({
    page: pageReducer,
    user: userReducer,
    currency: currencyReducer,
})


export const store = createStore(rootReducer, applyMiddleware(thunk))
