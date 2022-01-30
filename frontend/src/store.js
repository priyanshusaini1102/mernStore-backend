import { createStore,combineReducers,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {productReducer, productDetailsReducer } from './reducers/productReducer';
import { forgotPasswordReducer, profileReducer, userReducer } from './reducers/userReducer';

const reducer = combineReducers({
    productsState:productReducer,
    productDetailsState:productDetailsReducer,
    userState:userReducer,
    profileState: profileReducer,
    forgotPasswordState: forgotPasswordReducer
});

let initialState = {};

const middleware = [thunk];

const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)));

export default store;