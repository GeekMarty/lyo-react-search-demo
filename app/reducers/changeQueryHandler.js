import { handleAction } from 'redux-actions';

import { CHANGE_QUERY } from './../actions/actionTypes';

export default handleAction(
    CHANGE_QUERY, (state, action) => {
        if (action.payload) {
            return {
                ...state,
                act: action.payload
            };
        }

        return state;
    },
    { act: 'none' }
);
