import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const devTools =
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, applyMiddleware(thunk), devTools);

//BrowserRouter - add it....somehow

const router = (
	<Provider store={store}>
		<App />
	</Provider>
);

ReactDOM.render(router, document.getElementById('main'));
