import { createStore,applyMiddleware } from "redux";
import {thunk} from 'redux-thunk';
import CounterReducer  from "./CounterReducer";

const Store = createStore(CounterReducer, applyMiddleware(thunk));

export default Store;
