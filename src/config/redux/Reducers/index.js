import { combineReducers } from 'redux';

// import all reducers
import User from './user';
import score from './score';

const appReducer = combineReducers({
  User,
  score
});

export default appReducer;