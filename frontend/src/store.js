import { combineReducers, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
	productListReducer,
	productDetailsReducer,
} from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';

const reducer = combineReducers({
	productList: productListReducer,
	productDetails: productDetailsReducer,
	cart: cartReducer,
});

const cartItemsFromStorage = localStorage.getItem('cartItems')
	? JSON.parse(localStorage.getItem('cartItems'))
	: [];

const preloadedState = {
	cart: {
		cartItems: cartItemsFromStorage,
	},
};

const middleware = [thunk];

const store = configureStore({
	reducer,
	preloadedState,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(middleware),
	devTools: process.env.NODE_ENV !== 'production',
	preloadedState,
	// composeWithDevTools(applyMiddleware(..))
});

export default store;
