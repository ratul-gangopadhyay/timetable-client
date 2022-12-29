import { takeLatest, call, put } from 'redux-saga/effects';
import * as actions from './timetableActions';
import {
  deleteSlot,
  getRoutineMap,
  insertSlot,
  updateSlot,
} from '../../../service/timetableService';
import { toast, Zoom } from 'react-toastify';
import { showSpinner, hideSpinner } from '../common/commonActions';

export function* getRoutineMapSaga({ parameters: { standard, section } }) {
  try {
    yield put(showSpinner('Fetching Timetable...'));
    const result = yield call(getRoutineMap, standard, section);
    yield put(hideSpinner());
    yield put(actions.getRoutineSuccess(result.data));
  } catch (error) {
    yield put(hideSpinner());
    yield toast.error(
      error?.response?.data?.errorMessage || 'Some Error Occured',
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
    yield put(actions.getRoutineFailure(error));
  }
}

export function* insertSlotSaga({ payload: { slot } }) {
  try {
    yield put(showSpinner('Saving slot info'));
    const response = yield call(insertSlot, slot);
    yield toast.success('Success: New Slot Added', {
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
    yield put(hideSpinner());
    yield put(actions.saveSlot(response.data));
  } catch (error) {
    yield put(hideSpinner());
    yield toast.error(
      error?.response?.data?.errorMessage || 'Some Error Occured',
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
    yield put(actions.insertSlotFailure(error));
  }
}

export function* updateSlotSaga({
  payload: { slot },
  params: { standard, section, weekDay, period },
}) {
  try {
    yield put(showSpinner('Updating slot info'));
    const response = yield call(
      updateSlot,
      standard,
      section,
      weekDay,
      period,
      slot
    );
    yield toast.success('Success: Slot Updated', {
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
    yield put(hideSpinner());
    yield put(actions.saveSlot(response.data));
  } catch (error) {
    yield put(hideSpinner());
    yield toast.error(
      error?.response?.data?.errorMessage || 'Some Error Occured',
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
    yield put(actions.updateSlotFailure(error));
  }
}

export function* deleteSlotSaga({
  params: { standard, section, weekDay, period },
}) {
  try {
    yield put(showSpinner('Deleting slot info'));
    const response = yield call(deleteSlot, standard, section, weekDay, period);
    yield toast.success(response, {
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
    yield put(hideSpinner());
    yield call(getRoutineMapSaga,{ parameters: { standard, section } });
  } catch (error) {
    yield put(hideSpinner());
    yield toast.error(
      error?.response?.data?.errorMessage || 'Some Error Occured',
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
    yield put(actions.deleteSlotFailure(error));
  }
}

export function* timetableSaga() {
  yield takeLatest(actions.TYPES.GET_ROUTINE_REQUEST, getRoutineMapSaga);
  yield takeLatest(actions.TYPES.INSERT_SLOT_REQUEST, insertSlotSaga);
  yield takeLatest(actions.TYPES.UPDATE_SLOT_REQUEST, updateSlotSaga);
  yield takeLatest(actions.TYPES.DELETE_SLOT_REQUEST, deleteSlotSaga);
}
