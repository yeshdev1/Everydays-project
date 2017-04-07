import { combineReducers } from 'redux';
import Blogs from './blog';

const rootReducer = combineReducers({
  blogs: Blogs
});

export default rootReducer;
