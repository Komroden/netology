import { createStore, combineReducers,compose, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import {courseReducer} from "./courses/reducer";

const rootReducer = combineReducers({
courses:courseReducer

})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



export const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
))