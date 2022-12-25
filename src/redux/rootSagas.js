import { all, fork } from 'redux-saga/effects';
import { teachersSaga } from './store/teachers/teachersSaga';
import { classesSaga } from './store/classes/classesSaga';
import { timetableSaga } from './store/timetables/timetableSaga';

export default function* rootSaga() {
  yield all([fork(teachersSaga), fork(classesSaga), fork(timetableSaga)]);
}
