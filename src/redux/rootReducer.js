import { combineReducers } from 'redux';
import { teachersReducer } from './store/teachers/teachersReducer';
import { classesReducer } from './store/classes/classesReducer';
import { commonReducer } from './store/common/commonReducer';

const rootReducer = combineReducers({
  teachers: teachersReducer,
  classes: classesReducer,
  loader: commonReducer,
});

export default rootReducer;
