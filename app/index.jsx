import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers';

import Search from './components/Search.jsx';

const store = createStore(reducers);

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
