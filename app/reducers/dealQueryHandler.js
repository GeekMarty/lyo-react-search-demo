import { handleActions } from 'redux-actions';
// import { SEND_QUERY, RECEIVE_DEALS } from './../actions/actionTypes';

export default handleActions({
    SEND_QUERY: (state, action) => {
        if (action.payload) {

            return {
                isFetching: true,
                didInvalidate: false
            };
        }

        return state;
    },

    RECEIVE_DEALS: (state, action) => {
        if (action.payload && action.payload.success) {

            return {
                isFetching: false,
                didInvalidate: false,
                items: action.payload.result
            };
        }

        return state;
    }
}, {
    isFetching: false,
    didInvalidate: false,
    items: []
});
