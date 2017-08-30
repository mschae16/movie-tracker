import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import rootReducer from './reducers';
import createHistory from '../node_modules/history/createBrowserHistory';
import { Route } from 'react-router';
import {
	ConnectedRouter,
	routerReducer,
	routerMiddleware,
	push
} from 'react-router-redux';

const history = createHistory();
const middleware = routerMiddleware(history);

const devTools =
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = configureStore(devTools);

const router = (
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<App />
		</ConnectedRouter>
	</Provider>
);

ReactDOM.render(router, document.getElementById('main'));
