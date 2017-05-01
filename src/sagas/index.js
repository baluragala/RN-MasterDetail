import * as actionTypes from '../actionTypes'
import * as actions from '../actions'
import {takeLatest} from 'redux-saga'
import {call, put, select} from 'redux-saga/effects'

const API_ENDPOINT_USERS = 'https://randomuser.me/api/?results=20&nat=gb';

function* fetchUsersSaga() {
  try {
    const response = yield call(() => fetch(API_ENDPOINT_USERS).then(response => response.json()));
    yield put(actions.fetchUsersSuccess(response));
  } catch (error) {
    yield put(actions.fetchUsersError(error));
  }
}

export function* usersSagaWatcher() {
  yield takeLatest(actionTypes.FETCH_USERS, fetchUsersSaga);
}