import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import QueryForm from 'components/QueryForm';
import QueryResult from 'components/QueryResult';

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
    <Router history={browserHistory}>
        <Route path="/search" component={HelloWorld}>            
        </Route>
    </Router>, 
    document.getElementById('search')
);
