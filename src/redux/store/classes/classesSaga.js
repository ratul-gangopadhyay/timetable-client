import { takeLatest, call, put } from 'redux-saga/effects';
import * as actions from './classesActions';
import { showSpinner, hideSpinner } from '../common/commonActions';
import { getClasses, addClass } from '../../../service/classesService';
import { toast, Zoom } from 'react-toastify';

export function* fetchClasses() {
  try {
    yield put(showSpinner('Loading Classes...'));
    const result = yield call(getClasses);
    yield put(actions.getClassesSuccess(result.data));
    yield put(hideSpinner());
    yield toast.success('Successfully loaded classes', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
      transition: Zoom,
    });
  } catch (error) {
    yield toast.error(
      error?.response?.data?.errorMessage || 'Some Error Occurred',
      {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
        transition: Zoom,
      }
    );
    yield put(actions.getClassesFailure(error));
  }
}

export function* insertClass({ payload: { classData } }) {
  try {
    const response = yield call(addClass, classData);
    yield toast.success('Success: Added New Class', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
      transition: Zoom,
    });
    yield put(actions.storeClass(response.data));
  } catch (error) {
    yield toast.error(
      error?.response?.data?.errorMessage || 'Some Error Occurred',
      {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
        transition: Zoom,
      }
    );
    yield put(actions.insertClassFailure(error));
  }
}

export function* classesSaga() {
  yield takeLatest(actions.Types.GET_CLASSES_REQUEST, fetchClasses);
  yield takeLatest(actions.Types.INSERT_CLASS_REQUEST, insertClass);
}
