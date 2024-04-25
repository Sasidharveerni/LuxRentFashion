import {createStore, combineReducers } from "redux";
import {composeWithDevTools} from '@redux-devtools/extension';
import { imageReducer } from "../reducers/image";
import {addressReducer} from '../reducers/address'

const reducer = combineReducers({
    imageReducer,
    addressReducer
})

const store = createStore(reducer, composeWithDevTools())

export default store