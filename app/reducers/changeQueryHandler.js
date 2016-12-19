import { handleAction } from 'redux-actions';

import { CHANGE_QUERY } from './../actions/actionTypes';

export default handleAction(
    CHANGE_QUERY, (state, action) => {
        return action.payload ? { ...state, act: action.payload } : state;
    },
    { act: 'none' }
);
