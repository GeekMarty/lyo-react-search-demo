import React from 'react';
import { browserHistory } from 'react-router';

class QueryResult extends React.Component {
    constructor(props) {
        super(props);

        this.state = { query: browserHistory.getCurrentLocation().query }
    }

    render() {
        return (
            <div>
                <pre>
                { JSON.stringify(this.state.query, null, 2)  }
                </pre>
                <pre>
                    { JSON.stringify(this.props.action, null, 2)  }
                </pre>
            </div>
        );
    }
}

export default QueryResult;