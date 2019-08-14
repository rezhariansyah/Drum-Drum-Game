import { combineReducers } from 'redux';

// import all reducers
import User from './user';

const appReducer = combineReducers({
  User
});

export default appReducer;