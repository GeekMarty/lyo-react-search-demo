import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducers from './reducers';

import Search from './components/Search.jsx';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMiddleware))
);
/* eslint-enable */

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route
                component={Search}
                path="/search"
            />
        </Router>
    </Provider>,
    document.getElementById('search')
);
