import React from 'react';
import { browserHistory } from 'react-router';

class QueryForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        //console.log(event);
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        //console.log(event);
        
        browserHistory.push('/search?q=' + this.state.value);

        event.preventDefault();
        event.stopPropagation();
    }

    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <label>
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
            </label>
            <input type="submit" value="Search now" />
        </form>
        );
    }
}

export default QueryForm;