/* eslint react/no-set-state: "off" */

import React, { PropTypes } from 'react';

class QueryForm extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = { value: props.action };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        event.stopPropagation();

        // Invoke callback when form is submitted
        this.props.changeQuery(this.state.value);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input type="text" value={this.state.value}
                        onChange={this.handleChange}
                    />
                </label>
                <input type="submit" value="Search now" />
            </form>
        );
    }
}

QueryForm.propTypes = {
    action: PropTypes.string.isRequired,
    changeQuery: PropTypes.func.isRequired
};

export default QueryForm;
