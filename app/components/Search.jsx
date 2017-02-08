/* global searchApp */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Spinner from 'react-spinkit';

import { changeQuery, sendQuery, receiveDeals } from '../actions';

import QueryForm from './QueryForm.jsx';
import QueryResult from './QueryResult.jsx';
import DealBox from './DealBox.jsx';
import fetch from 'isomorphic-fetch';

const changeQueryString = (value) => {
    browserHistory.push('/search?q=' + encodeURIComponent(value));
};

const mapStateToProps = (state) => {
    return {
        action: state.search.act,
        deals: state.querydeals.items,
        isFetchingDeals: state.querydeals.isFetching
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeQuery: (val) => {
            changeQueryString(val);
            dispatch(changeQuery(val));
        },
        dealQuery: (val) => {
            dispatch(sendQuery(val));

            const form = new FormData();

            form.append('term', val);

            return fetch(searchApp.Urls.searchUrl, {
                method: 'POST',
                body: form
            })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Network response was not OK.');
            })
            .then((json) => dispatch(receiveDeals(JSON.parse(json))))
            .catch((err) => console.error('An error was encountered during the fetch operation for deals: ' + err.message));
        }
    };
};

class Search extends React.Component {

    dealRow(deal) {
        return (
            <div key={deal} className="row">
                <DealBox deal={deal} />
            </div>
        );
    }

    spinner(name) {
        return (
            <Spinner spinnerName={name} />
        );
    }

    render() {
        const areDealsAvailable = this.props.deals && this.props.deals.length > 0;

        return (
            <div>
                <QueryForm action={this.props.action}
                    changeQuery={this.props.changeQuery}
                    dealQuery={this.props.dealQuery}
                />
                <QueryResult action={this.props.action} />
                {areDealsAvailable ? this.props.deals.map(this.dealRow) : ''}
                {this.props.isFetchingDeals ? this.spinner('rotating-plane') : ''}
            </div>
        );
    }
}

Search.propTypes = {
    action: PropTypes.string.isRequired,
    changeQuery: PropTypes.func.isRequired,
    dealQuery: PropTypes.func.isRequired,
    deals: PropTypes.arrayOf(PropTypes.string),
    isFetchingDeals: PropTypes.bool.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);
