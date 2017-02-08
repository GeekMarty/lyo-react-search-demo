import { createAction } from 'redux-actions';

import * as actionTypes from './actionTypes';

export const changeQuery = createAction(actionTypes.CHANGE_QUERY);
export const sendQuery = createAction(actionTypes.SEND_QUERY);
export const receiveDeals = createAction(actionTypes.RECEIVE_DEALS);
// TODO Error Handling Action
