import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore/*, bindActionCreators*/ } from 'redux';

import Search from './components/Search';

//import * as actions from './actions';

let store = createStore((state = { act: 'none' }, action) => { return action.payload ? Object.assign({}, state, { act: action.payload }) : state; });

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/search" component={Search}>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('search')
);
