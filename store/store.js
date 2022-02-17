import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { tabReducer } from './reducers';

const rootReducer = combineReducers({
    tabReducer : tabReducer
})

const Store = createStore(rootReducer, applyMiddleware(thunk));

export default Store;