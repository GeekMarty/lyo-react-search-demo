import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import QueryForm from './components/QueryForm';
import QueryResult from './components/QueryResult';


let store = createStore((state = { act: 'none' }, action) => { return state; });

class HelloWorld extends React.Component {
    render() {
        return (
            <div>
                <QueryForm />
                <QueryResult />
            </div>           
        );
    }
}

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/search" component={HelloWorld}>            
            </Route>
        </Router>
    </Provider>, 
    document.getElementById('search')
);
