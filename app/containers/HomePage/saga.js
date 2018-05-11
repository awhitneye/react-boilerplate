
import { call, put, select, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import { makeSelectCurrentInput } from 'containers/HomePage/selectors';
import { POST_STRING } from './constants';
import { changeString, postError } from './actions';


function postString(input) {
  return axios({
    method: 'post',
    url: 'http://localhost:3000/post',
    data: input,
  });
}

function* worker() {
  const input = { messagetext: yield select(makeSelectCurrentInput()) };
  try {
    yield call(postString, input);
    // dispatch a success action to the store with the messages
    yield put(changeString(''));
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put(postError(error));
  }
}

// Watches for LOAD_REPOS actions and calls getRepos when one comes in.
// By using `takeLatest` only the result of the latest API call is applied.
// It returns task descriptor (just like fork) so we can continue execution
// It will be cancelled automatically on component unmount
export default function* watcher() {
  yield takeLatest(POST_STRING, worker);
}
