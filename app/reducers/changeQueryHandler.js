import { handleAction } from 'redux-actions';
import { CHANGE_QUERY } from './../actions/actionTypes';

export default handleAction(
    CHANGE_QUERY, (state, action) => {
        if (action.payload) {

            // New State
            return {
                act: action.payload
            };
        }

        // Unchanged State
        return state;
    },
    // Initial state
    {
        act: 'none'
    }
);
