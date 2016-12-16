import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import { changeQuery } from '../actions';

import QueryForm from './QueryForm';
import QueryResult from './QueryResult';

const changeQueryString = (value) => {
    browserHistory.push('/search?q=' + value);
}

const mapStateToProps = (state) => {
    return {
        action: state.act
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeQuery: (val) => {
            //console.log('dispatched');
            changeQueryString(val);
            dispatch(changeQuery(val));
        }
    };
}

class Search extends React.Component {
    render() {
        return (
            <div>
                <QueryForm action={this.props.action} changeQuery={this.props.changeQuery} />
                <QueryResult action={this.props.action}  />
            </div>
        );
    }
}

Search.propTypes = {
    action: PropTypes.string.isRequired,
    changeQuery: PropTypes.func.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);