
import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import { LOAD_STRINGS } from './constants';
import { stringsLoaded, stringsLoadingError } from './actions';

function retrieveStrings() {
  return axios({
    method: 'get',
    url: 'http://localhost:3000/strings',
  });
}

function* worker() {
  try {
    const response = yield call(retrieveStrings);
    const strings = response.data;
    // dispatch a success action to the store with the messages
    yield put(stringsLoaded(strings));
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put(stringsLoadingError(error));
  }
}
// Watches for LOAD_REPOS actions and calls getRepos when one comes in.
// By using `takeLatest` only the result of the latest API call is applied.
// It returns task descriptor (just like fork) so we can continue execution
// It will be cancelled automatically on component unmount
export default function* watching() {
  yield takeLatest(LOAD_STRINGS, worker);
}

