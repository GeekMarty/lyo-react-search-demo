import { combineReducers } from 'redux';

import changeQueryHandler from './changeQueryHandler';
import dealQueryHandler from './dealQueryHandler';

export default combineReducers({
    search: changeQueryHandler,
    querydeals: dealQueryHandler
});
