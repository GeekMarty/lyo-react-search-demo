import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'

class HelloWorld extends React.Component {
    render() {
        return (
            <h1>Hello from React Component!</h1>
        );
    }
}

render(
    <Router history={browserHistory}>
        <Route path="/search" component={HelloWorld}>            
        </Route>
    </Router>, 
    document.getElementById('search')
);
