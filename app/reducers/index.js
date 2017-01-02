import { combineReducers } from 'redux';

import changeQueryHandler from './changeQueryHandler';

export default combineReducers({ search: changeQueryHandler });
