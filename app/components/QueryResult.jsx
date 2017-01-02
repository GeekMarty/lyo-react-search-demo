import React from 'react';
import { browserHistory } from 'react-router';

class QueryResult extends React.Component {
    constructor(props) {
        super(props);

        this.state = { query: browserHistory.getCurrentLocation().query };
    }

    render() {
        return (
            <div>
                <h3>{'Query'}</h3>
                <pre>
                    { JSON.stringify(this.state.query, null, 2) }
                </pre>
                <h3>{'State'}</h3>
                <pre>
                    { JSON.stringify(this.props.action, null, 2) }
                </pre>
            </div>
        );
    }
}

QueryResult.propTypes = { action: React.PropTypes.string.isRequired };

export default QueryResult;
